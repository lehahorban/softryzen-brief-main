import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

import { router } from '@/utils/routes';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { MainLink } from '@/components/button/MainLink';
import { StagesItem } from '@/components/common/StagesItem';

import Briefing from '@/public/images/stages/briefing.svg';
import Prototyping from '@/public/images/stages/prototyping.svg';
import DesignCreation from '@/public/images/stages/designCreation.svg';
import ProjectDevelopment from '@/public/images/stages/projectDevelopment.svg';
import ContentFilling from '@/public/images/stages/contentFilling.svg';
import Testing from '@/public/images/stages/testing.svg';
import ProjectDelivery from '@/public/images/stages/projectDelivery.svg';

import workStages from '@/data/workStages.json';

export const WorkStagesSection: FC = () => {
  const stages = [
    {
      title: workStages.stages.briefing.title,
      icon: <Briefing />,
      text: workStages.stages.briefing.text,
      number: '001',
    },
    {
      title: workStages.stages.prototyping.title,
      icon: <Prototyping />,
      text: workStages.stages.prototyping.text,
      number: '002',
    },
    {
      title: workStages.stages.designCreation.title,
      icon: <DesignCreation />,
      text: workStages.stages.designCreation.text,
      number: '003',
    },
    {
      title: workStages.stages.projectDevelopment.title,
      icon: <ProjectDevelopment />,
      text: workStages.stages.projectDevelopment.text,
      number: '004',
    },
    {
      title: workStages.stages.contentFilling.title,
      icon: <ContentFilling />,
      text: workStages.stages.contentFilling.text,
      number: '005',
    },
    {
      title: workStages.stages.testing.title,
      icon: <Testing />,
      text: workStages.stages.testing.text,
      number: '006',
    },
    {
      title: workStages.stages.projectDelivery.title,
      icon: <ProjectDelivery />,
      text: workStages.stages.projectDelivery.text,
      number: '007',
    },
  ];

  return (
    <Section className="bg-white !pt-0">
      <div className="container">
        <Title
          tag="h2"
          variant="dark"
          className="mb-6 border-b-2 border-disabled pb-[22px] text-2xl md:pb-[38px] md:leading-[44px] xl:pb-[58px]"
        >
          {workStages.title}
        </Title>
        <Tab.Group as="div" className="mb-10 md:mb-12 xl:flex xl:gap-x-[76px]">
          <div>
            <Paragraph className="mb-6 md:max-w-[575px] md:text-xl xl:mb-[200px] xl:max-w-[336px]">
              {workStages.description}
            </Paragraph>
            <Tab.Panels className="mx-auto hidden h-[356px] w-[320px] xl:block">
              {stages.map(stage => (
                <Tab.Panel key={stage.number}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stage.icon}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
          <Tab.List
            as="ul"
            className="flex flex-col gap-5 xl:min-h-[734px] xl:w-[804px]"
          >
            {stages.map(stage => {
              return <StagesItem key={stage.number} stage={stage} />;
            })}
          </Tab.List>
        </Tab.Group>
      </div>
      <MainLink href={router.BRIEF} className="mx-auto w-[260px]">
        {workStages.link}
      </MainLink>
    </Section>
  );
};
