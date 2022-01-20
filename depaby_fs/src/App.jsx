import { Route, Switch } from 'react-router';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

// pages
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import ProductsCategoryModel from './components/pages/products-category-model/products-category-model' 
import ProductsCategory from './components/pages/products-category/products-category';
import Products from './components/pages/products/products';
import Prices from './components/pages/prices/prices';
import Catalogs from './components/pages/catalogs/catalogs';
import Certificates from './components/pages/certificates/certificates';
import Contacts from './components/pages/contacts/contacts';
import Basket from './components/pages/basket/basket';

const pages = [
    {
        href: '/about',
        caption: 'О нас',
        component: About,
        onMenu: true,
    },
    {
        href: '/products/:category/:model',
        caption: 'Продукты',
        component: ProductsCategoryModel,
        onMenu: false,
    },
    {
        href: '/products/:category',
        caption: 'Продукты',
        component: ProductsCategory,
        onMenu: false,
    },
    {
        href: '/products',
        caption: 'Продукты',
        component: Products,
        onMenu: true,
    },
    {
        href: '/prices',
        caption: 'Прайсы',
        component: Prices,
        onMenu: true,
    },
    {
        href: '/catalogs',
        caption: 'Каталоги',
        component: Catalogs,
        onMenu: true,
    },
    {
        href: '/certificates',
        caption: 'Сертификаты',
        component: Certificates,
        onMenu: true,
    },
    {
        href: '/contacts',
        caption: 'Контакты',
        component: Contacts,
        onMenu: true,
    },
    {
        href: '/basket',
        caption: 'Корзина',
        component: Basket,
        onMenu: true,
    },
];

function App() {
    return (
        <div className='gpi_wrapper'>
            <div className='gpi_content'>
                <Nav pages={pages} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {
                        pages.map(function (value, index) {
                            return (
                                <Route
                                    key={index}
                                    path={value.href}
                                    component={value.component}
                                />
                            );
                        })
                    }
                </Switch>
            </div>
            <div className='gpi_footer'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
