---
title: Variables helpers
meta:
  title: Dynamically customize your responses with variables templating helpers
  description: "Dynamically customize your mock environments response with Mockoon's templating variables helpers. All formats are supported: JSON, CSV, HTML, etc."
order: 505
---

# Templating variables helpers

---

Mockoon offers the following helpers which can help you set **local or global variables**, and **access environment variables** in your templates:

- [`setVar`](#setvar)
- [`getVar`](#getvar)
- [`setGlobalVar`](#setglobalvar)
- [`getGlobalVar`](#getglobalvar)
- [`getEnvVar`](#getenvvar)

## setVar

Set a variable to be used later in the template. The value can be the result of another helper. To use it elsewhere in the template, refer to the variable with its name prefixed with an `@`: `{{@varname}}`. The variable can also be used as a helper parameter: `{{#repeat @varname}}...{{/repeat}}`.
Variables declared in a block helper will be scoped to the block and unavailable outside.

| Arguments (ordered) | Type   | Description    |
| ------------------- | ------ | -------------- |
| 0                   | string | Variable name  |
| 1                   | any    | Variable value |

**Examples**

```handlebars
{{setVar 'varname' 'value'}}
{{setVar 'varname' (body 'id')}}

usage:
{{@varname}}
{{#repeat @varname}}...{{/repeat}}

declare a variable in a block helper:
{{#repeat 5}}
  {{setVar 'random' (oneOf (array '1' '2' '3'))}}
  {{@random}}
{{/repeat}}

{{setVar 'myArray' (array '1' '2' '3')}}
{{#each @myArray}}
  {{setVar 'eachIndex' @index}}
  {{@eachIndex}}
{{/repeat}}
```

## getVar

Dynamically get a variable set with [`setVar`](#setvar).

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | string | Variable name |

**Examples**

```handlebars
{{setVar 'varname' 'value'}}

{{getVar 'varname'}}
{{getVar (concat 'var' 'name')}}
{{getVar (body 'property')}}
```

## setGlobalVar

Set a global variable to be used anywhere templating is supported (body, headers, etc.). Global variables are available on all the routes of an environment and they are reset when the environment is restarted.

- The variable name and values can be dynamically created using other helpers.
- The variable can store any kind of data (arrays, objects, string, etc.).
- To get the value of a global variable, use the [`{{getGlobalVar 'varName'}}` helper below](#getglobalvar).

| Arguments (ordered) | Type   | Description    |
| ------------------- | ------ | -------------- |
| 0                   | string | Variable name  |
| 1                   | any    | Variable value |

**Examples**

```handlebars
{{setGlobalVar 'varName' 'value'}}
{{setGlobalVar 'varName' (bodyRaw 'id')}}
{{setGlobalVar (queryParam 'param1') (bodyRaw 'id')}}
```

## getGlobalVar

Get a global variable's value set with [`setGlobalVar`](#setglobalvar). Global variables are available on all the routes of an environment and they are reset when the environment is restarted.

- The variable name and path can be dynamically created using other helpers.
- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.  
  Please note that a value can be retrieved at the path if the variable contains valid JSON.
- Primitives and data structures can be retrieved by the helper and reused in other helpers (see example below).
- The full variable content (array, object, etc.) can be fetched when the `path` is omitted (`{{getGlobalVar 'varname'}}`).

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type   | Description                |
| ------------------- | ------ | -------------------------- |
| 0                   | string | Variable name              |
| 1                   | string | Path to the value property |
| 2                   | string | Default value              |

**Examples**

```handlebars
{{getGlobalVar 'varname'}}
{{getGlobalVar (bodyRaw 'property')}}
{{getGlobalVar (urlParam 'id')}}

<!-- Using object-path syntax -->
{{getGlobalVar 'varName' 'path.to.property'}}
{{getGlobalVar 'varName' 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{getGlobalVar 'varName' '$.array.[*].property'}}

{{#repeat (getGlobalVar 'varname')}}...{{/repeat}}

{{#each (getGlobalVar 'varName')}}...{{/each}}

<!-- Stringify the variable content -->
{{{stringify (getGlobalVar 'varName')}}}

<!-- Get the variable content at the path or the default value -->
{{getGlobalVar 'varName' 'path.to.property' 'default value'}}

<!-- Get the variable content (without path)) or the default value -->
{{getGlobalVar 'varName' null 'default value'}}
```

## getEnvVar

Get an environment variable. If the environment variable is not set, the default value will be used.

By default, only environment variables with the `MOCKOON_` prefix are available. Learn more in the [environment variables documentation](docs:variables/environment-variables).

| Arguments (ordered) | Type   | Description               |
| ------------------- | ------ | ------------------------- |
| 0                   | string | Environment variable name |
| 1                   | any    | Default value             |

**Examples**

```handlebars
{{getEnvVar 'MOCKOON_VARIABLE_NAME' 'default value'}}
{{getEnvVar 'MOCKOON_VARIABLE_NAME'}}
{{getEnvVar (body 'property')}}
```
