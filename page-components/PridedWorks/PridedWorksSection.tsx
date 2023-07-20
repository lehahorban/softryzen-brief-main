import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import { WorksCard } from '@/components/common/WorksCard/WorksCard';

import { IWorkItem } from './PridedWorksSection.props';

import pridedWorks from '@/data/pridedWorks.json';

export const PridedWorksSection: FC = () => {
  const worksHomePage = pridedWorks.worksHomePage as IWorkItem[];

  return (
    <Section className="bg-white">
      <div className="container">
        <Title
          tag="h2"
          className="mb-6 md:mb-10 md:leading-[44px] xl:mb-[60px] xl:leading-[56px] smOnly:w-[193px]"
        >
          {pridedWorks.titleHomePage}
        </Title>

        <ul className="flex flex-col gap-[60px]">
          {worksHomePage.map(work => {
            return <WorksCard key={work.title} work={work} />;
          })}
        </ul>
      </div>
    </Section>
  );
};
