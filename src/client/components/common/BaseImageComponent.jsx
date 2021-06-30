import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BaseImageComponent = ({ figureClassName, imgClassName, image, alt }) => (
  <figure className={figureClassName}>
    <LazyLoadImage alt={alt} src={image} className={imgClassName} />
  </figure>
);

BaseImageComponent.propTypes = {
  figureClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

BaseImageComponent.defaultProps = {
  figureClassName: '',
  imgClassName: '',
  alt: '',
}

export default BaseImageComponent;
