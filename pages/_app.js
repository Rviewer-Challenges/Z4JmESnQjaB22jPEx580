import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { AppWrapper } from '../src/context/state';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <NavBar></NavBar>
            <Component {...pageProps} />
            <Footer></Footer>
        </AppWrapper>
    );
}

export default MyApp;
