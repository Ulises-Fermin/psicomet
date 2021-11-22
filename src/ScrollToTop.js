import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Esto es para hacer que cuando se cambie de ruta se vaya a lo mas alto de la pagina
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);