import { MoviesSection } from '../../components/MoviesSection/MoviesSection';
import { Htag } from '../../components/ui/Htag/Htag';

const MainPage = () => {
    return (
        <div className='mx-auto p-4'>
            <Htag className='mb-10' tag='h1'>
                Популярные фильмы
            </Htag>
            <MoviesSection />
            {/* <PostsSection /> */}
        </div>
    );
};

export default MainPage;
