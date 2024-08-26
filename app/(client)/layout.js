import Header from '@/components/globals/Header/Header';
import ThemeSwitch from '@/components/globals/ThemeSwitch/ThemeSwitch';

const ClientLayout = ({ children }) => {
    return (
        <main className=''>
            <header className='fixed top-0 left-0 right-0 z-40 border-b bg-background/60 backdrop-blur-md'>
                <nav className='container flex items-center justify-between py-2'>
                    <Header />
                    <ThemeSwitch />
                </nav>
            </header>
            {children}
        </main>
    );
};

export default ClientLayout;
