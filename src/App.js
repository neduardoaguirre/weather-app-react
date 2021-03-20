import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [response, setResponse] = useState({});
  const [query, setQuery] = useState(false);
  const [error, setError] = useState(false);

  const { city, country } = search;

  return (
    <Fragment>
      <Header title={'Weather App'} />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
