---
title: Audit trail
meta:
  title: Mockoon audit trail documentation
  description: All you need to know about Mockoon Cloud's audit trail system.
order: 107
---

# Audit trail

---

The **audit trail** is a record of **all the actions performed** by users within a team. It provides a way to track changes, monitor activity, and ensure accountability. The audit trail is **available** for teams on the **Team** or **Enterprise** plans.

## Events logged

Currently the following events are logged in the audit trail:

- **User events**:
  - Desktop/web application login
- **Team management**:
  - Team/account creation
  - Team member added
  - Team member removed
  - Subscription self-upgrades (plan upgrade, seats increase)
- **Resource activities**:
  - **Cloud environments**:
    - Environment read (occurs when an environment is [pulled with the CLI](cloud-docs:api-mock-cloud-deployments#self-host-with-the-cli)).
    - Environment created
    - Environment deleted
  - **Cloud instances**:
    - Instance started
    - Instance restarted
    - Instance stopped
  - **Access tokens**:
    - Access token created
    - Access token revoked

## Retention period and permissions

The audit trail retains events for a period of:

- **30 days** for the **Team** plan.
- **1 year** for the **Enterprise** plan.

The audit trail is accessible to the **team owner** and **team admin** only (see [roles and permissions](cloud-docs:roles-permissions)).

## Exporting the audit trail

The audit trail can be exported as a JSON file from the account [audit trail page](/account/audit-trail/). The export includes all events from the retention period.
