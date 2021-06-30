import React from 'react';
import PropTypes from 'prop-types';

const BaseButtonComponent = ({ type, className, onClickHandler, buttonText, id }) => {
  return (
    <button type={type} className={className} onClick={onClickHandler} id={id}>
      {buttonText}
    </button>
  );
};

BaseButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BaseButtonComponent.defaultProps = {
  className: '',
  buttonText: '',
  id: '',
}

export default BaseButtonComponent;
