---
title: Local variables
meta:
  title: How to use local template scoped variables
  description: Simulate and mock complex API workflows by saving data in your templates using local template scoped variables
order: 550
---

# Local (template-scoped) variables

---

Using the [`setVar`](docs:templating/mockoon-variables-helpers#setvar) and [`getVar`](docs:templating/mockoon-variables-helpers#getvar) helpers you can create **template-scoped (or local) variables** to save some intermediate data in your templates and avoid repeating the same logic multiple times.

## Local variables scope

Unlike [global variables](docs:variables/global-variables) which are **shared** between **all routes** of an environment, local variables are **scoped to the template** they are used in. Their values are **regenerated** each time the template is **re-evaluated**.

> ⚠️These variables are **not shared between routes or responses**.

## Local variables support

Local variables are available [everywhere templating helpers are supported](docs:templating/overview).

## Usage

To set and access local variables, two templating helpers are available.

### Set a local variable

To set a variable, use the `setVar` helper. This helper takes two arguments: the variable name and its value. You can **dynamically set the parameters** using other helpers.

Some examples:

```handlebars
{{setVar 'varname' 'value'}}
{{setVar 'varname' (body 'id')}}
```

> 📘 [Helper documentation](docs:templating/mockoon-variables-helpers#setvar).

### Get a local variable

To get a global variable, use the `getVar` helper or refer to the variable with its name prefixed with an `@`. The helper takes two arguments: the variable name and an optional path. You can **dynamically set the parameters** using other helpers and use the fetched data in other helpers.

Some examples:

```handlebars
# Set a variable
{{setVar 'varname' 'value'}}

# Get a variable
{{@varname}}
{{getVar 'varname'}}
{{getVar (body 'property')}}
```

> 📘 [Helper documentation](docs:templating/mockoon-variables-helpers#getvar).
