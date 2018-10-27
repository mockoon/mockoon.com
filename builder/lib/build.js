const rimraf = require('rimraf');
const merge = require('merge-stream');
const gulp = require('gulp');
const concat = require('gulp-concat');
const ncp = require('ncp').ncp;
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const utils = require('./utils');
const config = require('./config');
const handlebarsOptions = require('./handlebarsOptions');


/**
 * Page compilation task
 */
const pagesCompile = () => {
  // load main config
  const mainSiteConfig = utils.readJSONSync(config.sourcePath + 'main_config.json');
  // load common config/translations
  const commonConfig = utils.readJSONSync(config.sourcePath + 'common.json');

  // declare object to store sitemap urls
  const sitemap = {
    multiLanguagesUrls: [],
    urls: []
  };

  // parse all pages (subdirectories recursively + "." for index page)
  const pages = [];
  utils.readDirectories(config.pagesPath, pages);
  pages.push('.');


  // create a gulp task for each page
  const pagesTasks = pages.map((pagePath) => {
    // array to store gulp tasks
    const languageCompilationTasks = [];
    // array to store sitemap multi languages urls
    const sitemapMultiLanguagesUrls = [];
    // array to store alternates urls
    const linkAlternate = [];

    // read page config
    const pageConfig = utils.readJSONSync(config.pagesPath + pagePath + '/config.json');

    // get page languages
    const pageLanguages = Object.keys(pageConfig.languages);

    pageLanguages.forEach((pageLanguage, pageLanguageIndex) => {
      // set language prefix folder (none if default language)
      const langPrefix = (pageLanguage === mainSiteConfig.defaultLanguage) ? '' : '/' + pageLanguage;

      // set page path suffix
      let pageSuffix = '';
      if (pagePath !== '.') {
        pageSuffix = '/' + pagePath;

        // if page name is customized
        if (pageConfig.languages[pageLanguage].pageUrl) {
          const pathSegments = pagePath.split('/');
          pathSegments.pop();

          // only add trailing / to joined segments if there is some segments
          pageSuffix = '/' + ((pathSegments.join('/') === '') ? '' : pathSegments.join('/') + '/') + pageConfig.languages[pageLanguage].pageUrl;
        }
      }

      // assemble page url
      const pageUrl = `${mainSiteConfig.domain}${langPrefix}${pageSuffix}`;


      // build sitemap arrays
      if (pageLanguages.length === 1) {
        // if page has only one language add url to simple urls of sitemap object
        sitemap.urls.push({ url: pageUrl })
      } else {
        // if multiple languages add each language url to the array
        sitemapMultiLanguagesUrls.push({
          lang: pageLanguage,
          url: pageUrl,
          isDefaultLang: pageLanguage === mainSiteConfig.defaultLanguage
        });

        // when all languages have been processed add urls object to sitemap
        if (pageLanguageIndex === (pageLanguages.length - 1)) {
          // add page urls language array
          sitemap.multiLanguagesUrls.push({ sitemapMultiLanguagesUrls });
        }
      }


      // build alternates urls
      linkAlternate.push({
        lang: pageLanguage,
        url: pageUrl
      });


      // create data to be used in handlebars template
      const pageData = {
        mainSiteConfig,
        currentLang: pageLanguage,
        linkAlternate,
        currentAbsoluteUrl: pageUrl,
        texts: pageConfig.languages[pageLanguage],
        commonTexts: commonConfig.languages[pageLanguage]
      };


      // create gulp task
      const gulpTask = gulp.src(config.pagesPath + pagePath + '/*.hbs')
        .pipe(handlebars(pageData, handlebarsOptions))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(config.buildPath + langPrefix + pageSuffix));

      languageCompilationTasks.push(gulpTask);
    });

    return languageCompilationTasks;
  });

  // create sitemap build task
  const sitemapTask = (gulp.src(`${config.sourcePath}templates/sitemap.hbs`)
    .pipe(handlebars(sitemap, handlebarsOptions))
    .pipe(rename('sitemap.xml'))
    .pipe(gulp.dest(config.buildPath)));

  return merge(pagesTasks, sitemapTask);
};



/**
 * Sass compilation task
 */
const sassCompile = () => {
  return gulp.src([config.sourcePath + 'style/style.scss'])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(config.buildPath + 'assets/css'));
};



/**
 * Static file copy task
 */
const staticCopy = () => {
  ncp(config.assetsPath, config.buildPath, (error) => {
    if (error) {
      return console.error(error);
    }
  });
};



/**
 *
 * Gulp tasks declaration
 *
 */
gulp.task('compile', () => {
  // clean existing files before compiling
  rimraf(config.buildPath, () => {
    pagesCompile();
    sassCompile();
    staticCopy();
  });
})

gulp.task('watch', ['compile'], () => {
  gulp.watch([
    config.sourcePath + '**/*.hbs',
    config.sourcePath + '**/*.json',
    config.assetsPath + '**/*.*',
    config.sourcePath + '**/*.scss',
    config.sourcePath + '**/*.sass'
  ], ['compile']);
});
