import Logo from "@/components/Logo/Logo";

// Navigation Likes
const navigationItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Services',
        href: '/services',
    },
    {
        label: 'Contact',
        href: '/contact',
    }
]

const Header = () => {
    return (
        <nav>
            <Logo />
        </nav>
    );
};

export default Header;