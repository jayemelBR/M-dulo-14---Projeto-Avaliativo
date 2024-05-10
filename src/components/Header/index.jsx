import Listagemdexercicio from "../../pages/listingexerciselocal"
import Dashboard from "../../pages/Dashboard"
import listagemdelocais from "../../pages/localexerciseuserst"
import Paginalogin from "../../pages/login"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"


function Header(){
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.link}><h4>Fit Tracker</h4></Link>
            <nav className={styles.nav}>
                <Link to= "/login" className={styles.link}>Login</Link>
                <Link to="/CadastroUsuarios" className={styles.link}>Usuarios</Link>
                <Link to="/CadastroLocais" className={styles.link}>Lista</Link>
                <Link to="/listalocais" className={styles.link}>Locais</Link>
            </nav>
        </header>
    )

}

export default Header