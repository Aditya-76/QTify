import styles from './Section.module.css';
import Card from '../Card/Card'
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const Section = ({title, data, type}) => {
    const [carouselToggle, setCarouselToggle] = useState(false);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
            </div>
            {data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {data.map((ele, idx) => {
                                return <Card data={ele} type={type} key={idx}/>
                            })}
                        </div>
                    ) : (
                        //carousel
                        null
                    )}
                </div>
            )
            }
        </div>
    )
}

export default Section;