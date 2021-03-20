import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [response, setResponse] = useState({});
  const [query, setQuery] = useState(false);
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const callAPI = async () => {
      if (query) {
        const API_KEY = 'a288c1e0234fb632313a1893f22c006c';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
        const req = await fetch(URL);
        const res = await req.json();
        setResponse(res);
        setQuery(false);

        if (response.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    callAPI();
  }, [query, city, country, response.cod]);

  let element;
  if (error) {
    element = <Error message="Oops! Something went wrong. Please try again" />;
  } else {
    element = <Weather response={response} />;
  }

  return (
    <Fragment>
      <Header title={'Weather App'} />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{element}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
