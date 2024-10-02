import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import MainRoutes from './Routes';
import { GlobalStyles } from './styles/styles';
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
