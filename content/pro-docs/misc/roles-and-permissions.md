---
title: Roles and permissions
meta:
  title: Mockoon Pro roles documentation
  description: Understand the roles and permissions system in Mockoon Pro.
order: 901
---

# Roles and permissions

---

Mockoon Pro uses a **roles and permissions** system to govern access to administrative settings, team management, and workspace resources.

## Team roles

Mockoon Pro defines two roles:

- **Owner**: Full access to all resources and [workspaces](pro-docs:features/workspaces), administrative settings, license allocation, user management, and mock instances.
- **User**: Access to create, edit, synchronize, and deploy mock environments in their assigned workspaces. Users may belong to multiple workspaces or none.

Both Owner and User accounts count toward your total allocated user seats.

## Permissions

|                                                                                             | Owner                                                                          | User                                                                           |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| **Workspace & resources**                                                                   |                                                                                |                                                                                |
| [Access embedded web app](pro-docs:clients/embedded-web-application)                        | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| [Connect Mockoon Desktop](pro-docs:clients/desktop-application)                             | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| [Real-time data synchronization](pro-docs:features/data-synchronization-team-collaboration) | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| [Deploy & manage mock instances](pro-docs:features/api-mock-deployments)                    | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| Access all workspaces                                                                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **Team management**                                                                         |                                                                                |                                                                                |
| [Create and manage workspaces](pro-docs:features/workspaces#create-and-manage-workspaces)   | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Assign workspace memberships                                                                | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Invite new members](pro-docs:misc/authentication#member-invitations)                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Revoke pending invitations                                                                  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Disable / enable team members                                                               | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Change team members' roles                                                                  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Delete team members                                                                         | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **System administration**                                                                   |                                                                                |                                                                                |
| [Manage system settings](pro-docs:self-hosting/administration#settings)                     | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Configure authentication & SSO](pro-docs:misc/authentication)                              | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Update license key & allocation](pro-docs:self-hosting/administration#licensing)           | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Restrict allowed email domains                                                              | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [View audit trail](pro-docs:misc/audit-trail)                                               | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| View running instances on dashboard                                                         | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
