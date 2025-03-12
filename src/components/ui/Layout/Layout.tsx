import { FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../Header/Header';
import { Container } from '../Container/Container';
import { Loader } from '../Loader/Loader';

export const Layout: FC = () => {
    return (
        <div className='flex flex-col h-full'>
            <Header />
            <main className='py-5'>
                <Container>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </div>
    );
};
