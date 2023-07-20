import { FC } from 'react';

import { IconLink } from '@/components/button/IconLink';
import Behance from '@/public/images/social/behance.svg';
import Instagram from '@/public/images/social/instagram.svg';
import Linkedin from '@/public/images/social/linkedin.svg';
import Telegram from '@/public/images/social/telegram.svg';

import { IFooterSocialLinks } from './FooterSocialLinks.props';

const cssIconLink = 'text-dark duration-500   hover:text-primary';

import footer from '@/data/footer.json';

export const FooterSocialLinks: FC = () => {
  const i18Social = footer.social as IFooterSocialLinks;

  return (
    <ul className="flex gap-5 smOnly:mb-10 smOnly:justify-center">
      <li className="h-8 w-8">
        <IconLink
          href={i18Social.linkedin.url}
          label={i18Social.linkedin.label}
          className={cssIconLink}
        >
          <Linkedin />
        </IconLink>
      </li>

      <li className="h-8 w-8">
        <IconLink
          href={i18Social.instagram.url}
          label={i18Social.instagram.label}
          className={cssIconLink}
        >
          <Instagram />
        </IconLink>
      </li>

      <li className="h-8 w-8">
        <IconLink
          href={i18Social.behance.url}
          label={i18Social.behance.url}
          className={cssIconLink}
        >
          <Behance />
        </IconLink>
      </li>
      <li className="h-8 w-8">
        <IconLink
          href={i18Social.telegram.url}
          label={i18Social.telegram.label}
          className={cssIconLink}
        >
          <Telegram />
        </IconLink>
      </li>
    </ul>
  );
};
