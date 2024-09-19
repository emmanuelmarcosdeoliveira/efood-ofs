import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes';
import { GlobalStyles } from './styles/styles';
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
