import React from 'react';
import { useSvgHover } from '../hooks/useSvgHover';

const BandcampIcon = ({ size, ...props }) => {
  const { hoverColor, onMouseEnter, onMouseLeave } = useSvgHover(
    '#ffffff',
    '#715526'
  );

  return (
    <svg
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      viewBox="0 0 1792 1792"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M1070 1178l306-564H722l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286T0 896t71-348 191-286T548 71 896 0t348 71 286 191 191 286 71 348z"
        fill={hoverColor}
      />{' '}
    </svg>
  );
};

BandcampIcon.defaultProps = {
  size: 24
};

export default BandcampIcon;
