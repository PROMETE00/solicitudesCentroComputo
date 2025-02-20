import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mi Proyecto</h1>
      {data ? <p>{data.message}</p> : <p>Cargando...</p>}
    </div>
  );
}

export default App;