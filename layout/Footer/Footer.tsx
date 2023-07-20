import { FC } from 'react';
import Link from 'next/link';

import { Logo } from '@/components/typography/Logo';
import { FooterSocialLinks } from '@/components/footer/FooterSocialLinks';
import footer from '@/data/footer.json';

export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-10 md:py-16">
      <div className="container flex md:justify-between	  xl:items-center smOnly:flex-col	smOnly:items-center">
        <div className="h-[32px] w-[186px]  max-w-[186px] smOnly:mb-10">
          <Logo bigger />
        </div>
        <div className="md:flex	md:flex-row-reverse md:gap-10 xl:gap-[138px] smOnly:text-center">
          <FooterSocialLinks />
          <div className="xl:flex xl:items-center  xl:gap-[120px]">
            <Link
              href={footer.privacyPolicy.link}
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="block text-xs text-gray_light duration-300 hover:text-primary focus:text-primary md:text-sm "
            >
              Terms of Service & Privacy Policy
            </Link>
            <span className="mt-5 block text-xs text-gray_light md:mt-[7px] md:text-sm xl:mt-0 ">
              © {year}, All Rights Reserved SoftRyzen
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
