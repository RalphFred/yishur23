import { Swiper, SwiperSlide } from 'swiper/react';
import Left from './components/Left';
import Right from './components/Right';

import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import video from './assets/video.gif'

import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import icon5 from './assets/icon5.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';


// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div id="app">

      <h1 className='text-white text-6xl font-bold mb-8'>#yishur23❤</h1>

      <img src={icon1} alt="image" className='absolute top-[3rem] left-[5rem] w-24 rotate-[35deg] opacity-50 hidden lg:block'/>

      <img src={icon2} alt="image" className='absolute bottom-[8rem] right-[12rem] w-24 rotate-[35deg] opacity-50 hidden lg:block'/>

      <img src={icon3} alt="image" className='absolute top-[8rem] right-[24rem] w-24 rotate-[45deg] opacity-50 hidden lg:block'/>

      <img src={icon4} alt="image" className='absolute top-[16rem] left-[24rem] w-24  opacity-50 hidden lg:block'/>

      <img src={icon5} alt="image" className='absolute bottom-[8rem] left-[12rem] w-24 opacity-50 hidden lg:block'/>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        className="mySwiper relative"
        pagination={{
          dynamicBullets: true,
        }}
      >

        <SwiperSlide><img src={img8} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img1} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={img7} alt="image" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={video} alt="image" className='w-full h-full'/></SwiperSlide>
        
        <Left />
        <Right />
      </Swiper>
    </div>
  );
}
