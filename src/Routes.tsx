import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:id" element={<Product />} />
    </Routes>
  );
};

export default MainRoutes;
