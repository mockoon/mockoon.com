---
title: XML support
meta:
  title: XML support for entering requests
  description: Create realistic mock APIs and generate fake data with Mockoon's templating and rules system supporting the XML format
order: 430
---

# XML support

---

When sending a request containing a valid XML body and an `application/xml` or `text/xml` `Content-Type`, Mockoon will parse the XML and allow you to create [body response rules](docs:route-responses/dynamic-rules) or use the [`body` and `bodyRaw` templating helpers](docs:templating/mockoon-request-helpers#body). Mockoon uses the [**xml-js** NPM package](https://www.npmjs.com/package/xml-js) to convert the entering XML. Please note that the **xml-js** package converts XML into JSON in a particular way, as shown below:

Entering XML body:

```xml
<?xml version="1.0" encoding="utf-8"?>
<user userID="123">
<firstname>John</firstname>
<lastname>Doe</lastname>
</user>
```

JSON equivalent (compacted):

```json
{
  "_declaration": {
    "_attributes": {
      "version": "1.0",
      "encoding": "utf-8"
    }
  },
  "user": {
    "_attributes": {
      "userID": "123"
    },
    "firstname": {
      "_text": "John"
    },
    "lastname": {
      "_text": "Doe"
    }
  }
}
```

> Please refer to [xml-js documentation](https://www.npmjs.com/package/xml-js) for more detail on how the XML is parsed.
