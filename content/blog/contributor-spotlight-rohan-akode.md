---
title: 'Contributor spotlight: Rohan Akode'
excerpt: We continue our series of interviews with Mockoon's open-source contributors with Rohan Akode.
date: '2026-10-12'
image: contributor-spotlight-rohan-akode.png
imageAlt: Article title with picture of Rohan Akode
imageWidth: 1200
imageHeight: 400
tags:
  - open-source
  - contributors
author: guillaume
meta:
  title: Contributor spotlight with Rohan Akode
  description: We continue our series of interviews with Mockoon's open-source contributors. Today, we are talking with Rohan Akode.
---

For an open-source project, the **community** plays a major role in building innovative products. No matter the form the contribution takes, feedback, code contribution, bug reports, or word of mouth, Mockoon wouldn't be what it has become without all of you.
We started this series of interviews to put some more light on the contributors who spent time crafting features or fixing bugs for the benefit of all.
Today, we are talking with **Rohan Akode**, who shares his enthusiasm for contributing to and using Mockoon.

---

### Can you introduce yourself and your background in software development, your passions or hobbies?

Hi! I'm [Rohan Akode](https://github.com/rohanakode490), currently pursuing my Master's in Computer Science at the University of Southern California (USC). Before starting my graduate studies, I worked for a year in the software industry building production systems and have done my Undergrad from IIT Bhubaneswar in India. I mainly focus on full-stack, frontend, and backend development, but lately I've also been getting into systems stuff with Rust and low-latency C++. Outside of software, you'll usually find me lifting at the gym, unwinding with anime, or playing games like Valorant, Apex Legends, and Pokémon.

> {"type": "##quotation##", "citation": "The whole concept of building something useful, putting it out there for free, and collaborating with developers around the world is just really cool to me", "author": "Rohan Akode", "authorRole": "Contributor", "pictureUrl": "contributors/rohan-akode.jpg"}

### How long have you been using Mockoon? Are there any particular contributions you've made that you'd like to emphasize or showcase?

I picked up Mockoon a while back while working on a project where I needed to test my frontend without waiting around for a backend.
Once I started digging into the repo, I ended up working on a mix of UI features and core engine fixes:

- **Undo delete toast**: Accidental deletions suck. I added an undo toast so users can recover deleted entities, and made sure the restoration logic preserved the exact index order in the list, especially edge cases around the first item (index 0).
- **Handlebars SafeString bug fix**: Ran into a weird bug where stringify wasn't handling nested SafeString objects properly in the templating engine and broke output, so I tracked down the serialization issue and patched it.
- **Command palette recent entries**: As a keyboard-heavy user, I wanted the command palette to remember recent actions so you don't have to keep retyping the same commands.
- **Header auto-completion**: Added autocomplete for header names and values in response rules to cut down on typos and save clicks.
- **New templating helpers**: Added `base64url/base64urlDecode` and `regex replace/replaceAll` helpers for mock response templates.

### What inspired you to contribute to a project like Mockoon and open-source in general?

Open source is pretty much what made me want to become a software engineer. The whole concept of building something useful, putting it out there for free, and collaborating with developers around the world is just really cool to me.
When I used Mockoon and realized it was open source, jumping in was a no-brainer. It's an active project with real users, so any fix or feature you ship actually makes someone's daily workflow a bit better.

### How do you balance your contributions with other commitments? Are your open-source contributions part of your work (as an employee)?

I contribute independently in my spare time between classes and assignments at USC. I usually look for issues that are either technically interesting or solve an actual usability annoyance I've noticed. Before jumping straight into code, I like to chat with the maintainers in the GitHub issue first. Bouncing different ideas around to see which approach makes the most sense from a user's perspective saves a ton of rework later on.

> {"type": "##quotation##", "citation": "Open an issue or drop a comment proposing your approach. Maintainers appreciate it, and it keeps you from building something that doesn't fit the project's direction", "author": "Rohan Akode", "authorRole": "Contributor", "pictureUrl": "contributors/rohan-akode.jpg"}

### What general advice would you give to someone interested in contributing to open-source projects?

- **Use the tool first**: It's ten times easier to spot bugs and UX friction when you actually use the product yourself.
- **Don't let monorepos scare you**: When you see tons of packages and directories, it looks overwhelming. Just find the feature you care about, locate its test files, and run them locally. Tests show you how the code is actually supposed to behave.
- **Talk to maintainers before writing 500 lines of code**: Open an issue or drop a comment proposing your approach. Maintainers appreciate it, and it keeps you from building something that doesn't fit the project's direction.

### Has your involvement with open source contributed to your growth as a developer or your career?

School projects usually don't prepare you for real-world codebases. Working on Mockoon meant dealing with an actual production monorepo—Electron, Angular, CLI packages, and shared libraries. Since I was new to Angular, it forced me to think about things like backwards compatibility, state management across different packages, writing solid unit tests, and handling edge cases you wouldn't normally think about in a class project. Plus, going through code reviews with experienced maintainers teaches you how to write much cleaner, more defensive code.

### What makes Mockoon unique compared to other API mocking tools? Can you share some key features or functionalities that you find particularly useful?

It's local-first and doesn't get in your way. You don't need an account, you don't need to send your data to someone else's cloud, and it works completely offline.
The two things I use most are:

- **Dynamic rules & templating**: You can mock conditional responses (returning a 401 on missing auth, or a 404 based on route params) without having to spin up a mock Express server.
- **The CLI**: Being able to design your mock visually in the desktop app and then run the exact same setup in a terminal or CI pipeline via Docker/CLI is super convenient

### Have you integrated Mockoon into any specific projects or workflows, and if so, how has it improved or streamlined those processes?

Whenever I build frontend projects, the biggest bottleneck is usually waiting for the backend or dealing with unstable dev environments. In the past, I'd end up hardcoding dummy JSON directly in my components, which is messy and annoying to clean up later. With Mockoon, I just spin up a local mock server with the endpoints and payloads I expect. It also lets me easily test edge cases that are annoying to reproduce against a real backend—like testing 500 errors, network delays, or specific error bodies.

### What are your favorite tools or resources for software development outside of Mockoon?

- Editor: Neovim all the way. Getting your editor dialed in and staying entirely on the keyboard is hard to beat.
- DevOps / Infra: Git, Docker, and Kubernetes.
- Languages: TypeScript and Go for building things fast, and recently Rust and C++ for digging into lower-level, performance-focused stuff.

### Is there anything else you'd like to share with the Mockoon community, a personal project or an interesting read?

Big shoutout to Guillaume and the Mockoon maintainers for keeping the project great and being so supportive of contributors!
If you want to connect or check out my work, you can find me at [https://rohanakode.dev](https://rohanakode.dev), or check out a couple of my projects like [https://flowentis.in](https://flowentis.in) and [https://cdus.rohanakode.dev](https://cdus.rohanakode.dev).

Always happy to talk code, systems, or gaming!

---

We thank Rohan for sharing his journey with us. We are grateful he chose to dedicate his time and talent to improving projects like Mockoon, making it an indispensable tool for developers worldwide.

More interviews are in the pipeline. Be sure not to miss any by [subscribing to our newsletter](/newsletter/). Happy mocking!
