import { IJobPreview } from 'src/interfaces/job-preview.interface';

interface IJobSchema {
  '@context': string; // 'https://schema.org/';
  '@type': string; // 'JobPosting';
  title: string; // 'Software Engineer';
  description: string; // '<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>';
  identifier?: {
    '@type': 'PropertyValue';
    name: string; // 'Google';
    value: string; // '1234567';
  };
  datePosted: string; // '2017-01-18';
  validThrough: string; // '2017-03-18T00:00';
  employmentType: string; // 'CONTRACTOR';
  hiringOrganization?: {
    '@type': string; //  'Organization';
    name: string; // 'Google';
    sameAs: string; // 'http://www.google.com';
    logo: string; // 'http://www.example.com/images/logo.png';
  };
  jobLocation?: {
    '@type': string; // 'Place';
    address: {
      '@type': string; // 'PostalAddress';
      addressLocality: string; // 'Mountain View';
      addressRegion: string; // 'CA';
      addressCountry: string; // 'US';
    };
  };
}

const formatDate = (date: string): string => {
  const dateWithoutTime = date.split('T')[0];

  const [year, month, day] = dateWithoutTime.split('-');
  return `${year}-${month}-${day}`;
};

export const generateJobsSchema = (items: IJobPreview[]): string => {
  const jobs: IJobSchema[] = items.map((item) => {
    const jobSchema: IJobSchema = {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: item.title,
      description: item.fullDescription,
      identifier: {
        '@type': 'PropertyValue',
        name: 'Estagiaê',
        value: item.id,
      },
      datePosted: formatDate(item.postedAt),
      validThrough: formatDate(item.expiresAt?.toISOString()),
      employmentType: item.jobTypeSchema,
      hiringOrganization: {
        '@type': 'Organization',
        name: item.companyName,
        sameAs: item.companyUrl,
        logo: item.companyImageUrl,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: item.city,
          addressRegion: item.state,
          addressCountry: item.country,
        },
      },
    };

    return jobSchema;
  });

  return JSON.stringify(jobs);
};

interface ICorporateSchema {
  '@context': string;
  '@type': string;
  // '@id': string;
  legalName: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
}

export const generateCorporateSchema = (): string => {
  const corporateSchema: ICorporateSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    // '@id': 'https://estagiae.com.br',
    legalName: 'Estagiaê',
    description:
      'A Estagiaê é uma plataforma de estágio que busca aprimorar a qualidade de vida de seus usuários, simplificando a busca e filtrando pelas melhores oportunidades!',
    url: 'https://estagiae.com.br',
    logo: 'https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/static/static/Logo%20Estagiae.svg',
    sameAs: [],
  };

  return JSON.stringify(corporateSchema);
};
