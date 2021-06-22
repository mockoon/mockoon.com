---
title: New update with sequential responses, custom status codes, and out-of beta CLI!
excerpt: Discover Mockoon's new v1.14.0 release with sequential responses, custom status codes, new rules and more
date: '2021-05-18'
image: sequential-responses-status-codes.png
imageAlt: Mockoon logo with secure schield
meta:
  title: New update with sequential responses, custom status codes, and out-of beta CLI!
  description: Discover Mockoon's new v1.14.0 release with sequential responses, custom status codes, new rules and more
---

# New update with sequential responses, custom status codes, and out-of beta CLI!

###### Published on 2021-05-18

___

This new release comes with the usual load of bug fixes and minor improvements you can check on the [v1.14.0 release page](https://github.com/mockoon/mockoon/releases/tag/v1.14.0). 

We also decided to take the [CLI](https://github.com/mockoon/cli) out of beta with a new v1.0.0 🎉. There is still space for improvements, but it is now stable enough thanks to the feedback and contributions from our great community!

Here are some new features that we would like to highlight in this blog post: 

## Sequential responses

You can now configure Mockoon to serve your responses sequentially. When enabled, your responses will be served in the order, repeating from the beginning indefinitely. With three responses 200, 201, 202, you would get the following sequence: `200 → 201 → 202 → 200 → 201...` and so on. Restarting the server will reset this sequence.

![enable sequential responses](/images/docs/v1.14.0-sequential-route-responses.png)

Similar to the [random responses](docs:route-responses/multiple-responses) feature, this option disables the rules temporarily. 

## New "request number" rule

A new type of rule has been created to allow you to serve a specific response depending on the entering request number. In the following example, a 404 would be served at the first request only. 

![request number rule](/images/docs/response-rules-request-number.png)

The entering requests counter is on a per route basis and gets reset when the server is restarted.

## Custom status codes

For this update, we worked on revamping the status code dropdown to offer more suggestions, organized by categories. Even if not standards, you can also provide custom status codes from 100 to 999. 

![enter a custom status code](/images/docs/custom-status-codes.gif)
