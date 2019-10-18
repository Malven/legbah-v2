import React from 'react';

const FacebookIcon = ({ size, ...props }) => {
  const [hoverColor, setHoverColor] = React.useState(null);

  const handleHover = value => {
    setHoverColor(value);
  };

  return (
    <svg
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path
        fill={hoverColor ? '#715526' : '#ffffff'}
        d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"
      />
    </svg>
  );
};

FacebookIcon.defaultProps = {
  size: 24
};

export default FacebookIcon;
