import { FC, Key, useState } from 'react';

import { Section } from '@/components/common/Section';
import { Slider } from '@/components/common/Slider';
import { Title } from '@/components/typography/Title';
import { FeedbackTextCard } from '@/components/common/FeedbackTextCard';
import { FeedbackVideoCard } from '@/components/common/FeedbackVideoCard';
import { Modal } from '@/components/common/Modal';

import feedbacks from '@/data/feedbacks.json';

export const FeedbacksSection: FC = () => {
  const reviews = feedbacks.reviews;
  const defaultValue = feedbacks.defaultValue.photoAlt;

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setSelectedItem(null);
    }
  };

  return (
    <Section id="feedback" className="bg-white">
      <div className="container">
        <Title tag="h2" className="mb-6 md:mb-10">
          {feedbacks.title}
        </Title>

        <Slider>
          {reviews.map((item, ind: Key) =>
            item.type === 'text' ? (
              <FeedbackTextCard
                lineClamp={true}
                key={ind}
                className="keen-slider__slide flex flex-col justify-between bg-[#F5F6F9] px-2 pb-2 pt-4 xl:px-4 xl:pb-3 "
                feedback={item}
                defaultValue={defaultValue}
                onClick={() => openModal(item)}
              />
            ) : (
              <FeedbackVideoCard
                key={ind}
                className="keen-slider__slide"
                feedback={item}
                defaultValue={defaultValue}
              />
            ),
          )}
        </Slider>

        {selectedItem && (
          <Modal
            onClose={closeModal}
            handleOverlayClick={handleOverlayClick}
            feedback={selectedItem}
            defaultValue={defaultValue}
          />
        )}
      </div>
    </Section>
  );
};
