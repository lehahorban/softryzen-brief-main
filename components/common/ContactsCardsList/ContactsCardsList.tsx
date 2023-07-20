import { FC } from 'react';

import { ContactsCard } from '../ContactsCard/ContactsCard';

import { ContactsCardsListProps } from './ContactsCardsListProps';

export const ContactsCardsList: FC<ContactsCardsListProps> = ({
  cards,
  label,
}) => {
  return (
    <ul className="flex flex-col xl:flex-row xl:gap-x-5 notXl:gap-y-[47px]">
      {cards.map(card => (
        <ContactsCard
          key={card.id}
          imageSrc={card.imageSrc}
          name={card.name}
          rank={card.rank}
          phone={card.phone}
          telegram={card.telegram}
          linkedin={card.linkedin}
          label={label}
        />
      ))}
    </ul>
  );
};
