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
  email: string;
  plan: Plans;
  teamId: string;
  teamRole: TeamRoles;
  templatesQuota: number;
  templatesQuotaUsed: number;
  subscription: {
    renewOn: number;
    createdOn: number;
    frequency: string;
    portalEnabled?: boolean;
  };
};

export type UserProperties = {
  [T in keyof User]?: User[T];
};
