import { NextPage } from 'next';
import Head from 'next/head';

import { withLayout } from '@/layout/Layout';

import { HeroSection } from '@/page-components/Hero';
import { FeedbacksSection } from '@/page-components/FeedbacksSection';
import { CommonQuestionsSection } from '@/page-components/CommonQuestions';
import { WorkStagesSection } from '@/page-components/WorkStages';
import { TechnologiesSection } from '@/page-components/Technologies';
import { PridedWorksSection } from '@/page-components/PridedWorks';
import { AboutUsSection } from '@/page-components/AboutUsSection';
import { HelpSection } from '@/page-components/HelpSection';
import { HowWeWorkSection } from '@/page-components/HowWeWork';
import { ContactsSection } from '@/page-components/ContactsSection';
import { ProjectPresentationSection } from '@/page-components/ProjectPresentation';

import seo from '@/data/seo.json';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
      </Head>
      <HeroSection />
      <AboutUsSection />
      <HelpSection />
      <HowWeWorkSection />
      <WorkStagesSection />
      <TechnologiesSection />
      <PridedWorksSection />
      <ProjectPresentationSection />
      <FeedbacksSection />
      <CommonQuestionsSection />
      <ContactsSection />
    </>
  );
};

export default withLayout(Home);
