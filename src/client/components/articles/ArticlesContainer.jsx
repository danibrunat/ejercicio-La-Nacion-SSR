import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/articles/_left_Articles.scss';
import '../../sass/articles/_right_Articles.scss';

// Save input value
const ArticlesContainer = ({ expandedFocal, articles, size }) => {
  return (
    <section>
      <div className="articles-container">
        <div
          className={`${
            // eslint-disable-next-line no-nested-ternary
            expandedFocal === 1 ? 'left-focal' : expandedFocal === 2 ? 'right-focal' : ''
          }`}
        >
          {expandedFocal !== '' &&
            articles.slice(0, size).map((item, i) => (
              <article key={i.toString()} className="article" aria-setsize={size}>
                {item}
              </article>
            ))}
        </div>
        {expandedFocal !== null && <aside className="sidebar" />}
      </div>
    </section>
  );
};

ArticlesContainer.propTypes = {
  expandedFocal: PropTypes.number,
  size: PropTypes.number,
  articles: PropTypes.arrayOf(PropTypes.any).isRequired,
};

ArticlesContainer.defaultProps = {
  expandedFocal: null,
};

export default ArticlesContainer;
