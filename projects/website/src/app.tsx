import { Outlet } from 'react-router';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
    <div className='app'>
        <Header />
        <main className='main'>
            <Outlet />
        </main>
        <Footer />
    </div>
)

export default App
