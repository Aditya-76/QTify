import styles from './SearchBar.module.css';
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import { useState } from 'react';

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.searchBar} onSubmit={e => handleSearch(e)}>
            <input 
                placeholder='Search a song of your choice'
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
            />
            <div className={styles.iconDiv} onClick={e => handleSearch(e)}>
                <SearchIcon height="20" width="20"/>
            </div>
        </form>
    )
}

export default SearchBar;