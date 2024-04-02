export enum Plans {
  FREE = 'FREE',
  SOLO = 'SOLO',
  TEAM = 'TEAM',
  ENTERPRISE = 'ENTERPRISE'
}
type TeamRoles = 'owner' | 'user';

export type TeamMember = {
  uid: string;
  email: string;
  role: TeamRoles;
};

export type Team = {
  seats: number;
  plan: Plans;
  members: TeamMember[];
};

export type User = {
  uid: string;
  email: string;
  plan: Plans;
  teamId: string;
  teamRole: TeamRoles;
  cloudSyncItemsQuota: number;
  cloudSyncItemsQuotaUsed: number;
  cloudSyncSizeQuota: number;
  templatesQuota: number;
  templatesQuotaUsed: number;
  nextQuotaResetOn: number;
  subscription: {
    provider: 'stripe' | 'paddle';
    renewOn: number;
    createdOn: number;
    frequency: string;
    portalEnabled?: boolean;
    cancellationScheduled?: boolean;
    pastDue?: boolean;
  };
};

export type EmailingContact = {
  email: string;
  newsletter: boolean;
  productUpdates: boolean;
  coursePreview: boolean;
};

export type EmailingStatuses = {
  newsletter: boolean;
  productUpdates: boolean;
  coursePreview: boolean;
};
