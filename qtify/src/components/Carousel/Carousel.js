import styles from './Carousel.module.css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import { useEffect } from 'react';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);
    return <></>
}

const Carousel = ({ data, renderComponent }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper
            style={{padding: '0px 20px'}}
            initialSlide={0}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={40}
            allowTouchMove
            >
                <Controls/>
                <CarouselLeftNavigation/>
                <CarouselRightNavigation/>
                {data.map(ele => <SwiperSlide>{renderComponent(ele)}</SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Carousel;