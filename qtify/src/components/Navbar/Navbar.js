import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <SearchBar/>
            <Button>Feedback Button</Button>
        </div>
    )
}

export default Navbar;