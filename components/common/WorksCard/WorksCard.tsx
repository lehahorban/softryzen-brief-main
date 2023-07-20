import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import Arrow from '@/public/images/button-arrow.svg';

import { WorksCardProps } from './WorksCard.props';

import pridedWorks from '@/data/pridedWorks.json';

export const WorksCard: FC<WorksCardProps> = ({ work }) => {
  return (
    <li
      key={work.title}
      className="odd:flex-row-reverse md:flex md:gap-x-8  xl:gap-x-12"
    >
      <div className="relative aspect-[160/107] min-h-[214px] w-full md:aspect-[42/41] md:h-[328px] md:w-[336px] xl:aspect-[299/160] xl:h-[320px] xl:w-[584px] smOnly:mb-6">
        <Image
          src={work.image}
          alt={work.title}
          className="object-cover object-left	"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 336px, 584px"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-7">
        <Title tag="h3" className="">
          {work.title}
        </Title>
        <Paragraph className=" md:text-xl xl:mb-auto smOnly:line-clamp-6 mdOnly:line-clamp-[7]">
          {work.text}
        </Paragraph>
        <Link
          href={work.link}
          target="blank"
          rel="noopener noreferrer nofollow"
          className="focus:text-focus flex w-[179px] justify-between border-b border-primary pb-[7px] text-lg font-semibold text-primary hover:text-hover"
        >
          {pridedWorks.workLink}
          <Arrow className="h-6 w-6" />
        </Link>
      </div>
    </li>
  );
};
