import { useSwiper } from 'swiper/react';
import styles from './CarouselLeftNavigation.module.css';
import { ReactComponent as LeftArrow } from '../../../assets/left-arrow.svg';
import { useEffect, useState } from 'react';

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", () => setIsBeginning(swiper.isBeginning));
    }, []);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}

export default CarouselLeftNavigation;