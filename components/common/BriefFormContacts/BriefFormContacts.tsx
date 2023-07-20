import { FC } from 'react';

import { CustomFieldset } from '@/components/form/CustomFieldset';
import { Input } from '@/components/form/Input';

import { IBriefFormContactsProps } from './BriefFormContacts.props';

import brief from '@/data/brief.json';

export const BriefFormContacts: FC<IBriefFormContactsProps> = ({
  register,
  errors,
}) => {
  return (
    <CustomFieldset
      idAreaLabel={brief.form.contacts.ariaLabel}
      legend={brief.form.contacts.title}
      className="mb-3 md:mb-[39px]"
      styleCell="gap-y-[8px] gap-x-[25px]"
    >
      <Input
        label={brief.form.contacts.name.title}
        {...register('name', {
          required: brief.form.contacts.name.requiredError,
          pattern: {
            value: /^.[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ 'ʼ`-]{1,}$/gm,
            message: brief.form.contacts.name.patternError,
          },
          minLength: {
            value: 2,
            message: brief.form.contacts.name.minLengthError,
          },
          maxLength: {
            value: 30,
            message: brief.form.contacts.name.maxLengthError,
          },
        })}
        placeholder={brief.form.contacts.name.placeholder}
        error={errors?.name}
        className="focus:pl-3"
      />

      <Input
        label={brief.form.contacts.phone.title}
        {...register('phone', {
          required: brief.form.contacts.phone.requiredError,
          pattern: {
            value: /^(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?[\d\s-]{5,}$/g,
            message: brief.form.contacts.phone.patternError,
          },
          minLength: {
            value: 10,
            message: brief.form.contacts.phone.minLengthError,
          },
          maxLength: {
            value: 16,
            message: brief.form.contacts.phone.maxLengthError,
          },
        })}
        placeholder={brief.form.contacts.phone.placeholder}
        error={errors?.phone}
        className="focus:pl-3"
      />
      <Input
        label={brief.form.contacts.email.title}
        {...register('email', {
          required: brief.form.contacts.email.requiredError,
          pattern: {
            value:
              /^(?=^.{3,63}$)(^[A-Za-z0-9]+(([_\\.\\-](?=[A-Za-z0-9]))[a-zA-Z0-9]+([\\-\\.](?=[A-Za-z0-9]))*?)*@(\w+([\\.\\-](?=(\w|\d))))+[a-zA-Z]{2,6})$/,
            message: brief.form.contacts.email.patternError,
          },
        })}
        placeholder={brief.form.contacts.email.placeholder}
        error={errors?.email}
        className="focus:pl-3"
      />

      <Input
        label={brief.form.contacts.telegram.title}
        {...register('telegram', {
          pattern: {
            value: /^[a-zA-Zа-яА-ЯіїІЇ0-9.,:!?'"@/_-]+$/u,
            message: brief.form.contacts.telegram.patternError,
          },
          minLength: {
            value: 5,
            message: brief.form.contacts.telegram.minLengthError,
          },
          maxLength: {
            value: 50,
            message: brief.form.contacts.telegram.maxLengthError,
          },
        })}
        placeholder={brief.form.contacts.telegram.placeholder}
        error={errors?.telegram}
        className="focus:pl-3"
      />

      <Input
        label={brief.form.contacts.site.title}
        {...register('site', {
          pattern: {
            value:
              /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})?([a-zA-Z0-9/?=&%#\-_.]*)$/g,
            message: brief.form.contacts.site.patternError,
          },
          minLength: {
            value: 2,
            message: brief.form.contacts.site.minLengthError,
          },
          maxLength: {
            value: 30,
            message: brief.form.contacts.site.maxLengthError,
          },
        })}
        placeholder={brief.form.contacts.site.placeholder}
        error={errors?.site}
        className="focus:pl-3"
      />

      <Input
        label={brief.form.contacts.info.title}
        {...register('info', {
          pattern: {
            value: /^[a-zA-Zа-яА-ЯіїІЇ0-9.,:!?()'"@/ _-]+$/u,
            message: brief.form.contacts.info.patternError,
          },
          minLength: {
            value: 10,
            message: brief.form.contacts.info.minLengthError,
          },
          maxLength: {
            value: 900,
            message: brief.form.contacts.info.maxLengthError,
          },
        })}
        placeholder={brief.form.contacts.info.placeholder}
        error={errors?.info}
        className="focus:pl-3"
      />
    </CustomFieldset>
  );
};
