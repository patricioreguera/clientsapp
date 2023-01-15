import { useState, useEffect } from 'react';

export function useFetch() {
  const URL = "https://dummyjson.com/users/?limit=100";
  const [Data, setHttpData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(URL);
        const responseData = await response.json();
        const resultadoMap = responseData.users.map(user=> (
            {
                id: user.id,
                fullName: ` ${user.firstName} ${user.lastName}`,
                phone: user.phone,
                email: user.email,
                age: user.age
            }
            ))

           setHttpData(resultadoMap);
    } catch (err) {
        setError(err);
    } finally {
        setIsLoading(false);
    }
}
fetchData();
}, [URL]);


  return {  Data, isLoading, error };
}


/// como usarlo
/* 
import { useHttp } from './useHttp';

function MyComponent() {
  const { httpData, isLoading, error } = useHttpPut('https://mi-api.com/endpoint', { name: 'John' });

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>;
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      {httpData && <p>{httpData.message}</p>}
    </div>
  );
}
 */