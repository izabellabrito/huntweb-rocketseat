// Precisa para o jsx funcionar
import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Pegando o conteudo do componente App e jogando na div root
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
