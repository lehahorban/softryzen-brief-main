import { FC, useRef, useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

import { AuthorCard } from '../AuthorCard';
import { Paragraph } from '@/components/typography/Paragraph';

import { FeedbackTextCardProps } from './FeedbackTextCard.props';

import data from '@/data/feedbacks.json';

export const FeedbackTextCard: FC<FeedbackTextCardProps> = ({
  lineClamp,
  feedback,
  defaultValue,
  onClick,
  ...props
}) => {
  const { review, author } = feedback;

  const textRef = useRef<HTMLParagraphElement>(null);
  const [showBtn, setShowBtn] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const isOverflowing = textElement.scrollHeight > textElement.clientHeight;
      setShowBtn(isOverflowing);
    }
  }, [width]);

  return (
    <li {...props}>
      <Paragraph
        paragraphRef={textRef}
        className={`${lineClamp ? 'line-clamp-[10]' : ''} text-sm md:text-base`}
      >
        {review}
      </Paragraph>
      {showBtn && (
        <button className="mt-4 self-start" type="button" onClick={onClick}>
          <Paragraph className="!text-[14px] !leading-4 !text-primary underline">
            {data.buttonMore.text}
          </Paragraph>
        </button>
      )}
      <AuthorCard
        className="pt-4"
        author={author}
        defaultValue={defaultValue}
      />
    </li>
  );
};
