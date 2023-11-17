import { readFileSync, writeFileSync } from 'fs';
import { slug } from 'github-slugger';
import { glob } from 'glob';
import matter from 'gray-matter';
import { markdownToTxt } from 'markdown-to-txt';

const searchIndex = [];

const scores = {
  releases: 8,
  docs: 10,
  tutorials: 9,
  articles: 7,
  blog: 6
};

glob([
  './content/releases/**/*.md',
  './content/docs/latest/**/*.md',
  './content/{tutorials,blog}/**/*.md'
]).then((files) => {
  files.forEach((filePath) => {
    filePath = filePath.replace(/\\/g, '/');
    const link = `/${filePath
      .replace('./content/', '')
      .replace('content/', '')
      .replace('.md', '')}/`;
    const category = filePath.split('/')[1];

    console.log('\nFile:', filePath, '\nLink:', link);

    let fileContent = readFileSync(filePath).toString();

    const frontMatter = matter(fileContent);

    // Remove front matter
    fileContent = fileContent.replace(/^---[\s\S]*?---\s*/, '');
    fileContent = fileContent.replace(/\r\n/g, '\n');

    let sections = fileContent.split(/\n(?=#)/);

    sections.map((sectionContent, sectionContentIndex) => {
      let match = sectionContent.match(/^#+[ ]*(.+)[\n]+/);
      let sectionTitle = '';
      let sectionAnchor = '';

      if (match) {
        sectionTitle = match[1];
        sectionAnchor = slug(sectionTitle);
      }

      const content = markdownToTxt(
        sectionContent.replace(/^#+[ ]*(.+)[\n]+/, '')
      )
        .replace(/\n/g, ' ')
        // remove image sizes
        .replace(/\{[0-9]+x[0-9]+\}/g, '');

      // if no content, title was alone (docs titles), we don't need a section title in the search
      if (!content) {
        return;
      }

      searchIndex.push({
        objectID: `${link}#${sectionAnchor || sectionContentIndex}`,
        title: frontMatter?.data?.title || frontMatter?.data?.meta?.title || '',
        category,
        content,
        link,
        sectionTitle,
        sectionAnchor,
        score: scores[category] || 0, // will be an ascending ranking
        groupScore: sectionContentIndex // will be a descending ranking
      });
    });
  });
  writeFileSync('./public/search-index.json', JSON.stringify(searchIndex));
  console.log('\n✅ Done');
});
