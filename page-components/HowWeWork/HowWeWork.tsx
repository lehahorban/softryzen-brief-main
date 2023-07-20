import { FC } from 'react';
import Link from 'next/link';

import { Section } from '@/components/common/Section';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import work from '@/data/howWeWork.json';

import Arrow from '@/public/images/button-arrow.svg';
import WorkVector from '@/public/images/workVector.svg';
import WorkCross from '@/public/images/workCross.svg';

export const HowWeWorkSection: FC = () => {
  return (
    <Section id="work" className="bg-white">
      <div className="container">
        <div className="xl:flex">
          <Title
            tag="h2"
            variant="dark"
            className="text-2xl md:leading-normal xl:text-[40px] xl:leading-[1.4]"
          >
            {work.title}
          </Title>
          <Paragraph className="mt-6 text-xl md:mt-10 xl:ml-24 xl:mt-0 xl:w-[784px] smOnly:text-base">
            {work.freeDescription}
          </Paragraph>
        </div>
        <div className="relative mt-4 flex justify-between bg-primary px-5 py-10 md:mt-10 md:p-10 xl:mt-[60px] xl:pb-[100px] xl:pt-10 smOnly:block">
          <div>
            <Title
              tag="h3"
              className="w-[250px] text-xl font-semibold text-white md:w-[296px] xl:w-full  xl:leading-8"
            >
              {work.freeProjectsTitle}
            </Title>

            <ul className="relative z-10 mt-8 smOnly:mt-6">
              {work.freeProjectsItem.map(el => (
                <li
                  key={el}
                  className="mt-5 border-l border-white pl-4 first:mt-0 smOnly:mt-6"
                >
                  <Paragraph
                    variant="white"
                    className="text-base md:text-lg xl:text-xl"
                  >
                    {el}
                  </Paragraph>
                </li>
              ))}
            </ul>
          </div>
          <Paragraph
            variant="white"
            className="text-base  md:ml-8 md:mt-[72px] md:w-[320px] md:text-lg xl:mt-[78px] xl:w-[530px] xl:text-xl smOnly:mt-[90px]"
          >
            {work.freeProjectsText}
          </Paragraph>
          <WorkVector className="absolute left-0 h-[244px] max-w-full sm:w-80 md:bottom-[-50px] md:h-[344px] md:w-[339px] xl:bottom-[-53px] xl:left-[187px] xl:h-[402px] xl:w-[411px] smOnly:top-[95px]" />
        </div>
        <div className="relative bg-white_gray p-10 smOnly:px-5 smOnly:py-10">
          <div className="flex justify-between smOnly:mt-6 smOnly:block">
            <Paragraph className="my-auto text-base text-dark md:w-[296px] md:text-lg xl:w-[530px] xl:text-xl smOnly:m-0">
              {work.paidDescription}
            </Paragraph>
            <div className="relative z-10 md:ml-8 md:w-80 xl:w-[530px] smOnly:mt-10">
              <Title
                variant="dark"
                tag="h3"
                className="text-xl font-semibold xl:leading-8"
              >
                {work.paidProjectsTitle}
              </Title>

              <ul className="mt-8 smOnly:mt-6">
                {work.paidProjectsItem.map(el => (
                  <li
                    key={el}
                    className="mt-5 border-l border-primary pl-4 first:mt-0"
                  >
                    <Paragraph className="text-base text-dark md:text-lg xl:text-xl">
                      {el}
                    </Paragraph>
                  </li>
                ))}
              </ul>
              <Link
                href={work.linkUrl}
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="focus:text-focus mt-10 flex w-[179px] justify-between border-b border-primary pb-[7px] text-lg font-semibold text-primary hover:border-hover hover:text-hover"
              >
                {work.link}
                <Arrow className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <WorkCross className="absolute bottom-0 right-0 h-[290px] w-80 md:h-[302px] md:w-[333px] xl:h-[363px] xl:w-[401px]" />
        </div>
      </div>
    </Section>
  );
};
