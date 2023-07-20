export type ContactsCardProps = {
  id?: string;
  imageSrc: string;
  name: string;
  rank: string;
  phone: string;
  telegram: string;
  linkedin: string;
  label?: {
    labelTelegram: string;
    labelLinkedin: string;
    labelPhon: string;
  };
};
