import { FC } from 'react';

import { NavList } from '../NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({
  list,
  isOpen = false,
  onItemClick,
}) => {
  return (
    <nav
      id="navbarCollapse"
      className={`xl:visible xl:w-auto xl:max-w-[541px]  xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 smOnly:mb-[60px] mdOnly:mb-20 ${
        isOpen ? 'visibility  opacity-100' : 'invisible top-[120%] opacity-0'
      }`}
    >
      <NavList onItemClick={onItemClick} list={list} />
    </nav>
  );
};
