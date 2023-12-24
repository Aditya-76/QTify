import styles from './SearchBar.module.css';
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';

const SearchBar = ({searchData, placeholder}) => {
    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.searchBar} onSubmit={e => handleSearch(e)}>
            <input 
                placeholder='Search a song of your choice'
                value={searchData}
            />
            <div className={styles.iconDiv} onClick={e => handleSearch(e)}>
                <SearchIcon height="20" width="20"/>
            </div>
        </form>
    )
}

export default SearchBar;