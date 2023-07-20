import { NextPage } from 'next';
import Head from 'next/head';

import { withLayout } from '@/layout/Layout';

import { Breadcrumbs } from '@/components/typography/Breadcrumbs';
import { BriefHero } from '@/page-components/BriefHero';
import { BriefForm } from '@/page-components/BriefForm';
import { BriefTerms } from '@/page-components/BriefTerms';

import brief from '@/data/brief.json';

const Brief: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{brief.title}</title>
      </Head>
      <div className="bg-white pt-3">
        <Breadcrumbs className="container " />
      </div>
      <BriefHero />
      <BriefTerms />
      <BriefForm />
    </div>
  );
};

export default withLayout(Brief);
