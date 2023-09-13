import { useSwiper } from 'swiper/react'
import right from '../assets/right.svg'

const Right = () => {
    const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className='absolute top-[45%] -right-[80%] hidden xl:block'>
        <img src={right} alt="right arrow" />
    </button>
  )
}

export default Right