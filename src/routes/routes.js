import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Services from '../pages/Services/Services';
import Login from '../pages/Login/Login';
import Contact from '~/pages/Contact/Contact';
const publidRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/services', component: Services },
    { path: '/login', component: Login, layout: null },
    { path: '/contact', component: Contact },
];

export { publidRoutes };
