import { ContactsCardProps } from '../ContactsCard/ContactsCard.props';

export type ContactsCardsListProps = {
  cards: ContactsCardProps[];
  label: {
    labelTelegram: string;
    labelLinkedin: string;
    labelPhon: string;
  };
};
