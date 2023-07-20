import { FC } from 'react';
import Image from 'next/image';

import Telephone from '@/public/images/telephone.svg';
import Telegram from '@/public/images/telegram.svg';
import Linkedin from '@/public/images/linkedin.svg';

import { ContactsCardProps } from './ContactsCard.props';

export const ContactsCard: FC<ContactsCardProps> = ({
  imageSrc,
  name,
  rank,
  phone,
  telegram,
  linkedin,
  label,
}) => {
  return (
    <li>
      <div className="relative mb-3 h-[282px] w-[289px] smOnly:w-full">
        <Image
          src={imageSrc}
          alt={`${name}, ${rank}`}
          className="object-cover"
          fill
          sizes="(max-width: 767px) 100vw,  289px"
        />
      </div>
      <p className="mb-1 text-lg text-white_light">{name}</p>
      <div className="flex items-end justify-between text-white">
        <span className="text-[12px] leading-[1.33]">{rank}</span>
        <ul className="flex gap-x-3">
          <li>
            <a
              aria-label={label?.labelPhon}
              className="contactsSocialLink"
              href={`tel:${phone}`}
            >
              <Telephone className="contactsSocialIcon" />
            </a>
          </li>
          <li>
            <a
              className="contactsSocialLink"
              href={telegram}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={label?.labelTelegram}
            >
              <Telegram className="contactsSocialIcon" />
            </a>
          </li>
          <li>
            <a
              className="contactsSocialLink"
              href={linkedin}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={label?.labelLinkedin}
            >
              <Linkedin className="contactsSocialIcon" />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
