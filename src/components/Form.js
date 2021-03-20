import React, { useState } from 'react';

const Form = ({ search, setSearch, setQuery }) => {
  const [error, setError] = useState(false);
  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '' || country.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value=""> -- Select Country -- </option>
          <option value="US">USA</option>
          <option value="CA">Canada</option>
          <option value="MX">Mexico</option>
          <option value="BR">Brazil</option>
          <option value="AR">Argentina</option>
        </select>
        <label htmlFor="country">Country</label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block grey col s12"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
