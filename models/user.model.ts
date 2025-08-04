import { Frequency, Plans } from '@mockoon/cloud';

export type EmailingContact = {
  email: string;
  newsletter: boolean;
};

export type EmailingStatuses = {
  newsletter: boolean;
};

export type Subscription = {
  status: 'active' | 'trialing' | 'cancelled' | 'past_due';
  plan: Plans;
  provider?: 'stripe' | 'paddle' | 'free' | 'manual';
  frequency?: Frequency;
  createdOn: number;
  renewOn: number;
  cancellationScheduled?: boolean;
  customerId: string;
  subscriptionId: string;

  // teamId
  principalUid: string;
};
