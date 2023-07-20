import { FC } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { PlayerProps } from './Player.props';

export const VideoPlayer: FC<PlayerProps> = ({ url }) => {
  return <ReactPlayer url={url} width="100%" height="100%" light />;
};
