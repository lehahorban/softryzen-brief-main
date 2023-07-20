import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';
import useFormPersist from 'react-hook-form-persist';

import { Section } from '@/components/common/Section';
import { BriefFormQuestions } from '@/components/common/BriefFormQuestions/BriefFormQuestions';
import { BriefFormContacts } from '@/components/common/BriefFormContacts/BriefFormContacts';
import { CustomToast } from '@/components/common/CustomToast';

import { FormInputs, useCustomForm } from '@/hooks/useCustomForm';
import { sendGoogleTableBrief, sendMessageToTg } from '@/utils/api';

import Loader from '@/public/images/loader.svg';
import Arrow from '@/public/images/button-arrow.svg';

import brief from '@/data/brief.json';

export const BriefForm: FC = () => {
  const isBrowser = typeof window != 'undefined';
  const SESSION_KEY = 'formBrief';

  const onSubmit = async (data: FormInputs) => {
    const user = {
      services: data.services.toString() || 'не обрано',
      discover: data.discover.toString() || 'не обрано',
      corporateStyle: data.corporateStyle || 'не обрано',
      name: data.name,
      email: data.email,
      telegram: data.telegram || 'не вказано',
      phone: data.phone,
      site: data.site || 'не вказано',
      info: data.info || 'не вказано',
      createdAt: new Date().toLocaleString(),
    };

    const message = /* html */ `
      <b>Отримано новий запит з брифу:</b>
        Імʼя: ${data.name}
        Телефон: ${data.phone}
        Пошта: ${data.email}
        Телеграм: ${data.telegram || 'не вказано'}
        Інформація: ${data.info || 'не вказано'}
        Послуги: ${data.services || 'не обрано'}
        Звідки дізнались: ${data.discover || 'не обрано'}
        Чи є корпоративний стиль: ${data.corporateStyle || 'не обрано'}
        Сайт: ${data.site || 'не вказано'}
        Коли створена заявка: ${new Date().toLocaleString()}
      `;
    // eslint-disable-next-line no-undef
    const response = await Promise.all([
      await sendGoogleTableBrief(user),
      await sendMessageToTg(message),
    ]);
    sessionStorage.removeItem(SESSION_KEY);
    return response;
  };

  const {
    isError,
    isSuccess,
    isLoading,
    disabled,
    handleSubmit,
    register,
    watch,
    setValue,
    errors,
  } = useCustomForm({ onSubmit });

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
    exclude: ['services', 'discover', 'corporateStyle', 'projectLaunchDates'],
  });

  useEffect(() => {
    if (isSuccess) {
      toast.custom(t => {
        return <CustomToast tst={t} success />;
      });
    }
    if (isError) {
      toast.custom(t => {
        return <CustomToast tst={t} />;
      });
    }
  }, [isSuccess, isError]);

  return (
    <Section id="brief-form" className="pb-20 md:!pb-[100px] md:!pt-[60px]">
      <div className="container">
        <form onSubmit={handleSubmit} className="xl:mx-auto xl:max-w-[812px]">
          <BriefFormQuestions register={register} watch={watch} />
          <BriefFormContacts register={register} errors={errors} />
          <button
            type="submit"
            disabled={disabled || isLoading}
            className="button mx-auto w-full max-w-[259px] duration-300 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-primary"
          >
            {isLoading && !isSuccess && brief.form.button.pending}
            {isSuccess && !isLoading && brief.form.button.success}
            {!isLoading && !isSuccess && brief.form.button.idle}
            {isLoading ? (
              <Loader
                className="mr-3 h-6 w-6 animate-spin"
                width={24}
                height={24}
              />
            ) : (
              <Arrow className="h-8 w-8" />
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};
