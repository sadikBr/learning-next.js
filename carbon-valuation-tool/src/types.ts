export type Region = {
  code: string;
  id: string;
  name: string;
};

export type Sector = {
  id: string;
  name: string;
  scopeId: string;
};

export type Milestone = {
  name: string;
  completed: boolean;
};

export type Stakeholder = {
  name: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  department: string;
  region: string;
  sector: string;
  clientName: string;
  startDate: Date;
  endDate: Date | undefined;
  budget: number;
  clerkUserId: string;
  updated_at: Date | null;
  created_at: Date;
  deleted_at: Date | null;
  milestone: Milestone[];
  stakeholder: Stakeholder[];
};
