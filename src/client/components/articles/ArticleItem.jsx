import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/articles/articlesItem/_desk_ArticleItem.scss';
import '../../sass/articles/articlesItem/_mob_ArticleItem.scss';
import BaseImageComponent from '../common/BaseImageComponent';
import BaseLinkComponent from '../common/BaseLinkComponent';

export default function ArticleItem({ blueTitle, title, subhead, img, author, note }) {
  return (
    <>
      <BaseImageComponent figureClassName="media" image={img} imgClassName="note-img" alt={title} />
      <h1 className="title">
        <em className="blue-text">{blueTitle}</em>
        <BaseLinkComponent href={note} title={title} text={title} />
      </h1>
      <p className="subhead">{subhead}</p>
      <p className="author">
        <strong>{author}</strong>
      </p>
    </>
  );
}

ArticleItem.propTypes = {
  blueTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  note: PropTypes.string,
};
