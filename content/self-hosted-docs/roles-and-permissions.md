---
title: Roles and permissions
meta:
  title: Mockoon Self-Hosted roles documentation
  description: Understand the roles and permissions system in Mockoon Self-Hosted.
order: 106
---

# Roles and permissions

---

Mockoon Self-Hosted uses a **roles and permissions** system to govern access to administrative settings, team management, and workspace resources.

## Team roles

Mockoon Self-Hosted defines two roles:

- **Owner**: Full access to all resources, administrative settings, license allocation, user management, and mock instances.
- **User**: Access to the workspace to create, edit, synchronize mock environments, and deploy mock instances.

Both Owner and User accounts count toward your total allocated user seats.

## Permissions

|                                                                              | Owner                                                                          | User                                                                           |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| **Workspace & resources**                                                    |                                                                                |                                                                                |
| [Access embedded web app](self-hosted-docs:applications-and-access)          | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| Real-time data synchronization                                               | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| Deploy & manage mock instances                                               | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| Connect Mockoon Desktop                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
| **Team management**                                                          |                                                                                |                                                                                |
| [Invite new members](self-hosted-docs:authentication#member-invitations)     | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Revoke pending invitations                                                   | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Disable / enable team members                                                | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Delete team members                                                          | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| **System administration**                                                    |                                                                                |                                                                                |
| [Manage system settings](self-hosted-docs:administration#settings)           | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Configure authentication & SSO](self-hosted-docs:authentication)            | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [Update license key & allocation](self-hosted-docs:administration#licensing) | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| Restrict allowed email domains                                               | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| [View audit trail](self-hosted-docs:audit-trail)                             | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>  |
| View running instances on dashboard                                          | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> |
