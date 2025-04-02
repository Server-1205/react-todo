import { MoviesSection } from '../../components/MoviesSection/MoviesSection.tsx'
import { Htag } from '../../components/ui/Htag/Htag.tsx'

const MainPage = () => {
  return (
    <div className='mx-auto p-4'>
      <Htag className='mb-10' tag='h1'>
        Популярные фильмы
      </Htag>
      <MoviesSection className='mb-5' />
    </div>
  )
}

export default MainPage
