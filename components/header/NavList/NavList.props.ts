import { ItemProps } from '@/layout/Header/Header.props';

export interface NavListProps {
  list: ItemProps[];
  onItemClick: () => void;
}
