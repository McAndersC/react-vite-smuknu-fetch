
import styles from "./memberForm.module.css"
import { Link } from "react-router-dom";

const MemberResponse = ({subscriber}) => {

    return (
        <div className={styles.response}>
            <h2>Tak!</h2>
            <p className={styles.name}>{subscriber.name}</p>
            <p>Vi er enormt glade for at få dig som medlem.</p>
            <img src={`/members/gift.jpg`} alt="Velkomst gave" width={`50%`}/>
            <p>Kig I din inbox vi har sendt en lille velkomst gave.</p>
            <Link to="/">Til Forsiden</Link>
        </div>
    )

};



const MemberForm = () => {
    
   
    return (
        <div>
               
            <form className={styles.form} >

                <label>
                    Name:
                    <input placeholder="Indtast Navn" name={"name"} />
                </label>

                <label>
                    Email:
                    <input placeholder="Indtast Email" name={"email"} />
                </label>

                <label>
                    Ris og/eller ros:
                    <textarea placeholder="Indtast Ris og/eller ros" name={"message"}/>
                </label>

                <button type="submit">Opret</button>

            </form>
            
        </div>
    );
};
export default MemberForm;