import './DefaultLayout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Defaultlayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <>{children}</>
            <Footer />
        </div>
    );
}

export default Defaultlayout;
