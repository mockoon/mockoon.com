---
title: Templates and AI assistant
meta:
  title: Mockoon templates and AI assistant documentation
  description: All you need to know about Mockoon's mock API ready to use JSON templates and AI assistant to generate your own dynamic and realistic templates.
order: 900
---

# Templates and AI assistant<span className='badge text-bg-warning fs-4 align-text-top ms-2'>Cloud</span>

---

## Overview

Mockoon **templates** are pieces of JSON, often with [templating helpers](docs:templating/overview), that can be used in Mockoon to quickly prototype your mock APIs. They can be used in your [HTTP route's](docs:api-endpoints/routing#api-routes) body or as [data bucket](docs:data-buckets/overview) content to create realistic and dynamic data.

Two types of templates are available: **pre-generated** and **AI-generated**.

## Use the pre-generated templates

The pre-generated templates can be found in the desktop application.

To use a template in your routes, click on the "From template" entry in the route creation menu to open the templates dialog:

![modal with templates list{440x304}](docs-img:pre-generated-templates-modal.png)

Then, select the template you want to use and either copy-paste its content manually or click on one of the two buttons to create a new **GET endpoint** or a **CRUD endpoint with a data bucket**.

![create get route from template{860x801}](docs-img:templates-create-get-route.png)

The "GET route" button will create a new HTTP GET route and copy the template content as the body. The "CRUD + data" button will create a new CRUD endpoint with a linked data bucket and copy the template content as the data bucket content.

> Starting with version 8.0.0 all the pre-generated templates are available for **free**.

## Use the AI assistant to generate realistic data

You can also use our AI assistant to generate realistic mock data for your various endpoints by providing a custom prompt. This feature is available in the desktop application and is part of the [Mockoon Cloud](/cloud/) plans.

To generate a new template, click the "From template" button in the route creation menu (see above), and select the "Generate" tab:

![AI assistant generate tab{860x801}](docs-img:ai-assistant-generate-template-tab.png)

Then, write a prompt (e.g. "list of users") and click the "Generate" button.

![AI assistant generate button click{860x801}](docs-img:ai-assistant-generate-button.png)

Finally, you can copy-paste the generated template manually or click on one of the two buttons to create a new **GET endpoint** or a **CRUD endpoint with a data bucket**.

![create get route from template{860x801}](docs-img:templates-generate-get-route.png)

### Writing prompts

Mockoon AI assistant wraps your prompt with various instructions to help you generate the most relevant template for your needs. It has been optimized for the JSON format but can also generate templates in XML, CSV, etc.
Several options are available to fine-tune the generated templates:

- **JSON**: the generated template will be a valid JSON object.
- **array**: the generated template root level will be a JSON array (usually used with the **JSON** option).
- **templating**: the generated template will contain Handlebars [templating helpers](docs:templating/overview) (e.g. `{{faker 'person.firstName'}}`). Please note that disabling this option usually results in longer templates.

![prompt options buttons{860x801}](docs-img:ai-assistant-template-generate-options.png)

You will obtain best results with shorter prompts: "list of users", "JSON configuration for library X", etc.

If you want more freedom when generating templates (using a different data format, etc.), you can disable the various options. Our system will still manage your prompt to increase the relevance of the generated template.

### AI assistant quota

Each use of the AI assistant will count as one credit towards your monthly quota. You can check your quota in your [account page](/account/subscription/).
