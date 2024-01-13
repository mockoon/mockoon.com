---
title: Building our own analytics for fun and profit
excerpt: TODO
date: '2024-01-10'
image: TODO.png
imageAlt: TODO
imageWidth: 1200
imageHeight: 400
tags:
  - dev blog
author: guillaume
meta:
  title: Building our own analytics for fun and profit
  description: TODO
---

Last year we [removed Google Analytics from this website](/blog/september-2023-news/#-ditching-google-analytics-for-the-website), and even earlier, we [removed it from the app](/old-releases/desktop/#1.19.0). We did this for one principal reason: nobody likes being tracked. That being said, knowing if people are using your product is important. So we decided to build our own analytics system. Embark on this journey with us.

> 📈 Mockoon crossed **500k downloads** in January 2024. Thank you all for your support! 🙏

## What information do we need?

When you are building a product, you need to know if people are using it. Of course, there are many other ways and signals to know if your product is successful: social posts, reviews, word of mouth, etc. But let's be honest, seeing the number of users increasing is always a good feeling.

At the beginning of the project, we were using Google Analytics for both the website and the app. But we quickly realized we weren't interested in 90% of the information. We were mostly looking at the following:

- For the website: number of visitors and page views (global and per page), referral source, entry pages, downloads, and countries.
- For the app, we wanted to know how many people are using it, for how long (session duration) and which version or OS they are using.

### Measuring features usage

We were already not measuring the usage of specific features and weren't willing to use this kind of information. While this can have some benefits, it can also be a double-edged sword.
We usually decide how to prioritize features based on a number of factors:

- upvotes and comments on GitHub's issues
- direct feedback from users (support requests, Twitter, etc.)
- our own needs (we are also users of Mockoon) or sometimes interest
- the complexity of the feature
- the impact on the product
- the visibility of the feature: is it mandating a new UI or is it a hidden feature, like a new templating helper?
- the availability of a maintainer to work on it

Which means that we can have wildly different path for a new feature. Sometimes, some less popular features find their way into the product because they are easy to implement, or because we need them for our own use, or because a maintainer was available. It's often the case with harmless features. The one that are not directly visible in the UI, but will still benefit to some people. If we would track the usage of such features we could be really disappointed by the results and decide to remove them. But we know that they are useful to some people, and that's enough for us.

### Vanity metrics

We also realized many metrics are just vanity ones. We are also getting a lot of signals from a lot of other places: GitHub release downloads counts, GitHub stars, Docker image pulls, NPM installs, etc. We see that more and more users are using Mockoon, and that's what matters.

And now that we are trying to monetize Mockoon with a [SaaS](/pro/), pageviews, downloads or sessions are nice, but what will count in the end is how many people decide to pay. This will be the only important metric to guarantee the sustainability of the open-source project. No, unfortunately donations are far from paying the bills, which is a recurrent problem for open-source projects. But that's a topic for another blog post. 🙂

## Building our own analytics

### Why not use an existing solution?

Being busy with adding new features to the app, with support requests or writing content, we didn't want to spend too much time on building our own solution. The logical choice would have been to use an existing service, like Fathom or Simple Analytics. But like most privacy-friendly solutions, they are not free. And like all open-source projects, money is a scarce resource. So we decided to build our own solution.

We are developers after all, and we like to build things. 🙂

Self-hosting an open-source or community version of one of the tool was also considered. But the time required to understand the app, set up the infrastructure, and maintain it was probably bigger than rolling our own dead-simple solution.

### Our own dead-simple solution

We decided to build a simple analytics system that would be able to track basic events. Both on the website and the app.

#### Desktop app sessions

In the **desktop application**, we track sessions containing the following information:

- an "installation id", which is a unique identifier for each installation of the app. This allows us to know how many people are using the app. It's also an information we have no way to cross-check with other sources. So, no possible user identification here.
- the session start and end time, aka when the app is opened and closed. This allows us to know the session duration.
- a boolean to know if it is a first session or not. This allows us to know how many people are using the app for the first time.
- the app version and OS. This allows us to know which version is used and on which OS.
- the country code. This allows us to know where the app is used. This is not really useful but good for our ego. 😄
- the number of environments open in the app. This allows us to know how many environments are used on average.

Typical event:

```json
{
  "installationId": "31d749d4-d80d-4c0f-bb96-b536b6b13b42",
  "startTime": "2024-01-09T21:58:13.876Z",
  "endTime": "2024-01-10T14:09:09.962Z",
  "firstSession": false,
  "version": "6.0.1",
  "os": "darwin",
  "country": "BR",
  "environmentsCount": 19
}
```

#### Website page views and downloads

On the **website**, we track events with the following data:

- the **type** of event: a `pageview` or an `event`.
- the **event name**. This allows us to know which event is triggered. Currently, we only track `download`.
- the **event category**. This allows us to know which category the event belongs to. Currently, we only track the operating system for the `download` event: `win`, `mac` or `linux`.
- the **page path**. This allows us to know which page is visited.
- the **entry page path**. This allows us to know which page is the first visited, and let us understand part of the user journey.
- the **referrer URL**. This allows us to know where the user comes from. This is especially useful to reach out to people who are talking about Mockoon on social media or blogs.

```json
{
  "type": "pageview",
  "eventName": null
  "eventCategory": null,
  "date": "2024-01-10T15:08:28.844Z",
  "path": "/",
  "entryPage": "/",
  "referrer": "news.ycombinator.com/",
}
```

> 💡 The CLI and serverless packages are free of any telemetry or analytics system.

### Implementation

#### Desktop app

The desktop app is built with Electron and Angular. The implementation is a bit more complex than the website as many parameters are required to build the event object. The analytics code can be found in the [telemetry.service.ts](https://github.com/mockoon/mockoon/blob/main/packages/desktop/src/renderer/app/services/telemetry.service.ts).

The code can be a bit dry, and we are big fans of Observables, for the better and the worse. You can see [here](https://github.com/mockoon/mockoon/blob/main/packages/desktop/src/renderer/app/services/telemetry.service.ts#L64-L129) the full observable chain that builds the event object and trigger its sending to our API depending on various factors, like:

- is the telemetry globally enabled? and locally enabled?
- do we have access to an IP geolocation API?
- did the session end because of inactivity or because the app was closed?

#### Website

The website implementation is straightforward. It is built with Next.js and the analytics code can be found in the [analytics.ts](https://github.com/mockoon/mockoon.com/blob/main/utils/analytics.ts) file. It's a basic function that builds an event object and sends it to our API with a POST call.

#### API: AppEngine + Nest.js

The API exposes two different endpoints, one for the app telemetry, the other for the website analytics. The code is not public but it's quite simple.

It's a Nest.js application with a controller:

```typescript
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('telemetry')
  @HttpCode(204)
  public telemetry(@Body() telemetryEvent: TelemetryDto) {
    // we are not waiting for the response
    this.eventsService.writeTelemetry(telemetryEvent).subscribe();

    return;
  }
}
```

As you can see, we decided to not wait for BigQuery response (we are not returning the Observable). Like this, the API can answer really quickly and the user experience is not impacted. We are also not retrying the request if case of failure. It's not a critical piece of information.

We also make sure to check the telemetry and events objects schemas with a Nest.js DTO:

```typescript
export class TelemetryDto {
  @IsUUID() installationId: string;
  @IsString() startTime: string;
  @IsString() endTime: string;
  @IsBoolean() firstSession: boolean;
  @IsString() country: string;
  @IsString() version: string;
  @IsString() os: string;
  @IsNumber() environmentsCount: number;
}
```

Events are then stored in two BigQuery tables. One for the app telemetry, the other for the website analytics. The schema of the tables is the same as the event objects.

```typescript
@Injectable()
export class EventsService {
  private readonly bigquery: BigQuery;

  constructor() {
    this.bigquery = new BigQuery();
  }

  public writeTelemetry(telemetryEvent: TelemetryDto) {
    const options = {
      query: `INSERT data.telemetry(installationId, startTime, endTime, firstSession, country, version, os, environmentsCount) VALUES(@installationId, @startTime, @endTime, @firstSession, @country, @version, @os, @environmentsCount)`,
      location: 'US',
      params: { ...telemetryEvent }
    };

    return from(this.bigquery.query(options));
  }
}
```

The same applies to the website events. The code has been simplified for the sake of clarity.

The API is deployed on Google AppEngine. It's a serverless solution that scales automatically and is really cheap. The whole setup is quite straightforward and it's nearly a set and forget solution.

#### Database: BigQuery

We choose BigQuery for its really low cost at our volumes (see below). It's also really easy to use from an API deployed on AppEngine, and it uses SQL with which we are familiar.

We created two tables, one for the telemetry and one for the website events. The schema of the tables is the same as the event objects.

![BigQuery schema](/images/blog/building-own-analytics-fun-and-profit/bigquery-analytics-tables.png)

### Infrastructure and costs

Google Cloud offers very generous free tiers. We benefit from one App Engine free instance per month, and have a bit of extra cost when traffic is higher and upscaling is triggered.

For BigQuery, despite our traffic, we have yet to pay a single cent. The first 10GB of storage and 1TB of data processed for queries per month are free. We are currently using less than a Gigabyte of storage and only a handful of Gigabytes of data processed per month.

#### Visualization: Data Studio

The last brick of our custom analytics system is the visualization. Because if you can't see the data, it's useless!

We use Google Looker Studio to build a dashboard with the data from both BigQuery tables. It's a really powerful tool but we must admit we struggled a bit. It was definitely the most time consuming part of this journey.

Data analysis is not our strongest skill and the wording and concepts used in Looker Studio are not always easy to understand. But we managed to build a dashboard that shows us the data we need:

- page views
- downloads per OS
- page views per page/referrer
- most downloads per referrer
- app sessions
- app sessions per version
