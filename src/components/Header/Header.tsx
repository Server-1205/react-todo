import { NavLink } from 'react-router';
import Logo from '../../assets/react.svg';
import { useTheme } from '../ThemeProvider/useTheme';
import { Button } from '../ui/Button/Button';
import { Container } from '../ui/Container/Container';
import './Header.css';

export const Header: React.FC = () => {
    const { toggleTheme } = useTheme();
    return (
        <header className='text-white shadow-md p-4'>
            <Container>
                <div className='mx-auto flex justify-between items-center'>
                    <div className='text-2xl font-bold'>
                        <NavLink to='/'>
                            <img src={Logo} alt='Logo' />
                        </NavLink>
                    </div>
                    <nav className='flex flex-wrap gap-5'>
                        <NavLink
                            to='/'
                            className='transition duration-200 text-xs font-bold py-2 px-4 uppercase hover:bg-blue-500 border rounded-full'>
                            Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='transition duration-200 text-xs font-bold py-2 px-4 uppercase hover:bg-blue-500 border rounded-full'>
                            About
                        </NavLink>
                    </nav>
                    <Button
                        variant='secondary'
                        onClick={toggleTheme}
                        type='button'>
                        togle theme
                    </Button>
                </div>
            </Container>
        </header>
    );
};
