import { BrowserRouter as Router } from 'react-router-dom';

import Routers from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routers />
    </Router>
  </>
);

export default App;
