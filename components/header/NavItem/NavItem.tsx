import { FC, Key } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavItemProps } from './NavItem.props';
import { router as r } from '@/utils/routes';

export const NavItem: FC<NavItemProps> = ({ list, onItemClick }) => {
  const router = useRouter();

  const handleClick = (element: string) => {
    if (element) {
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
      onItemClick();
    }
  };

  return (
    <>
      {list.map((item, index: Key) => {
        return (
          <li
            key={index}
            className={`text-lg text-dark xl:py-0 notXl:text-xl notXl:font-semibold notXl:text-white ${
              router.pathname === item.url ? 'text-primary' : null
            }`}
          >
            {router.pathname === r.BRIEF ? (
              <Link
                className="outline-primary duration-300 xl:hover:text-primary"
                href={item.url}
              >
                {item.name}
              </Link>
            ) : (
              <ScrollLink
                to={item.id}
                tabIndex={0}
                offset={item.offset}
                href={item.url}
                smooth
                duration={600}
                spy
                activeClass="active"
                className="cursor-pointer outline-primary duration-300 active:text-red-600 xl:hover:text-primary"
                onClick={onItemClick}
                onKeyUp={event => {
                  if (event.key === 'Enter') {
                    handleClick(item.id);
                  }
                }}
              >
                {item.name}
              </ScrollLink>
            )}
          </li>
        );
      })}
    </>
  );
};
