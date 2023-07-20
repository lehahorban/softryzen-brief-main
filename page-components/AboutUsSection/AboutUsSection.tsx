import { FC } from 'react';
import Link from 'next/link';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import Arrow from '@/public/images/button-arrow.svg';

import about from '@/data/about.json';

export const AboutUsSection: FC = () => {
  return (
    <Section
      id="about"
      className="aboutBg bg-white_gray pb-[47px] pt-[246px] md:pb-[40px] md:pt-[406px] xl:pb-[100px] xl:pt-[100px]"
    >
      <div className="container xl:pl-[650px]">
        <Title
          tag="h2"
          variant="dark"
          className="relative mb-8 text-2xl md:mb-10 md:leading-normal xl:text-[40px] xl:leading-[1.4]"
        >
          {about.title}
        </Title>
        <Paragraph className="mb-7 md:mb-10 md:max-w-[601px] md:text-xl">
          {about.paragraphText}
        </Paragraph>
        <Link
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={`${about.linkContent}`}
          className="focus:text-focus flex w-[179px] justify-between border-b border-primary pb-[7px] text-lg font-semibold text-primary hover:text-hover"
        >
          {about.linkText}
          <Arrow className="h-6 w-6" />
        </Link>
      </div>
    </Section>
  );
};
