import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h1>Página no encontrada</h1>
      <p>Probá de nuevo!</p>
    </div>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any),
};

NotFoundPage.defaultProps = {
  staticContext: {},
};

export default {
  component: NotFoundPage,
};
