import { FC, Key } from 'react';
import Image from 'next/image';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import technologies from '@/data/technologies.json';

export const TechnologiesSection: FC = () => {
  const technologiesData = technologies.technologiesArray;

  return (
    <Section className="bg-white_gray !pb-[64px] !pt-10 xl:!pb-[84px] xl:!pt-[60px]">
      <div className="techContainer container relative">
        <Title
          tag="h2"
          className="relative mb-6 border-b-2 border-b-disabled pb-6 md:pb-10 md:text-[32px] md:leading-[1.38] xl:pb-[60px] xl:text-[40px] xl:leading-[1.4]"
        >
          {technologies.title}
        </Title>

        <ul className="relative mx-auto flex max-w-[280px] flex-wrap justify-center gap-y-5 md:max-w-[598px] md:gap-x-5 md:gap-y-[21px] xl:max-w-[804px] xl:gap-y-6">
          {technologiesData.map(({ icon_dark, icon_color }, ind: Key) => (
            <li
              key={ind}
              className="group relative h-10 w-[68px] md:h-12 md:w-[83px]"
            >
              <Image
                width={83}
                height={48}
                src={icon_dark.src}
                alt={icon_dark.alt}
                className="absolute left-0 top-0 h-full w-full duration-300 group-hover:opacity-0"
              />
              <Image
                width={83}
                height={48}
                src={icon_color.src}
                alt={icon_color.alt}
                className="h-full w-full opacity-0 duration-300 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
