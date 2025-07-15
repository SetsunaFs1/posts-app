import { Outlet } from 'react-router-dom';
import Footer from '../../widgets/LayoutFooter/Footer';
import Header from '../../widgets/LayoutHeader/Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
