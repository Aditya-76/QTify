import { useSwiper } from 'swiper/react';
import styles from './CarouselRightNavigation.module.css';
import { ReactComponent as RightArrow } from '../../../assets/right-arrow.svg';
import { useEffect, useState } from 'react';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", () => setIsEnd(swiper.isEnd));
    }, []);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}

export default CarouselRightNavigation;