import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../assets/img/img.PNG";
import img2 from "../assets/img/img2.PNG";
import img3 from "../assets/img/img3.png";

export default function Home() {
    // const swiper = new Swiper(...);
    return (
        <section className='container mySlideBar'>
            <Swiper
                navigation={true}
                loop={true}         
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    )
}
