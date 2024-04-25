import React from 'react';  
import ProductList from './Components/ProductList/ProductList.jsx';
import CartList from './Components/CartList/CartLIST.JSX';
import Login from './Components/Login/Login.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Layout from './Components/Layout/Layout.jsx';
import { createBrowserRouter} from 'react-router-dom';

export const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {path: '/', element: <ProductList/>},
      {path: '/products/:productId',
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