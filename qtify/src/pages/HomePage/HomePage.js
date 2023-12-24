import { useOutletContext } from 'react-router-dom';
import styles from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { useEffect } from 'react';

const HomePage = () => {
    const { data } = useOutletContext();
    const { topAlbums , newAlbums , songs } = data;

    return (
        <>
            <Hero/>
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums || []} type="album"/>
                <Section title="New Albums" data={newAlbums || []} type="album"/>
                {/* <Section title="Songs" data={songs} type="song"/> */}
            </div>
        </>
    )
}

export default HomePage;