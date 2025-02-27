---
title: 'Contributor spotlight: Bradley Schofield'
excerpt: We continue our series of interviews with Mockoon's open-source contributors with Bradley Schofield from Appwrite.
date: '2024-04-03'
image: contributor-spotlight-bradley-schofield-appwrite.png
imageAlt: Article title with picture of Bradley Schofield
imageWidth: 1200
imageHeight: 400
tags:
  - open-source
  - contributors
author: guillaume
meta:
  title: Contributor spotlight with Bradley Schofield from Appwrite
  description: We continue our series of interviews with Mockoon's open-source contributors. Today, we are talking with Bradley Schofield from Appwrite.
---

For an open-source project, the **community** plays a major role in building innovative products. No matter the form the contribution takes, feedback, code contribution, bug reports, or word of mouth, Mockoon wouldn't be what it has become without all of you.
We started this series of interviews to put some more light on the contributors who spent time crafting features or fixing bugs for the benefit of all.
Today, we are talking with **Bradley Schofield**, who shares his enthusiasm for contributing to and using Mockoon.

---

### Can you introduce yourself and your background in software development, your passions or hobbies?

My name is Bradley Schofield ([@PineappleIOnic](https://github.com/PineappleIOnic)), and I’m currently a software engineer working for [Appwrite](https://appwrite.io/). I’ve been writing code since I was in primary school, which naturally progressed into working full-time as an engineer. Some of my hobbies include gaming, fitness, and studying Japanese as well as various side projects I enjoy tinkering with.

> {"type": "##quotation##", "citation": "Don't be intimidated by contributing to open-source projects, most maintainers understand the daunting process and are always happy to answer questions so just do it!", "author": "Bradley Schofield", "authorRole": "Contributor & Full Stack Engineer @ Appwrite", "pictureUrl": "contributors/bradley-schofield.png"}

### How long have you been using Mockoon? Are there any particular contributions you've made that you'd like to emphasize or showcase?

I’ve been using Mockoon on and off since I was made aware of it by my fellow colleague Matej who sponsored the project through our [OSS Fund](https://dev.to/appwrite/appwrite-oss-fund-sponsors-mockoon-119k). Eventually when I was working on our migrations feature I ran into the issue of needing to test with APIs of many different providers and Mockoon fit the job perfectly allowing me to write most of my mock API in a matter of minutes.

I did eventually run into a missing feature I needed which was [range headers to allow for file streaming tests](/docs/latest/response-configuration/file-serving/#serving-a-range-of-bytes-from-a-file), so I decided to continue our commitment to OSS and contributed the feature myself with the aid of Guillaume who helped me find the code I needed to modify.

> 💡 The support for **range headers** was added in [Mockoon v5.1.0](/releases/5.1.0/#range-header-support).

### What inspired you to contribute to a project like Mockoon and open-source in general?

OSS means a lot to me, especially as it is the reason I have this job right now! Appwrite originally was an open-source project I contributed to as part of Hacktoberfest and I continued to contribute as time went on. Eventually, Appwrite would be formed into a company and Eldad (our founder) only thought it was natural to hire the people already contributing to it so I was approached regarding an interview and the rest is history!

### How do you balance your contributions with other commitments? Are your open-source contributions part of your work (as an employee)?

I’m not a very active open-source contributor, but if I see an issue or a feature I believe should be implemented into a project, I’ll step up and offer to do so as contributions to OSS help everyone!

OSS is at the very core of our work at Appwrite and everything we do, every single thing that we can create into a library, we strive to do so in an agnostic way so that everyone can benefit from the work we do, as we believe it’s important for us to give back to our humble beginnings and to continue fostering the community.

> {"type": "##quotation##", "citation": "Every single thing that we can create into a library, we strive to do so in an agnostic way so that everyone can benefit from the work we do.", "author": "Bradley Schofield", "authorRole": "Contributor & Full Stack Engineer @ Appwrite", "pictureUrl": "contributors/bradley-schofield.png"}

### If it’s part of your work, how did you manage to get your employer's approval for contributing to open-source projects, and what's the organizational setup for these contributions?

We don’t really have to get employer approval for contributing to open source if it’s a part of our work, Appwrite itself is open-source so we’re incentivized to spread the love and contribute to aid our work and the greater community if need be.

### What general advice would you give to someone interested in contributing to open-source projects?

I highly suggest taking on simple tasks first to build up a good idea of the codebase, take the time to look inside all the files, and really get to understand how it all works. Afterward, you can keep on taking on progressively more complex tasks as your familiarity with the codebase continues to grow. Honestly my greatest advice is to not be intimidated by contributing to open-source projects, most maintainers understand the daunting process and are always happy to answer questions so just do it!

### Has your involvement with open source contributed to your growth as a developer or your career?

Absolutely. My first full-time engineering job straight out of school was a result of me contributing to open-source. Appwrite itself was just a community-run project before it spun off into its own company, and when that happened, I was shortlisted to join the team due to my previous contributions and enthusiasm for the project.

### What makes Mockoon unique compared to other API mocking tools? Can you share some key features or functionalities that you find particularly useful?

It’s just stupidly simple to use. You don’t really have to learn any custom syntax or anything. If you’ve used HTTP Client tools like Insomnia or Postman, you will find Mockoon an extremely easy and familiar tool to use which makes building up these mocking servers a breeze.

### Have you integrated Mockoon into any specific projects or workflows, and if so, how has it improved or streamlined those processes?

We have implemented Mockoon for our migrations service as it is not really feasible to run tests against live APIs for it all the time. So, we wrote mocking servers for simulating third-party APIs when we run migrations. I use it extensively as I am a part of the team that deals with third-party connections and integrations, and I find it a huge relief to know my tests are running against mocks instead of live servers that can go down at any moment. It is a good idea, however, to also run live tests when you are releasing a new version of your libraries to ensure their schemas haven’t changed. So, I usually have an environment variable that can switch seamlessly between the two in my tests.

### What are your favorite tools or resources for software development outside of Mockoon?

Probably my trusty Insomnia client for checking if APIs are working and sending what I expect. Apart from that, I’ve been really enjoying using Zed as my new editor as it’s just so much faster and snappy than VSCode but, I sometimes find myself falling back to Code for things like debugging and remote development as Zed doesn’t have a plugin support or integrations for that yet.

### Is there anything else you'd like to share with the Mockoon community, a personal project or an interesting read?

I don’t really have a huge amount of side-projects that I release, I have that common developer habit of starting things and never really finishing them. 😅

I know it’s cliche but please do check out Appwrite if you have the time. Quite a few of my “side projects” end up being incorporated as new Appwrite features. ^\_^

---

We thank Bradley for sharing his journey with us. We are grateful he chose to dedicate his time and talent to improving projects like Mockoon, making it an indispensable tool for developers worldwide.

More interviews are in the pipeline. Be sure not to miss any by [subscribing to our newsletter](/newsletter/). Happy mocking!
