import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayIcon from '../../../icons/play';

export const Song = ({ spotifyURL, songTitle }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleChange = () => setCollapsed(c => !c);

  return (
    <div>
      <button className="p-1" onClick={handleChange}>
        <span>{songTitle}</span>
        <i className="inline-block ml-1">
          <PlayIcon size={8} />
        </i>
      </button>
      <div className={`${collapsed ? 'hidden' : 'block'}`}>
        <iframe
          title={songTitle}
          src={spotifyURL}
          width="100%"
          height="100"
          frameBorder="0"
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
