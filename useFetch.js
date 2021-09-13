import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, [])

  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {

    setState({ data:null, loading: true, error: null });

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: false,
            data
          })
        }else{
          console.log('Set State no se llamo');
        }
      })
      .catch( () => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info'
        })
      })
  }, [url])

  return state;
}