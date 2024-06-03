---
title: AI assistants
meta:
  title: Mockoon templates and AI assistants documentation
  description: All you need to know about Mockoon's mock API ready to use JSON templates and AI assistants to generate your own dynamic and realistic templates.
order: 900
---

# Templates and AI assistants<span className='badge text-bg-warning fs-4 align-text-top ms-2'>PRO</span>

---

## JSON templates assistant

Mockoon **templates** are pieces of JSON, often with [templating helpers](docs:templating/overview), that can be used in Mockoon to quickly prototype your mock APIs. They can be used in your [HTTP route's](docs:api-endpoints/routing#api-routes) body or as [data bucket](docs:data-buckets/overview) content to create realistic and dynamic data.

Two types of templates are available: **pre-generated** and **AI-generated**.

### Use the pre-generated templates

The pre-generated templates can be found in the desktop application.

To use a template in your routes, click on the **"Assistants and templates"** entry in the route creation menu to open the templates dialog:

![modal with templates list{498x304}](docs-img:pre-generated-templates-modal.png)

Then, select the template you want to use and either copy-paste its content manually or click on one of the two buttons to create a new **GET endpoint** or a **CRUD endpoint with a data bucket**.

![create get route from template{860x801}](docs-img:templates-create-get-route.png)

The "GET route" button will create a new HTTP GET route and copy the template content as the body. The "CRUD + data" button will create a new CRUD endpoint with a linked data bucket and copy the template content as the data bucket content.

> 💡 Starting with version 8.0.0 all the pre-generated templates are available for **free**.

### Use the AI assistant to generate realistic templates

You can also use our AI assistant to generate realistic mock data for your various endpoints by providing a custom prompt. This feature is available in the desktop application and is part of the [Mockoon Pro](/pro/) plans.

To generate a new template, click the **"Assistants and templates"** button in the route creation menu (see above), and select the "Generate JSON templates" tab:

![AI assistant generate tab{860x801}](docs-img:ai-assistant-generate-template-tab.png)

Then, **write a prompt** (e.g. "list of users") and click the "Generate" button.

![AI assistant generate button click{860x801}](docs-img:ai-assistant-generate-button.png)

Finally, you can copy-paste the generated template manually or click on one of the two buttons to create a new **GET endpoint** or a **CRUD endpoint with a data bucket**.

![create get route from template{860x801}](docs-img:templates-generate-get-route.png)

### HTTP endpoints assistant

A second AI assistant is available in the [Mockoon Pro](/pro/) plans to generate **realistic HTTP endpoints**. This feature works similarly to the JSON templates assistant but generates a full HTTP route with a **response body**, a **path**, a **method** and a **documentation**, based on your prompt.

To generate a new HTTP endpoint, click the **"Assistants and templates"** button in the route creation menu (see above), and select the "Generate HTTP endpoints" tab:

![AI assistant generate endpoint tab{860x801}](docs-img:ai-assistant-generate-endpoint-tab.png)

Then, **write a prompt** (e.g. "Get a list of users") and click the "Generate" button.

![AI assistant generate endpoint button click{860x801}](docs-img:ai-assistant-generate-endpoint-button.png)

Finally, you can click on the **"Create HTTP route"** button to create a new endpoint from the generated data.

![create full route from generated result{860x801}](docs-img:ai-assistant-generate-endpoint-create-button.png)

## Writing prompts

Mockoon AI assistants wrap your prompt with various instructions to help you generate the most relevant JSON templates or endpoints for your needs. It will **infer the structure** of the JSON you want to generate from your prompt (e.g. single object, array, etc.). You can enable or disable the use of Handlebars [templating helpers](docs:templating/overview) (e.g. `{{faker 'person.firstName'}}`) using the option next to the "Generate" button.

![prompt templating option button{860x801}](docs-img:ai-assistant-template-generate-option.png)

You will obtain best results with shorter prompts: "list of users", "JSON configuration for library X", etc.

We put a lot of effort into making the AI assistants as accurate as possible, but it may not always generate the expected results. If you encounter any issues, please let us know by [contacting us](/contact/).

## AI assistants quota

Each use of the AI assistants will count as one credit towards your monthly quota. You can check your quota in your [account page](/account/subscription/).
