import { FC } from 'react';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { VideoPlayer } from '@/components/player';

import data from '@/data/projectPresentation.json';

export const ProjectPresentationSection: FC = () => {
  return (
    <Section className="bg-white_gray py-10 md:py-[60px] xl:py-[60px]">
      <div className="container">
        <Title
          tag="h2"
          className="md:leading-[44px] xl:leading-[56px] smOnly:w-[193px]"
        >
          {data.title}
        </Title>
        <div className="mt-6 border-t-2 border-b-disabled md:mt-10 xl:mt-[60px]">
          <Paragraph className="mt-6 font-light text-dark md:text-xl xl:w-[851px]">
            {data.text}
          </Paragraph>
        </div>
        <div className="mx-auto mt-8 h-[360px] w-full md:mt-10 md:h-[360px] xl:mt-[60px] xl:w-[705px] smOnly:h-[192px]">
          <VideoPlayer url={data.playerUrl} />
        </div>
      </div>
    </Section>
  );
};
