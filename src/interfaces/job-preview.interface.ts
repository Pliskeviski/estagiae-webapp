export interface IJobPreview {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  postedAt: string;
  remoteAllowed: boolean;
  externalUrl: string;
  companyName: string;
  companyUrl: string;
  companyImageUrl: string;
  jobType: string;
  jobTypeSchema: string;
  expiresAt: Date;
  location: string;
  industries: string[];
  responsabilities: string[];
  country: string;
  state: string;
  city: string;
}
