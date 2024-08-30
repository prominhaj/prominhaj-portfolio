import Header from '@/components/globals/Header/Header';

const ClientLayout = ({ children }) => {
    return (
        <main className=''>
            <header className='fixed top-0 left-0 right-0 z-40 border-b bg-background/60 backdrop-blur-md'>
                <Header />
            </header>
            {children}
        </main>
    );
};

export default ClientLayout;
