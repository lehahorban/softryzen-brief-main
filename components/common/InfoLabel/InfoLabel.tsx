import { FC, Fragment, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { InfoLabelProps } from './InfoLabel.props';

import brief from '@/data/brief.json';

import Info from '@/public/images/info.svg';

export const InfoLabel: FC<InfoLabelProps> = ({ currentInfoInd }) => {
  const infoBtnRef = useRef<HTMLButtonElement>(null);

  const currentInfoIndAsNumber = Number(currentInfoInd);

  const closePopover = () => {
    return infoBtnRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    );
  };

  const mouseButtonEnterHandler = (open: any) => {
    if (open) {
      return;
    }
    return infoBtnRef.current?.click();
  };

  const mouseButtonLeaveHandler = (open: any) => {
    if (!open) {
      return;
    }
    closePopover();
  };

  const mousePanelEnterHandler = () => {
    return infoBtnRef.current?.click();
  };

  return (
    <Popover>
      {({ open }) => {
        return (
          <div
            className="absolute right-[-20px] top-[-25%] smOnly:hidden"
            onMouseEnter={mouseButtonEnterHandler.bind(null, open)}
            onMouseLeave={mouseButtonLeaveHandler.bind(null, open)}
          >
            <Popover.Button ref={infoBtnRef}>
              <Info
                aria-label={brief.form.services.infoAriaLabel}
                className="h-4 w-4"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`${
                  currentInfoIndAsNumber % 2
                    ? 'translate-x-[-8px] translate-y-[-4px] transform mdOnly:translate-x-[-248px] mdOnly:translate-y-[-4px] mdOnly:transform'
                    : 'translate-x-[-8px] translate-y-[-4px] transform'
                } absolute left-1/2 z-10 mt-0 max-w-sm`}
              >
                <div
                  className=" min-h-[70px] w-[257px] bg-[#ffffffcc] p-3"
                  onMouseEnter={mousePanelEnterHandler}
                  onMouseLeave={mouseButtonLeaveHandler.bind(null, open)}
                >
                  <div
                    onMouseEnter={mousePanelEnterHandler}
                    onMouseLeave={mouseButtonLeaveHandler.bind(null, open)}
                  >
                    <p className="text-[12px] leading-[1.25]">
                      {
                        brief.form.services.items[currentInfoIndAsNumber]
                          .infoContent
                      }
                    </p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        );
      }}
    </Popover>
  );
};
