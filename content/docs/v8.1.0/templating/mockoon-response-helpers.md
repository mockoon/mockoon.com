---
title: Response helpers
meta:
  title: Dynamically customize your response with templating helpers
  description: "Dynamically customize your mock environments response with Mockoon's templating response helpers. All formats are supported: JSON, CSV, HTML, etc."
order: 503
---

# Templating response helpers

---

Mockoon offers the following helpers which can customize the outgoing response:

- [`status`](#status)

## status

Set the response status code. This helper does not return any content.

| Arguments (ordered) | Type   | Description                 |
| ------------------- | ------ | --------------------------- |
| 0                   | number | Valid status code (100-999) |

**Examples**

```handlebars
{{status 404}}
```
