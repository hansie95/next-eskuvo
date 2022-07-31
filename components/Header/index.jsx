import Link from "next/link"
import { useRouter } from 'next/router'
import HeaderText from "../HeaderText"
import styles from "./Header.module.css"

const Header = () =>{
    const router = useRouter()
    return (<div className={styles.main_header}>
        <Link  href="/">
          <HeaderText />
        </Link>
       

        <Link href="/menetrend">
          <a className={router.pathname == "/menetrend" ? `${styles.nav_item__active}` : `${styles.nav_item}` }>Menetrend</a>
        </Link>
        <Link href="/helyszin">
          <a className={router.pathname == "/helyszin" ? `${styles.nav_item__active}` : `${styles.nav_item}` }>Helyszín</a>
        </Link>
        <Link href="/szallas">
          <a className={router.pathname == "/szallas" ? `${styles.nav_item__active}` : `${styles.nav_item}` }>Szállás</a>
        </Link>
     
       
    
        
    </div>)
}

export default Header