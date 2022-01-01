import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routers = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default Routers;
