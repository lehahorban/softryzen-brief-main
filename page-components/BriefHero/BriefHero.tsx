import { Link } from 'react-scroll';

import { Section } from '@/components/common/Section';
import { BriefAnimation } from '@/components/common/BriefAnimation';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import ArrowDown from '@/public/images/arrow-down.svg';

import brief from '@/data/brief.json';

export const BriefHero = () => {
  return (
    <Section className="relative bg-white pb-0 pt-[52px] md:pb-0 md:pt-[72px] xl:pb-[195px] xl:pt-[72px]  ">
      <div className="container">
        <Title
          tag="h1"
          className="mb-6 text-[32px] md:w-[454px] md:leading-[68px] xl:mb-10 xl:w-[744px] xl:leading-[98px]"
        >
          {brief.titlePage}
        </Title>
        <Paragraph className="mb-[43px] md:w-[520px] md:text-xl xl:mb-[55px]">
          {brief.text}
        </Paragraph>
        <Link
          to="brief-form"
          offset={-60}
          href="#brief-form"
          smooth
          duration={600}
          className="mb-10 flex cursor-pointer items-center scroll-auto text-xl font-bold text-primary duration-300 hover:text-hover focus:text-hover md:mb-5 xl:mb-0"
        >
          {brief.buttonScroll}
          <ArrowDown className="h-[33px] w-[33px]" />
        </Link>
        <BriefAnimation />
      </div>
    </Section>
  );
};
