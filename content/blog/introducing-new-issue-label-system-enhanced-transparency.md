---
title: Introducing our new issue label system for enhanced transparency
excerpt: We're overhauling our GitHub issue management with a clearer labeling system and reviewing all open issues to be more transparent about our roadmap and priorities
date: '2025-10-03'
image: introducing-new-issue-label-system-enhanced-transparency.png
imageAlt: Mockoon logo with GitHub issue labels and transparency symbols
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - open-source
author: guillaume
meta:
  title: Introducing our new issue label system for enhanced transparency
  description: Mockoon launches a comprehensive issue label system and reviews all open GitHub issues to improve transparency and community communication
---

We're excited to announce a **major overhaul of our GitHub issue management system**. After years of growth and thousands of feature requests, bug reports, and discussions, we've realized it's time to bring **more transparency and clarity** to how we handle community feedback.

## Why we're making this change

For a long time, we believed that **every issue deserved a chance to stay open** indefinitely. Our philosophy was simple: keep everything open, and maybe someday we'll get to it. While this approach came from a place of wanting to be considerate of every community member's input, we've come to realize it actually creates more confusion than clarity.

**The reality is that some issues have been sitting open for years**, sometimes unaligned with our roadmap, our technical vision for the tool, or simply not feasible given our current resources. Rather than leaving these in limbo, we believe **it's more honest and transparent** to either close them with clear explanations or provide realistic expectations about their future.

## Introducing our new issue label system

We've designed a detailed labeling system that makes it **immediately clear where every issue stands**.

![screenshot of the new labels design](/images/blog/introducing-new-issue-label-system-enhanced-transparency/new-labels-preview.png)

Our new labels are organized into several categories:

### Component labels

Understanding which **part** of Mockoon is **affected** by the issue:

- **`component:all`**: Issue related to **all components**.
- **`component:app`**: Issue related to the **desktop** or **cloud web app**.
- **`component:cli`**: Issue related to the **CLI**.
- **`component:cloud`**: Issue related to **Cloud** features.
- **`component:dx`**: Issue related to **developers stuff** (tests, configuration, etc.).
- **`component:lib-commons`**: Issue related to the **@mockoon/commons** lib.
- **`component:lib-commons-server`**: Issue related to the **@mockoon/commons-server** lib.
- **`component:lib-serverless`**: Issue related to the **@mockoon/serverless** lib.

### Effort estimation

Setting realistic expectations about implementation **complexity**:

- **`effort:easy`**: **Quick** fixes or **small** tasks.
- **`effort:medium`**: **Moderate effort** required.
- **`effort:hard`**: **Complex** or **time-consuming** tasks.
- **`effort:nightmare`**: **Not for the faint of heart**. (You might want to sit down for these!)

We don't really believe in precise time estimates for software projects, so we prefer to give a general idea of the effort involved rather than specific timelines.

### Priority classification

Understanding where issues stand in our **queue**:

- **`priority:high`**: Critical issues needing **immediate attention**.
- **`priority:medium`**: **Important** but **not urgent**.
- **`priority:low`**: **Nice-to-have** features or **minor** issues.

These priorities are determined based on factors like community demand, alignment with our roadmap, security considerations, and overall impact on the user experience.

### Status indicators

Clear visibility into **where each issue stands**:

- **`status:approved`**: Issue **confirmed** for implementation.
- **`status:need-feedback`**: **Feedback** from the requester/community **is needed** before considering the issue.
- **`status:need-investigation`**: **More investigation is required** to decide if it's feasible.
- **`status:need-more-interest`**: Issue **requires more community activity** (e.g., upvotes, comments) before being considered.
- **`status:under-consideration`**: Issue is **being evaluated** but undecided.
- **`status:unlikely-to-implement`**: Issue is **unlikely to be implemented** but is kept for reference.
- **`status:need-triage`**: Default label for new issues.

Choosing the right status label here is more art than science. It involves considering factors like community interest, alignment with our roadmap, technical feasibility, and resource availability. We aim to be as transparent as possible about our decision-making process.

### Pending actions

Issues waiting on **external factors**:

- **`pending:external`**: This issue is waiting on input, action, or resolution from an external party.
- **`pending:help-wanted`**: This issue requires an external contribution.

> 💡 Usually, these labels are applied when an issue has the `status:approved` label.

### Requirements

**Special considerations** for implementation:

- **`requires:data-migration`**: Requires a **data migration** (and a **major** release).
- **`requires:documentation`**: Requires a **documentation** update.
- **`requires:major`**: Requires a **major** release.

### Resolution labels

Finally, some **closure reasons**:

- **`resolution:already-exists`**: Feature is **already done** or **already exists**.
- **`resolution:cannot-reproduce`**: Issue **cannot be reproduced**.
- **`resolution:duplicate`**: This issue or pull request **already exists**.
- **`resolution:not-a-bug`**: The issue was **not a bug**.
- **`resolution:not-planned`**: The feature or task that **will not be planned**.
- **`resolution:wont-fix`**: This fix **will not be worked on**.

We will always include a **detailed comment** explaining the reasoning behind closing an issue with one of these labels. We are also open to discussion and feedback on these decisions and are happy to revisit them if new information arises.

---

## Better communication, clearer expectations

We're currently **reviewing every single open issue** in our repository. This involves:

- **Adding appropriate labels** to provide immediate clarity on status, priority, and effort.
- **Closing outdated issues** that are no longer relevant or aligned with our vision.
- **Adding detailed comments** explaining our decisions and reasoning.
- **Starting conversations** on issues when we need more information or context.
- **Consolidating duplicate requests** to reduce noise and confusion.
- **Identifying opportunities** for community contributions with `pending:help-wanted`.

This change reflects our **commitment to transparency**, one of the core values we've always held as an open-source project. We'd rather have **honest conversations** about what we can and cannot do than leave community members wondering about the fate of their requests.

**Every closed issue will include a clear explanation** using our resolution labels and detailed comments. Whether it's a technical constraint, a misalignment with our vision, or simply a resource limitation, we want you to understand our decision-making process.

## Get involved

As we roll out these changes, we encourage you to:

- **Check the new labels** on your existing issues to understand their current status.
- **Look for `pending:help-wanted` issues** if you'd like to contribute.
- **Engage with `status:need-more-interest` or `status:need-feedback` issues** you care about.
- **Ask questions** if you need clarification on any labels or decisions.

---

_Want to see the new label system in action? Check out our [GitHub issues](https://github.com/mockoon/mockoon/issues) or read more about [contributing to Mockoon](https://github.com/mockoon/mockoon/blob/main/CONTRIBUTING.md)._
