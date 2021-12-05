export interface IJobPreview {
  id: string;
  title: string;
  description: string;
  postedAt: string;
  remoteAllowed: boolean;
  externalUrl: string;
  companyName: string;
  companyUrl: string;
  companyImageUrl: string;
  jobType: string;
  expiresAt: Date;
  location: string;
  industries: string[];
  responsabilities: string[];
}
