import { Route, Routes } from 'react-router-dom';

import { PATHS } from 'constants/paths';
import Layout from 'components/Layout';
import Product from 'pages/Product';
import ShoppingCart from 'pages/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Layout />}>
        <Route index path={PATHS.product} element={<Product />} />
        <Route path={PATHS.shoppingCart} element={<ShoppingCart />} />
      </Route>
      <Route path="*" element={<div>Nothing to see here!</div>} />
    </Routes>
  );
}

export default App;
