import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { forwardRef } from 'react';

export const Switch = forwardRef(
  (
    { name, defaultChecked, onChange, id, small, currentValue, disabled, text },
    ref
  ) => {
    const [checked, setChecked] = useState(
      defaultChecked ? defaultChecked : false
    );

    const handleOnChange = () => {
      setChecked(!checked);
      onChange && onChange(!checked);
    };

    return (
      <>
        <p>Published?</p>
        <div className={'toggle-switch' + (small ? ' small-switch' : '')}>
          <input
            type="checkbox"
            name={name}
            className="toggle-switch-checkbox"
            id={id}
            checked={currentValue}
            defaultChecked={defaultChecked}
            onChange={handleOnChange}
            disabled={disabled}
            ref={ref}
          />
          {id ? (
            <label className="toggle-switch-label" htmlFor={id}>
              <span
                className={
                  disabled
                    ? 'toggle-switch-inner toggle-switch-disabled'
                    : 'toggle-switch-inner'
                }
                data-yes={text[0]}
                data-no={text[1]}
              />
              <span
                className={
                  disabled
                    ? 'toggle-switch-switch toggle-switch-disabled'
                    : 'toggle-switch-switch'
                }
              />
            </label>
          ) : null}
        </div>
      </>
    );
  }
);

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string.isRequired),
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  small: PropTypes.bool,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool
};

Switch.defaultProps = {
  text: ['Yes', 'No']
};
