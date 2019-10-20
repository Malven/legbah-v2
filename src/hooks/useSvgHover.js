import React from 'react';

export const useSvgHover = (primary, secondary) => {
  const [hoverColor, setHoverColor] = React.useState(null);

  const handleHover = value => {
    setHoverColor(value);
  };

  const onMouseEnter = React.useCallback(() => {
    handleHover(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    handleHover(false);
  }, []);

  return {
    hoverColor: hoverColor ? secondary : primary,
    onMouseEnter,
    onMouseLeave
  };
};
