---
title: Roles and permissions
meta:
  title: Mockoon roles and permissions documentation
  description: All you need to know about Mockoon Cloud's roles and permissions system.
order: 105
---

# Roles and permissions

---

Mockoon Cloud uses a **roles and permissions** system to manage access to resources and actions within the platform.

## Team roles

Mockoon Cloud has a team-based architecture, where each team has a set of roles that define what actions users can perform within the team. Some roles have access to resources (API mocks, instances, etc.), while others do not.

Roles **with** resources access:

- **Owner**: Has full access to all resources and actions within the team, including billing and user management.
- **User**: Can access the Mockoon Cloud platform, create and manage their own APIs, and collaborate with other users.

Roles **without** resources access:

- **Team admin** (max 1 per team): Can manage view the team members, invite and remove users, and manage the subscription and billing information.
- **Billing** (max 1 per team): Can view the team members and manage the subscription and billing information.

> 💡 Roles without resources access do not count against the number of seats in the team and are not included in the billing.

## Permissions

Permissions are the actions that can be performed on resources within the Mockoon Cloud platform. Each role has a set of permissions that define what actions users can perform within the team.

|                                                                                                                                                                       | Owner                                                                          | User                                                                           | Team admin                                                                     | Billing                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Max users with role                                                                                                                                                   | 1                                                                              | Unlimited                                                                      | 1                                                                              | 1                                                                              |
| Count against the number of seats                                                                                                                                     | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **Resources access**                                                                                                                                                  |                                                                                |                                                                                |                                                                                |                                                                                |
| [Access the web app](cloud-docs:web-application)                                                                                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Manage cloud mock APIs](cloud-docs:data-synchronization-team-collaboration) (create, update, delete)                                                                 | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Manage deployed instances](cloud-docs:api-mock-cloud-deployments) (create, update, delete)                                                                           | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Generate templates with the assistants](cloud-docs:templates-and-ai-assistant)                                                                                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **Team management**                                                                                                                                                   |                                                                                |                                                                                |                                                                                |                                                                                |
| View team members                                                                                                                                                     | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| Manage team members (add/remove)                                                                                                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **Audit trail**                                                                                                                                                       |                                                                                |                                                                                |                                                                                |                                                                                |
| View [user and team management audit trail](cloud-docs:audit-trail)                                                                                                   | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| View [resources activities audit trail](cloud-docs:audit-trail)                                                                                                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **Subscription and billing**                                                                                                                                          |                                                                                |                                                                                |                                                                                |                                                                                |
| Manage subscription (view invoices, upgrade, cancel)<br/><small class="text-gray-700">Manage your subscription through our payment provider's customer portal</small> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |

## Subscription and billing

Currently, the subscription and billing management is done through our payment provider's customer portal (Paddle). The **Owner**, **Team admin** and **Billing** roles can access the customer portal to manage the subscription, view invoices, or cancel the subscription.

> 💡When adding a Billing or Team admin role to a team, the **email address registered with the payment provider** to which invoices are sent **will automatically be updated** to the email address of the user with the new role. The customer portal will still be accessible to all users with the **Owner**, **Team admin**, or **Billing** roles.
