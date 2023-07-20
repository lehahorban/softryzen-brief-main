import { FC } from 'react';
import { Link } from 'react-scroll';

import { Section } from '@/components/common/Section';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { MainLink } from '@/components/button/MainLink';

import hero from '@/data/hero.json';
import { router } from '@/utils/routes';

import HeroIcon from '@/public/images/heroIcon.svg';

export const HeroSection: FC = () => {
  return (
    <Section className="relative overflow-hidden bg-primary py-[50px] md:pt-[60px] xl:pb-[129px]">
      <div className="container relative">
        <div className="w-[598px] smOnly:w-full">
          <Title
            tag="h1"
            className="text-[28px] leading-10 text-white md:text-[44px] md:leading-[52px] xl:text-[48px] xl:leading-[56px]"
          >
            {hero.title}
          </Title>

          <Paragraph
            variant="white"
            className="mt-7 w-full text-xl md:w-[447px] xl:w-[512px] smOnly:text-base"
          >
            {hero.text}
          </Paragraph>
          <div className="mt-[37px] sm:mt-8 md:mt-10 md:flex">
            <MainLink
              href={router.BRIEF}
              className="hover:gradientBtn relative z-10 w-[252px] bg-white text-lg font-semibold !text-primary hover:!text-white_light smOnly:m-auto"
            >
              {hero.button}
            </MainLink>

            <Link
              to="help"
              smooth={true}
              tabIndex={0}
              className="group relative z-10 ml-10 inline-block cursor-pointer border-l border-white pl-3 hover:border-blue_light smOnly:ml-0 smOnly:mt-[56px]"
            >
              <Paragraph
                variant="white"
                className="w-[136px] text-lg  group-hover:text-blue_light"
              >
                {hero.link}
              </Paragraph>
            </Link>
          </div>
        </div>
        <HeroIcon className="absolute bottom-[-245px] left-[25px] h-[378px] w-[439px] transform transition-all duration-300 hover:-translate-y-7 md:bottom-[-190px] md:left-[330px] md:h-[558px] md:w-[730px] xl:bottom-[-350px] xl:left-[600px] xl:h-[1051px] xl:w-[762px]" />
      </div>
    </Section>
  );
};
