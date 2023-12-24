import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';

const Navbar = ({searchData}) => {
    return (
        <nav className={styles.navbar}>
            <a href="#">
                <Logo/>
            </a>
            <SearchBar searchData={searchData} placeholder={'Search a song of your choice'}/>
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;