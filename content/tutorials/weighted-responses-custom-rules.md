---
title: Serve weighted responses with custom templating rules
excerpt: Use custom templating rules to deliver weighted or probabilistic responses in Mockoon
meta:
  title: Serve weighted responses with custom templating rules
  description: Learn how to return weighted or probabilistic responses using Mockoon's custom templating rules and random helpers
image: TODO.png
imageAlt: Mockoon logo and computer icon linked with lines representing routes
imageWidth: 1200
imageHeight: 400
order: 1
---

Custom templating rules are powerful. If you used them for [**rate limiting**](/tutorials/implement-rate-limiting-custom-templates), you already know they can go beyond simple field checks. The same engine can serve **weighted (probabilistic) responses**, perfect for simulating flaky endpoints or intermittent failures.

> ⚠️ This tutorial requires v9.0.0 or later of Mockoon. You can download the latest version of Mockoon [here](https://mockoon.com/download/).

## Overview

The idea of this tutorial is to use the `int` helper in custom templating rules to draw random integers and decide which response to serve based on those draws. By adjusting the number ranges, you can control the likelihood of each response being served.
This approach works best when you have a small number of responses (2-4). For more complex scenarios with many responses, see the **Scale to many responses** section below.

## 1. Create two responses

Create a new HTTP route (any method, for example `GET /weighted`). Its status code should be set to **200** by default. Add a response body like this:

```json
{ "message": "Success path" }
```

![new HTTP GET route showing the path /weighted](/images/tutorials/weighted-responses-custom-rules/create-weighted-endpoint-200.png)

Add a second response with status **401** for example. Example body:

```json
{ "message": "Randomized unauthorized" }
```

![add second response with status 401](/images/tutorials/weighted-responses-custom-rules/create-weighted-endpoint-401.png)

## 2. Add a probability rule on the 401

Open the **Rules** tab on the 401 response and add a **Custom templating** rule. Then, use one of the following **templates** and **operators** below to define the probability of this response being served:

- Option 1, **1 in N weight**: `{{int 0 4}}` "equals" `4` for a **~20% chance** of 401:

![view of the rule interface](/images/tutorials/weighted-responses-custom-rules/add-custom-rule-401-response-simple-int.png)

- Option 2, **percentage-style threshold**: `{{lt (int 0 100) 20}}` "equals" `true` for a **~20% chance** of 401 too:

![view of the rule interface](/images/tutorials/weighted-responses-custom-rules/add-custom-rule-401-response-int-lt.png)

Because the **200 response stays the default**, any call that fails the 401 rule falls back to 200. Keep the default flag on the **200 response** so it always catches the "else" case.

Of course, different setups can achieve the same effect: 401 as the default response, using the greater-than instead of less-than operator, etc. The key is to define **non-overlapping ranges** across responses so only one rule can match per request.

## 3. Test

Let's send several requests in a row to our new endpoint, here using [`hey`](https://github.com/rakyll/hey). You should see the 401 response match at the frequency defined by your rule, with all other calls returning the default 200 response.

```bash
$ hey -n 2000 -m GET http://localhost:3000/weighted
...
Status code distribution:
  [200] 1629 responses
  [401] 371 responses
```

## 4. Limitations

This approach works quite well for a small number of responses. However, the more responses you add, the more

### Example: three-way split

Create three responses (200 default, 401, 500). On 500 add a rule `{{gt (int 0 100) 95}}` equals `true` ($\approx5\%$). On 401 add `{{gt (int 0 100) 70}}` equals `true` ($\approx30\%$). With 200 as default, you get $\approx65\%$ success, $30\%$ unauthorized, $5\%$ server error.

### Debugging tips

- Temporarily set the 401 body to include the random draw (e.g., add `"debug": {{int 0 100}}`) to observe distribution while testing.
- If rules don’t seem to apply, verify the route’s responses mode isn’t set to "random" or "sequential" and that the rule is enabled.

## 5) Scale to many responses

When you add more than two responses, use a single random draw per request and split ranges across responses. The simplest way to share a draw is to seed a **global variable** in the first non-default response's rule, then read it in subsequent rules.

### Pattern: consistent draw + ordered ranges

1. Order responses like: 500, 429, 401, 200 (default flagged).
2. On the 500 response, add a custom templating rule target:

```handlebars
{{setGlobalVar 'rand' (int 0 100)}}{{lt (getGlobalVar 'rand') 5}}
```

Set operator to equals and value to `true` → ~5% 500s.

3. On the 429 response, read the same draw and check the next band:

```handlebars
{{and (gte (getGlobalVar 'rand') 5) (lt (getGlobalVar 'rand') 15)}}
```

Equals `true` → ~10% 429s.

4. On the 401 response, use another band:

```handlebars
{{and (gte (getGlobalVar 'rand') 15) (lt (getGlobalVar 'rand') 45)}}
```

Equals `true` → ~30% 401s. The default 200 catches the remaining ~55%.

Because the first rule seeds `rand`, all subsequent rules reuse the same value for a consistent per-request outcome.

### Centralize weights (optional)

If you want to tweak weights without editing rules, store thresholds in a **data bucket** (e.g., `weights`) and reference them:

```json
{
  "p500": 5,
  "p429": 10,
  "p401": 30
}
```

Then:

- 500 target: `{{setGlobalVar 'rand' (int 0 100)}}{{lt (getGlobalVar 'rand') (dataRaw 'weights' 'p500')}}` equals `true`.
- 429 target: `{{and (gte (getGlobalVar 'rand') (dataRaw 'weights' 'p500')) (lt (getGlobalVar 'rand') (add (dataRaw 'weights' 'p500') (dataRaw 'weights' 'p429')))}}` equals `true`.
- 401 target: `{{and (gte (getGlobalVar 'rand') (add (dataRaw 'weights' 'p500') (dataRaw 'weights' 'p429'))) (lt (getGlobalVar 'rand') (add (dataRaw 'weights' 'p500') (add (dataRaw 'weights' 'p429') (dataRaw 'weights' 'p401'))))}}` equals `true`.

Adjust bucket values to rebalance without touching rules; the 200 default will still catch the rest.
