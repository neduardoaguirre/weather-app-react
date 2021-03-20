import React from 'react';
const Error = ({ message }) => {
  return (
    <div className="col s12">
      <p className="red darken-4 error">{message}</p>
    </div>
  );
};
export default Error;
