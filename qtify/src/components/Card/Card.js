import { Chip, Tooltip } from '@mui/material';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({data, type}) => {
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const {likes, image, title, follows, slug, songs} = data;

                return (
                    <Tooltip title={`${songs.length} Songs`} placement='top' arrow>
                        <Link to={`album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="song" loading='lazy'/>
                                    <div className={styles.banner}>
                                        <Chip label={`${follows} Follows`} size='small' className={styles.chip}/>
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
            case "song": {
                const {likes, image, title} = data;

                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="song" loading='lazy'/>
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default: <></>
        }
    }
    return getCard(type);
}

export default Card;