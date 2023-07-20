import { FC } from 'react';
import { Tab } from '@headlessui/react';

import { QuestionsProps } from './CommonQuestionsSection.props';

import { Section } from '@/components/common/Section';
import { QuestionItem } from '@/components/common/QuestionItem';
import { Title } from '@/components/typography/Title';

import LogoFAQ from '@/public/images/faq.svg';

import faq from '@/data/faq.json';

export const CommonQuestionsSection: FC = () => {
  const questions = faq.questions as QuestionsProps[];

  return (
    <Section className="bg-white_gray xl:pt-[60px]">
      <div className="container">
        <Title
          tag="h2"
          variant="dark"
          className="tab-section-title relative mb-12 text-2xl md:mb-10 md:leading-[44px] xl:mb-11 xl:leading-[56px]"
        >
          {faq.title}
        </Title>
        <Tab.Group
          as="div"
          className="relative xl:flex xl:items-end xl:justify-end xl:gap-x-10"
        >
          <LogoFAQ className="absolute left-0 top-0 hidden h-[342px] w-[249px] xl:block" />
          <Tab.List
            as="ul"
            className="flex min-h-[392px] flex-col gap-y-12 md:min-h-[372px] xl:min-h-[348px] xl:w-[907px]"
          >
            {questions.map((question, index) => {
              return <QuestionItem key={index} question={question} />;
            })}
          </Tab.List>
        </Tab.Group>
      </div>
    </Section>
  );
};
