import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante" element={<Restaurant />} />
    </Routes>
  );
};

export default MainRoutes;
