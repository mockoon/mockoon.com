---
title: Our commitment to the open-source community... and the future of Mockoon
excerpt: In this blog post, we reiterate our commitment to the open-source community and talk a bit more about the future plans for Mockoon
date: '2024-02-20'
image: commitment-open-source-community.png
imageAlt: network of people
imageWidth: 1200
imageHeight: 400
tags:
  - open-source
  - product
  - roadmap
author: guillaume
meta:
  title: Our commitment to the open-source community... and the future of Mockoon
  description: In this blog post, we reiterate our commitment to the open-source community and talk a bit more about the future plans for Mockoon
---

Following the recent news about open-source projects drifting away from their original open-source spirit, I wanted to reiterate our commitment to the open-source community.
Open source is a fundamental part of the software industry. It should be nurtured and protected. However, it usually comes with challenges, especially regarding financing and sustainability.
I am committed to ensuring that Mockoon remains a **healthy and sustainable open-source project**. And I have a plan.

> 💡 **TL;DR:** I am building a SaaS on top of Mockoon to finance the project and ensure its sustainability. The SaaS features will be optional, and the applications will remain free and open-source.

## The unavoidable growth of open-source projects?

Every project starts with some code published on a repository. For Mockoon, this was more than six years ago.

![#sub#Mockoon's first commit!{280x73}](/images/blog/commitment-open-source-community/mockoon-first-commit.png)

Innocent enough, it can soon lead to a long list of feature requests, pull requests, bug reports, and documentation to maintain. It means that people are interested in the project. However, the more the project grows, the more time and effort are required to maintain it. A blessing and a curse at the same time.

Maybe this is a bit counterintuitive, but the more popular the project becomes, the more it makes sense to maintain and grow it. Of course, the first normal reaction is that no obligation comes attached to publishing an open-source project. Nobody has to maintain it or to use it. But why all the initial efforts if it's to let it stagnate? Stagnation often means a project's slow death.

This growth will soon mandate many other things we can put in the "marketing" category. Writing tutorials and blog posts, creating videos, posting on social media, etc. These tasks serve many interesting purposes aside from making the project more visible: it can help reduce the amount of support requests, attract new contributors, etc.

And let's admit it: it's also rewarding to see the project grow and know that your work is appreciated.

But when it starts taking too much time, the project can become a burden for its maintainers. In recent years, we have seen many open-source projects abandoned by their maintainers, or even worse.

Everything has a cost, and for open-source projects, it's often a cost in time and energy.

## Financing open-source projects

This cost in time and energy is rarely sustainable in the long run. While open-source projects do not mandate any financial return, this time/energy cost often translates into a financial need.

Why? Because time is money? More or less. A lot of projects are only one or two people working during their free time when they should spend time with their family instead. It's a bit cliché, but it's the reality for many. To reclaim their free time, maintainers need to dedicate their regular working hours to the project, and for this, they either need money or an employer who understands the value of contributing to open-source.
Unfortunately, the top-funded open-source projects with full-time paid maintainers are not the majority, just the tip of the iceberg.

![#sub#That was mandatory, sorry! (Source: xkcd)](https://imgs.xkcd.com/comics/dependency.png)

When I started Mockoon in 2017, I didn't know what to expect. Honestly, I wasn't expecting a burnout in 2020. The cost was too high. I was feeling permanent pressure and guilt for not spending enough time on the project or with my family. Oh yes, that was 100% my fault. I was the one putting this pressure on myself.

So, seeing so many people using Mockoon (and giving very good feedback, see below), in early 2021, I quit my job to work full-time on Mockoon. Then came the obvious question: how to finance this new adventure?

> {"type": "##quotation##", "citation": "First of all, I would like to thank you for this fabulous tool which helps me in my daily work. 😊", "author": "— A random Internet stranger (seen in an issue)"}

I already had a vague idea of building a SaaS a long time ago (see below), but it's only recently that I started working seriously on it. In the past years, I have relied on freelancing and sponsorships to finance my work on Mockoon. I have also been lucky to have contributors helping me with the project. It helped release the pressure a little bit.

However, sponsorship is far from covering my financial needs or the ones of the project (code signing certificates, Apple Developer Program fees, servers, etc). The success of some massive open-source projects may give a different impression, but most projects are not funded this way, or even at all. It's hard to find sponsors, extremely time-consuming, and nobody wants to pay for something free, especially companies. I'm still lucky (and grateful!) to have some sponsors, but it's far from enough.

On the other side, freelancing worked decently well, but it means less time for Mockoon, and obviously, it's also very time-consuming!

> 💡 By the way, if you are interested in sponsoring Mockoon, you can do it on [GitHub Sponsors](https://github.com/sponsors/mockoon). It's a great way to support the project and to show your appreciation!

## Raising funds? Bootstrapping?

For a long time, I have been thinking about raising funds to finance the project. After all, it's the traditional schema that we get sold in the tech world. You have a great product, open-source or not, you raise funds, you go on a hiring spree, and grow the company. And then? Exit or die?

I'm convinced now that this is not the right path for most open-source projects. And it's not the right path for Mockoon.

It often leads to a loss of control over the project and a loss of the open-source spirit. It translates into dark patterns, extensive data collection (by the way, [we only collect minimal anonymous analytics](/blog/building-own-analytics-fun-and-profit/)), and a product that is not anymore in the interest of the users.

I'm convinced that the best path for Mockoon is to bootstrap a company around it, specifically a SaaS.

## Building a SaaS on top of Mockoon

During my years working on Mockoon, I have been learning a lot about our users and their needs. Despite all the love for the desktop application and its "disconnected" nature, I have seen a growing demand for a cloud version of Mockoon, or at least cloud features that would complement the desktop application. Three features were requested: data synchronization, real-time collaboration, and the possibility of deploying mocks on the cloud.

> ⌛ I said that this idea of a SaaS was already in my mind a long time ago. I surveyed in late 2019 to see if it was a good idea. The results were very positive. Two-thirds of the respondents were interested in a data synchronization feature for solo devs and teams. Time flies! I could have started working on it earlier.

Bootstrapping a company around Mockoon is probably the best way to ensure it remains a healthy and sustainable open-source project. That being said, it must be done in a way that respects the project and its community. That's the initial goal of this blog post: to reiterate my commitment to the open-source community.

While the SaaS is already [generally available](/pro/) with an AI assistant, it is still in its very early stage. Soon, I will add the first major feature: data synchronization for solo users and real-time collaboration for teams. Another feature will be added later this year and offer the possibility to deploy your mocks on the cloud to share them with your team.

Naturally, this raises some questions I was asked in the past months: What will happen to the applications? Will they remain free and open-source? Will they still be maintained?

The answer is yes. Existing Mockoon applications are not going anywhere, and the cloud features will be optional. They will be visible, even as "free" users, but nothing will be forced on you.

A great example is the cloud synchronization feature that will be visible in the main menu but separated from the local API mocks you can create like before. Nothing will change for you if you don't want to use the cloud.

![#sub#Mockoon's (future) main menu with the cloud environments list{200x231}](/images/blog/commitment-open-source-community/cloud-sync-menu-preview.png)

The SaaS and the sale of custom services are already helping finance the project a little. It's not enough to cover the costs, but it's a start. It gives me a lot of hope for the future.

Hopefully, the revenues will start growing significantly in 2024 and become the principal source of income. And why not a source of income for other contributors and maybe full-time jobs for some of them?
