import React from 'react';
import PropTypes from 'prop-types';

const BaseLinkComponent = ({ href, title, text, className }) => {
  return (
    <a className={className} href={href} title={title}>
      {text}
    </a>
  );
};

BaseLinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

BaseLinkComponent.defaultProps = {
  title: '',
  className: '',
  text: '',
};

export default BaseLinkComponent;
