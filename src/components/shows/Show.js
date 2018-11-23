import React, { Component } from 'react';
import './show.css';
import imgNotFound from './imageNotFound.jpg';

class Show extends Component {
  render() {
    const { show } = this.props.show;
    // console.log(show);
    return (
      <div className="show__card">
        <img
          className="show__card-image"
          src={
            show === undefined || show.image === null
              ? imgNotFound
              : show.image.medium
          }
          alt="Show Info"
        />
        <div className="show__card-descriptors">
          <div className="show__card-header">
            <span style={{ fontWeight: 900 }}>Title</span>: {show.name}
          </div>
          <div className="show__card-genres">
            <span style={{ fontWeight: 900 }}>Genres</span>:
            {show.genres.map((genre, index) => {
              return <span key={index}> {genre + ' '}</span>;
            })}
          </div>
          <div className="show__card-airing">
            <span style={{ fontWeight: 900 }}>Currently On</span>:{' '}
            {show.status === 'Ended' ? 'No' : 'Yes'}
          </div>
          <div className="show__card-rating">
            <span style={{ fontWeight: 900 }}>Avg. Rating</span>:{' '}
            {show.rating.average}
          </div>
          <div className="show__card-network">
            <span style={{ fontWeight: 900 }}>Network</span>:{' '}
            {show.network === null ? 'Not Network' : show.network.name}
          </div>
        </div>
        <div className="show__card-body">
          <p className="show__card-body--text">
            {show.summary === null
              ? 'No Description Provided'
              : show.summary.replace(/(<([^>]+)>)/gi, '').slice(0, 200)}
            ...
          </p>
        </div>
        <div className="show__card-more-info">
          <a
            className="show-externals"
            href={`https://www.imdb.com/title/${show.externals.imdb}/`}
            target="_new"
          >
            IMDb
          </a>
          <a
            className="show-externals"
            href={`https://www.thetvdb.com/series/${show.name}`}
            target="_new"
          >
            thetvdb
          </a>
          <a
            className="show-externals"
            href={`https://en.wikipedia.org/wiki/${show.name}_(TV_series)`}
            target="_new"
          >
            wiki
          </a>
        </div>
      </div>
    );
  }
}

export default Show;
