import { useSwiper } from 'swiper/react'
import left from '../assets/left.svg'

const Left = () => {
    const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className="absolute top-[45%] -left-[80%] hidden xl:block">
        <img src={left} alt="left arrow" />
    </button>
  )
}

export default Left