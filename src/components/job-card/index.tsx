import React, { useMemo } from 'react';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import {
  BadgesContainer,
  CompanyLogoContainer,
  ContainerButtons,
  DescriptionText,
  ItemBadge,
  JobCardContainer,
  JobCardHeader,
  JobCardTitle,
  LocationText,
} from './styles';
import { Button } from '../button';

interface IJobCardProps {
  job: IJobPreview;
}

interface IItemBadge {
  label: string;
  badgeColor: string;
  textColor: string;
}

export const JobCard = React.memo(({ job }: IJobCardProps) => {
  console.log('job', job);

  const badges: IItemBadge[] = useMemo(() => {
    const allBadges = [
      {
        label: job.jobType,
        badgeColor: '#E8DCFB',
        textColor: '#8D5EB9',
      },
    ];

    const firstIndustry = job.industries[0];
    const firstResponsibility = job.responsabilities.filter(
      (x) => x.length < 26
    )[0];

    if (firstIndustry && firstIndustry.length <= 26) {
      allBadges.push({
        label: firstIndustry,
        badgeColor: '#D8F4E8',
        textColor: '#79CAA5',
      });
    }

    if (firstResponsibility) {
      allBadges.push({
        label: firstResponsibility,
        badgeColor: '#DCEBFD',
        textColor: '#6DA2C9',
      });
    }

    return allBadges;
  }, [job.industries, job.jobType, job.responsabilities]);

  return (
    <JobCardContainer>
      <JobCardHeader>
        <CompanyLogoContainer>
          <Image
            src={job.companyImageUrl}
            alt={job.companyName}
            layout="fill"
          />
        </CompanyLogoContainer>
      </JobCardHeader>

      <JobCardTitle>{job.title}</JobCardTitle>

      <BadgesContainer>
        {badges.map((badge) => (
          <ItemBadge
            backgroundColor={badge.badgeColor}
            textColor={badge.textColor}
            key={`item-badge-${badge.label}`}
          >
            {badge.label}
          </ItemBadge>
        ))}
      </BadgesContainer>

      <LocationText>{job.location}</LocationText>

      <DescriptionText>{job.description}</DescriptionText>

      <ContainerButtons>
        <a href={job.externalUrl} target="_blank" rel="noreferrer">
          <Button>
            Aplicar <FiExternalLink />
          </Button>
        </a>
        <Button variant="secondary">Detalhes</Button>
      </ContainerButtons>
    </JobCardContainer>
  );
});
