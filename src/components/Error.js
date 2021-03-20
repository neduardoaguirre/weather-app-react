import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div className="col s12">
      <p className="red darken-4 error">{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
