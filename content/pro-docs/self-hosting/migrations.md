---
title: Migrations
meta:
  title: Mockoon Pro migrations
  description: Review automatic data migrations and required actions when upgrading Mockoon Pro.
order: 204
---

# Migrations

---

Mockoon Pro automatically migrates persisted data when the server starts after an upgrade. Review the notes for each version before updating your installation.

## 9.10.0

### Default workspace

When an existing Mockoon Pro installation is upgraded to version 9.10.0, Mockoon creates a **Default** workspace once and assigns existing synchronized environments and non-Owner users to it. New installations also start with this workspace. Owners can then create additional workspaces and adjust memberships.
