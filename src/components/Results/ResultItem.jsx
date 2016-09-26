import React from 'react';
import { USE_REMOTE_SOURCES, REMOTE_URL } from 'constants';
import './ResultItem.scss';

const propTypes = {
  collaborators: React.PropTypes.array,
  concert: React.PropTypes.string,
  image: React.PropTypes.string,
  linkToRecording: React.PropTypes.string,
  mainArtists: React.PropTypes.array,
  name: React.PropTypes.string,
  raaga: React.PropTypes.array,
  taala: React.PropTypes.array,
};

const ResultItem = (props) => {
  let imageSrc = props.image;
  let { linkToRecording } = props;
  if (USE_REMOTE_SOURCES) {
    imageSrc = REMOTE_URL + imageSrc;
    linkToRecording = REMOTE_URL + linkToRecording;
  }
  return (
    <a href={linkToRecording} className="ResultItem">
      <div className="ResultItem__header">
        <img src={imageSrc} alt="concert artwork" className="ResultItem__concert-artwork" />
        <div className="ResultItem__main-info">
          <div className="ResultItem__name">
            {props.name}
          </div>
          <div className="ResultItem__concert">
            {props.concert}
          </div>
        </div>
      </div>
      <div className="ResultItem__main-artists">
        {props.mainArtists.map(artist => artist.name)}
      </div>
      <div className="ResultItem__collaborators">
        {props.collaborators.map(artist => artist.name)}
      </div>
      <div className="ResultItem__details">
        {props.raaga.map(raaga => raaga)}
      </div>
      <div className="ResultItem__details">
        {props.taala.map(taala => taala)}
      </div>
    </a>
  );
};

ResultItem.propTypes = propTypes;
export default ResultItem;
