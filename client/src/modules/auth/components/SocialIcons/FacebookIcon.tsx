import React, { FunctionComponent } from 'react';
import { SocialIconProps } from './types';

export const FacebookIcon: FunctionComponent<SocialIconProps> = ({width = 38, height = 38, viewBox = [0, 0, 48, 48]}) => <svg
    width={`${width}`}
    height={`${height}`}
    viewBox={viewBox.join(' ')}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="#3B5998"
    />
    <path
        d="M30.0336 24.9395H25.7511V40.6286H19.2627V24.9395H16.1768V19.4257H19.2627V15.8577C19.2627 13.3061 20.4747 9.3107 25.8088 9.3107L30.615 9.33081V14.6829H27.1278C26.5558 14.6829 25.7515 14.9687 25.7515 16.1858V19.4308H30.6005L30.0336 24.9395Z"
        fill="white"
    />
</svg>