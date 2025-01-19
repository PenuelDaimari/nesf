import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const MediaPubliityHead = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>MEDIA AND PUBLICITY HEAD</h2>
            <div className={styles.items}>
                {Team.mediaPublicityHead?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default MediaPubliityHead;