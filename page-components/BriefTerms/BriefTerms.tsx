import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import briefTerms from '@/data/briefTerms.json';

export const BriefTerms = () => {
  return (
    <Section
      id="help"
      className=" pb-0 md:pb-0 md:pt-[60px] xl:pb-0 xl:pt-[60px]"
    >
      <div className="container ">
        <div className="border-b-2 border-disabled xl:flex xl:gap-[85px]">
          <Title
            tag="h2"
            variant="dark"
            className="mb-6 text-2xl md:mb-10 md:leading-[44px]  xl:mb-0 xl:min-w-fit"
          >
            {briefTerms.title}
          </Title>

          <Paragraph className="mb-6 md:mb-10 md:text-xl xl:mb-8">
            {briefTerms.description}
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};
