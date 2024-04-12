import React from 'react';  
import ProductList from './ProductList/ProductList.jsx';
import CartList from './CartList/CartLIST.JSX';
import Login from './Login/Login.jsx';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import NotFound from './NotFound/NotFound.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Layout from './Layout/Layout.jsx';
import { createBrowserRouter} from 'react-router-dom';

export const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {path: '/', element: <ProductList/>},
      {path: '/product/:productId',
      element: (
        <ProtectedRoute>
          <ProductDetails/>
        </ProtectedRoute>
      ),
    },
      { path:'/cart',
        element: (
        <ProtectedRoute>
          <CartList/>
        </ProtectedRoute>
        ),
      },
    ],
  },
  {path:'/login', element:<Login/>},
]);