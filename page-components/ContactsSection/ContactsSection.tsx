import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { MainLink } from '@/components/button/MainLink';
import { ContactsCardsList } from '@/components/common/ContactsCardsList';

import Envelope from '@/public/images/mail.svg';

import contacts from '@/data/contacts.json';
import header from '@/data/header.json';
import { router } from '@/utils/routes';

export const ContactsSection: FC = () => {
  return (
    <Section
      id="contacts"
      className="contactsBg bg-primary pb-40  xl:pb-[140px] xl:pt-[60px]"
    >
      <div className="container md:flex md:items-start md:justify-between">
        <div>
          <Title className="mb-6 md:mb-10" tag="h2" variant="light">
            {contacts.title}
          </Title>
          <Paragraph
            className="mb-6 max-w-[400px] md:mb-[46px] md:max-w-[344px] md:text-xl xl:mb-10 xl:max-w-[392px]"
            variant="white"
          >
            {contacts.paragraphText}
          </Paragraph>
          <a
            className="mb-[38px] flex cursor-pointer items-center text-white duration-300 hover:text-blue_light md:mb-[63px] md:text-xl xl:mb-[58px]"
            href={`mailto:${contacts.mailText}`}
          >
            <Envelope className="mr-3.5 h-5 w-5 md:mr-3 md:h-6 md:w-6" />
            {contacts.mailText}
          </a>
          <MainLink
            href={router.BRIEF}
            className="gradientBtn w-[252px] bg-white font-semibold !text-primary hover:!text-white smOnly:mx-auto smOnly:mb-[38px]"
          >
            {header.buttons.brief.text}
          </MainLink>
        </div>
        <ContactsCardsList cards={contacts.persons} label={contacts.label} />
      </div>
    </Section>
  );
};
