import { FC, Key } from 'react';

import { CustomFieldset } from '@/components/form/CustomFieldset';
import { Checkbox } from '@/components/form/Checkbox';
import { RadioButton } from '@/components/form/RadioButton';

import {
  IBriefFormQuestionItem,
  IBriefFormQuestionsProps,
} from './BriefFormQuestions.props';

import brief from '@/data/brief.json';

export const BriefFormQuestions: FC<IBriefFormQuestionsProps> = ({
  register,
  watch,
}) => {
  const checkboxServices = brief.form.services
    .items as IBriefFormQuestionItem[];
  const checkboxDiscover = brief.form.discover
    .items as IBriefFormQuestionItem[];

  const radioBtnCorporateStyle = brief.form.corporateStyle
    .items as IBriefFormQuestionItem[];

  return (
    <>
      <CustomFieldset
        idAreaLabel={brief.form.services.ariaLabel}
        legend={brief.form.services.title}
        className="mb-[38px] md:mb-[80px]"
      >
        {checkboxServices.map((item, ind: Key, arr) => {
          const isInfoNeeded = ind !== arr.length - 1;
          return (
            <Checkbox
              key={ind}
              label={item.text}
              info={isInfoNeeded}
              infoInd={ind}
              {...register('services')}
              value={item.text}
              watchValue={watch('services')}
            />
          );
        })}
      </CustomFieldset>

      <CustomFieldset
        idAreaLabel={brief.form.corporateStyle.ariaLabel}
        legend={brief.form.corporateStyle.title}
        className="mb-[38px] md:mb-[80px]"
      >
        {radioBtnCorporateStyle.map((item, ind: Key) => (
          <RadioButton
            key={ind}
            label={item.text}
            value={item.text}
            {...register('corporateStyle')}
            watchValue={watch('corporateStyle')}
          />
        ))}
      </CustomFieldset>

      <CustomFieldset
        idAreaLabel={brief.form.discover.ariaLabel}
        legend={brief.form.discover.title}
        className="mb-[38px] md:mb-[80px]"
      >
        {checkboxDiscover.map((item, ind: Key) => (
          <Checkbox
            key={ind}
            label={item.text}
            value={item.text}
            {...register('discover')}
            watchValue={watch('discover')}
          />
        ))}
      </CustomFieldset>
    </>
  );
};
