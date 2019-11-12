import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Song = ({ spotifyURL, songTitle }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleChange = () => setCollapsed(c => !c);

  return (
    <div>
      <button onClick={handleChange}>{songTitle}</button>
      <div className={`${collapsed ? 'hidden' : 'block'}`}>
        <iframe
          title={songTitle}
          src={spotifyURL}
          width="100%"
          height="100"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

Song.propTypes = {
  songTitle: PropTypes.string,
  spotifyURL: PropTypes.string.isRequired
};

Song.defaultProps = {
  songTitle: 'song 1'
};
