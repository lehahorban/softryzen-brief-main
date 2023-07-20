import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import help from '@/data/help.json';

export const HelpSection: FC = () => {
  return (
    <Section id="help" className="bg-white pb-0 md:pb-0 xl:pb-0">
      <div className="container">
        <Title
          tag="h2"
          variant="dark"
          className="mb-6 text-2xl md:leading-[44px]  xl:mb-[60px] "
        >
          {help.title}
        </Title>
        <div className="xl:helpBg  bg-primary p-5 md:p-10 xl:px-[60px] xl:py-[46px]">
          <div className=" md:max-w-[575px] md:text-xl xl:max-w-[604px]">
            <Paragraph variant="white" className="mb-6">
              {help.description1}
            </Paragraph>
            <Paragraph variant="white">{help.description2}</Paragraph>
          </div>
        </div>
      </div>
    </Section>
  );
};
