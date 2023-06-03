import styles from './Card.module.css';

function Card (props) {

    return (

        <div className={styles.card}>
            <div className="container">
                <p className={styles.cardtitle}> Hola {props.nombre} </p>
                <p className={styles.cardtext}> Tu Animal favorito es: {props.animal}</p>
            </div>
        </div>

    )
}
    export default Card;