---
title: Securing Mockoon with GitHub's Secure Open Source Fund
excerpt: We are thrilled to announce that Mockoon has participated in the GitHub Secure Open Source Fund!
date: '2026-02-17'
image: securing-mockoon-github-secure-open-source-fund.png
imageAlt: GitHub Secure Open Source Fund
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - open-source
  - security
author: guillaume
meta:
  title: Securing Mockoon with GitHub's Secure Open Source Fund
  description: We are thrilled to announce that Mockoon has participated in the GitHub Secure Open Source Fund!
---

We are thrilled to announce that Mockoon has participated in the third edition of the **GitHub Secure Open Source Fund**, a program designed to help open-source maintainers improve the security of their projects and secure the global software supply chain!

This is a huge milestone for us, and a recognition of Mockoon's importance in the developer ecosystem.

[Read GitHub's announcement](https://github.blog/open-source/maintainers/securing-the-ai-software-supply-chain-security-results-across-67-open-source-projects/).

![](/images/blog/securing-mockoon-github-secure-open-source-fund/github-secure-open-source-fund.webp)

## What is the GitHub Secure Open Source Fund?

The GitHub Secure Open Source Fund is an initiative that provides **financial support**, **expert guidance**, and **tools** to open-source projects maintainers. The goal is to help them enhance the security of their projects, protect their users, and contribute to a safer software ecosystem.

The program includes:

- **A 3-week security sprint**: Intensive sessions with security experts from GitHub and partners (OpenSSF, etc.).
- **Training and education**: Weekly focuses on open source security foundations, threat modeling, secure coding, and vulnerability management.
- **Direct access**: Office hours with the GitHub Security Lab and a community of security-minded maintainers.
- **Financial support**: Funding to help maintainers dedicate time to this crucial work.

It was a fantastic opportunity to learn from the best about securing our supply chain, understanding modern threats, and implementing best practices that protect both our project and our users.

## Sharing the stage

We were honored to be part of this cohort alongside many other fantastic **open-source projects**. Sharing challenges and solutions with other maintainers was one of the highlights of the program. It gave us a chance to be part of something bigger and contribute to the collective effort of making open-source software more secure.

Some of the other projects in our cohort include:

- [Babel](https://github.com/python-babel/babel)
- [Jenkins](https://github.com/jenkinsci/jenkins)
- [Keycloak](https://github.com/keycloak/)
- [Mermaid](https://mermaid.js.org/)
- [AsyncAPI Initiative](https://github.com/asyncapi)
- [Node.js](https://github.com/nodejs)
- [curl](https://github.com/curl/curl/)
- [ImageMagick](https://imagemagick.org)
- [Webpack](https://github.com/webpack)
- [two.js](https://two.js.org/)

There are many other amazing projects in this cohort and we couldn't list them all here. So we encourage you to go check the full list in the [official announcement](https://github.blog/open-source/maintainers/securing-the-ai-software-supply-chain-security-results-across-67-open-source-projects/).

## What did we accomplish?

During the program, we undertook a thorough audit of our security posture and implemented numerous improvements.

Here is a look at the actions we took to make Mockoon more secure:

- **MFA Enforcement**: We verified that Multi-Factor Authentication (MFA) is strictly activated for all organization members, and enforced it where necessary.
- **Member Privileges**: Checked and enabled auto workflow run protection and "require approval for first-time contributors".
- **Workflow Protections**: We reviewed and locked down workflow permissions at both the organization and repository levels (least privilege access). We also pinned the GitHub Actions runner versions to prevent supply chain attacks.
- **Branch Protection**: We enabled branch protection rules for all repositories, requiring pull request reviews and status checks before merging.
- **CodeQL**: We verified that CodeQL (GitHub's code scanning tool) is enabled and correctly configured for all repositories.
- **Dependabot**: We ensured that Dependabot is enabled and configured to automatically create pull requests for vulnerable dependencies.
- **Secret Scanning**: We enabled secret scanning for all repositories to detect and prevent accidental exposure of sensitive information.
- **Incident Response Plan**: We published a public Incident Response Plan (IRP) alongside our global [security policy](https://github.com/mockoon/mockoon?tab=security-ov-file) and created a more thorough version for internal purposes.
- **CVE Management**: We learned how to manage CVEs (Common Vulnerabilities and Exposures) and set up processes to handle them effectively. We successfully requested a first CVE for a [GitHub Security Advisory (GHSA)](https://github.com/mockoon/mockoon/security/advisories/GHSA-w7f9-wqc4-3wxr) opened last year and clarified processes for future advisories.
- **SBOMs**: We explored generating and publishing Software Bill of Materials (SBOMs). Version 9.4.0, is the [first release to include an SBOM](https://mockoon.com/releases/9.4.0/#distributionsecurity), and we plan to make it a standard part of our release process moving forward.

This is only a part of the concrete actions we took during the program. And we cannot count the number of learnings we had on many other security topics like fuzzing, securing AI prompts and MCPs, UX and security, and much more. We are now much more aware of the security landscape surrounding open-source projects and the best practices to mitigate risks.

If you are still hesitant about participating in the program, we highly encourage you to apply for the next edition. It is an incredible opportunity!

## What's next?

We can safely say that this program has been a game-changer for us. It has helped us identify and address security gaps, implement best practices, and build a stronger security culture within our team. We are now better equipped to **protect** our project and our users from potential threats, and we are more confident in our **ability to respond to security incidents** effectively.

We will continue to apply these learnings to our future releases and cloud infrastructure. If you have any questions about our security practices, please don't hesitate to reach out to us!

Last but not least, we want to thank GitHub, the Security Lab team, and all the experts and partners involved in the program for their incredible support and guidance throughout this journey. Their devotion to improving open-source security is truly inspiring, and we are grateful to have been part of this initiative. We also want to thank the other maintainers in our cohort for sharing their experiences and insights, making this journey even more enriching and fun.
