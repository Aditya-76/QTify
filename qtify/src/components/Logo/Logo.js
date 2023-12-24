import styles from './Logo.module.css';
import logo from '../../assets/qtify-logo.png';

const Logo = () => {
    return (
        <div className={styles.qtifyLogo}>
            <img src={logo} alt="QTify Logo"/>
        </div>
    )
}

export default Logo;