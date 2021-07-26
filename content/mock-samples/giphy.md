---
title: Giphy API mock sample
excerpt: Start mocking Giphy API in no time with this ready to use sample for Mockoon
meta:
  title: Giphy API mock sample
  description: Start mocking Giphy API in no time with this ready to use sample for Mockoon. Use it when developing your frontend and start working right away.
image: giphy.png
imageAlt: Mockoon and Giphy logos side by side
order: 110
---

Working with APIs can be a hassle during development, especially when you want to move fast or quickly prototype something. You need to register, get a token, sometimes solve CORS problems, etc. Let Mockoon speed things up for you. 

If you are planning to use Giphy's API and look for an easy way to mock its most relevant endpoints for free and with no need of signing up, Mockoon got you covered. With this ready-to-use mock, you will be able to make requests to the most useful endpoints and get realistic data returned in the span of a click. 

Amongst the endpoints our API mocking tool currently covers you will find:

> Get the full mock ready to import in Mockoon! <a href="https://github.com/mockoon/mock-samples/blob/main/samples/giphy.json" className="btn btn-primary-desat-soft btn-xs"><i className='icon-download'></i>&nbsp;Download</a>
> 
> To import the file, please [follow the instructions](https://github.com/mockoon/mock-samples#how-to-import-the-samples-in-mockoon-application). 

## GET /v1/gifs/search

Get instant access to a selection of gifs.

```json
{{setVar 'id' (oneOf (array 'dtoFgXBDtCN9XaRPi2' 'IIg6NCrPGFpNcQjQ20' 'lBEtse3KwMkuyUHtAE' 'hjpLcFT34uoraIVpzk' 'YZp8WxqE0tXDjU0X6H' 'uFTBkExG6vUD4XoG86' 'sriKV3o06Zjw0AawGu' 'b0RazX1aG9dJA9dEyn' 'tuyKmzy2ZpCfZrvb8D' 'wysJiAM9WoA0xbPSsG'))}}

{
  "data": [
    {
      "type": "gif",
      "id": "{{id}}",
      "slug": "{{id}}",
      "url": "https://giphy.com/gifs/{{id}}",
      "bitly_url": "",
      "embed_url": "",
      "username": "Mockoon",
      "source": "",
      "rating": "{{oneOf (array 'Y' 'G' 'PG' 'PG-13' 'R')}}",
      "content_url": "",
      "user": {
        "avatar_url": "https://media.giphy.com/avatars/mockoon/MLoEcUym3IVr/200h.png",
        "banner_url": "",
        "profile_url": "https://giphy.com/channel/mockoon",
        "username": "Mockoon",
        "display_name": "Mockoon - Mock API in seconds"
      },
      "source_tld": "",
      "source_post_url": "",
      "update_datetime": "{{date '2010' '2020' 'yyyy-MM-dd HH:mm:ss'}}",
      "create_datetime": "{{date '2010' '2020' 'yyyy-MM-dd HH:mm:ss'}}",
      "import_datetime": "{{date '2010' '2020' 'yyyy-MM-dd HH:mm:ss'}}",
      "trending_datetime": "{{date '2010' '2020' 'yyyy-MM-dd HH:mm:ss'}}",
      "images": {
        "fixed_height": {
          "url": "https://media.giphy.com/media/{{id}}/200.gif",
          "width": "{{faker 'random.number' min = 320 max = 1920}}",
          "height": "{{faker 'random.number' min = 200 max = 1080}}",
          "size": "{{faker 'random.number' min = 64000 max = 2073600}}",
          "mp4": "https://media.giphy.com/media/{{id}}/200.mp4",
          "mp4_size": "{{faker 'random.number' min = 64000 max = 2073600}}",
          "webp": "https://media.giphy.com/media/{{id}}/200.webp",
          "webp_size": "{{faker 'random.number' min = 64000 max = 2073600}}"
        },
        "fixed_height_still": {
          "url": "https://media.giphy.com/media/{{id}}/200_s.gif",
          "size": "{{faker 'random.number' min = 64000 max = 2073600}}",
          "width": "{{faker 'random.number' min = 320 max = 1920}}",
          "height": "{{faker 'random.number' min = 200 max = 1080}}"
        }
      },
      "title": "{{faker 'random.words' 3}} GIF"
    }
  ],
  "pagination": {
    "offset": 0,
    "total_count": 1,
    "count": 1
  },  
  "meta": {
    "msg": "OK",
    "status": 200,
    "response_id" : "{{faker 'random.hexaDecimal' 32}}"
  }
}
```
