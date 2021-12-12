import React, { useMemo } from 'react';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

import { parseISO, formatDistanceToNowStrict } from 'date-fns';

import { pt } from 'date-fns/locale';
import { sendGAEvent } from 'src/services/analytics';

import {
  BadgesContainer,
  CompanyLogoContainer,
  ContainerButtons,
  DescriptionText,
  ItemBadge,
  JobCardContainer,
  JobCardHeader,
  JobCardTitle,
  JobSourceIconContainer,
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
  const formattedDate = useMemo(() => {
    try {
      const date = parseISO(job.postedAt);

      const relative = formatDistanceToNowStrict(date, {
        locale: pt,
      });
      return relative;
    } catch {
      return '';
    }
  }, [job.postedAt]);

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

        <JobSourceIconContainer>
          <span>{formattedDate}</span>
          <BsLinkedin />
        </JobSourceIconContainer>
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
          <Button
            onClick={() =>
              sendGAEvent('button-apply', {
                url: job.externalUrl,
              })
            }
          >
            Aplicar <FiExternalLink />
          </Button>
        </a>
        {/* <Button variant="secondary">Detalhes</Button> */}
      </ContainerButtons>
    </JobCardContainer>
  );
});
