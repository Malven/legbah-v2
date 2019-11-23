import React from 'react';
import { useSvgHover } from '../hooks/useSvgHover';

const PlayIcon = ({ size, ...props }) => {
  const { hoverColor, onMouseEnter, onMouseLeave } = useSvgHover(
    '#ffffff',
    '#715526'
  );

  return (
    <svg
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      width={size}
      height={size}
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        fill={hoverColor}
        d="M23 12L1 24V0l22 12zM2 22.315L20.912 12 2 1.685v20.63z"
      />
    </svg>
  );
};

PlayIcon.defaultProps = {
  size: 24
};

export default PlayIcon;
