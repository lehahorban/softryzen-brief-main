import { FC, useEffect, useState, MouseEvent } from 'react';

import { router } from '@/utils/routes';

import { Logo } from '@/components/typography/Logo';
import { MainLink } from '@/components/button/MainLink';
import { IconButton } from '@/components/button/IconButton';
import { Navigation } from '@/components/header/Navigation';
import { useCloseOnEsc } from '@/hooks';

import MobileMenuIcon from '@/public/images/header/mobile-menu.svg';
import CloseMenuIcon from '@/public/images/header/icon-close.svg';

import { ItemProps } from './Header.props';

import header from '@/data/header.json';

export const Header: FC = () => {
  const HEIGHT_SCROLL = 80;

  const items = header.nav as ItemProps[];

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => setNavbarOpen(false);
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= HEIGHT_SCROLL) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Close Navbar with click to ESC and on the backdrop
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      navbarToggleHandler();
    }
  };
  useCloseOnEsc(() => setNavbarOpen(false));

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  useEffect(() => {
    navbarOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [navbarOpen]);

  return (
    <header
      className={`left-0 top-0 z-40 flex h-[60px] w-full items-center border-b-[1px] border-solid border-disabled bg-transparent  ${
        sticky
          ? '!fixed !z-[9999] !bg-white !bg-opacity-50  backdrop-blur-[3px] !transition md:h-20'
          : 'absolute bg-white md:h-[100px]'
      }`}
    >
      <div className="container relative flex items-center justify-between">
        <Logo sticky={sticky} />

        <div className="flex items-center justify-end ">
          <div
            className={`absolute z-30 xl:mr-[100px] notXl:bg-white/50 notXl:backdrop-blur-[3px] ${
              navbarOpen
                ? ' disable-scroll !fixed left-0 top-0 h-screen w-screen '
                : '!static notXl:hidden  '
            }`}
            onClick={handleBackdropClick}
          >
            <div className="relative ml-auto flex flex-col smOnly:w-[200px] smOnly:px-5 smOnly:pb-[122px] mdOnly:w-[280px] mdOnly:pl-6 mdOnly:pr-5 notXl:h-screen  notXl:overflow-y-auto notXl:bg-primary notXl:pb-20 notXl:pt-[122px]">
              <IconButton
                onClick={navbarToggleHandler}
                label={header.buttons.mobileMenu.label.close}
                className="absolute right-5 top-[18px] flex items-center justify-center text-white xl:hidden"
              >
                <CloseMenuIcon width={24} height={24} className="h-6 w-6" />
              </IconButton>

              <Navigation
                onItemClick={closeNavbar}
                list={items}
                isOpen={navbarOpen}
              />

              <MainLink
                href={router.BRIEF}
                onClick={closeNavbar}
                noArrow
                className="!h-[52px] !w-[160px] shrink-0 border border-solid border-white bg-transparent !p-0 !font-normal text-white  focus:outline-primary md:!w-[216px] xl:hidden"
              >
                {header.buttons.brief.text}
              </MainLink>
            </div>
          </div>

          <MainLink
            href={router.BRIEF}
            noArrow
            className="hidden border-[1px] border-solid border-primary bg-transparent !text-primary outline-primary hover:!bg-blue_light focus:!bg-blue_light focus:outline-primary md:block md:h-[52px] md:w-[186px] md:font-normal mdOnly:mr-10"
          >
            {header.buttons.brief.text}
          </MainLink>
          <IconButton
            onClick={navbarToggleHandler}
            label={header.buttons.mobileMenu.label.open}
            className="flex items-center justify-center text-primary  xl:hidden"
          >
            <MobileMenuIcon width={24} height={24} className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
