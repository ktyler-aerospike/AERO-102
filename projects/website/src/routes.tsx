import { createBrowserRouter, RouterProvider } from 'react-router';
import Home, { loader as homeLoader } from './pages/Home';
import Product, { loader as productLoader} from './pages/Product';
import Products, { loader as productsLoader} from './pages/Products';
import Shop from './pages/Shop';
import options from "../../data/options.json";
import App from './app';
import NotFound from './pages/NotFound';

const Routes = () => (
    <RouterProvider router={
        createBrowserRouter([{
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
            children: [{
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                        loader: homeLoader,
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/product/:product',
                        element: <Product />,
                        loader: ({ params: { product } }) => productLoader(product ?? ''),
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/category',
                        element: <Shop page="Category" options={options.categories} />,
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/category/:category',
                        element: <Products />,
                        loader: ({ params: { category } }) => productsLoader('category', category ?? ''),
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/subcategory',
                        element: <Shop page="Subcategory" options={options.subcategories} />,
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/subcategory/:subcategory',
                        element: <Products />,
                        loader: ({ params: { subcategory } }) => productsLoader('subcategory', subcategory ?? ''),
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/decade',
                        element: <Shop page="Decade" options={options.decade} />,
                        hydrateFallbackElement: <div/>
                    },
                    {
                        path: '/decade/:decade',
                        element: <Products />,
                        loader: ({ params: { decade } }) => productsLoader('decade', decade ?? ''),
                        hydrateFallbackElement: <div/>
                    }
                ]
            }]
        }])} />
)

export default Routes;