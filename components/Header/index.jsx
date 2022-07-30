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
       

        <Link href="/program">
          <a className={router.pathname == "/program" ? `${styles.nav_item__active}` : `${styles.nav_item}` }>Menetrend</a>
        </Link>
        <Link href="/location">
          <a className={router.pathname == "/location" ? `${styles.nav_item__active}` : `${styles.nav_item}` }>Helyszín</a>
        </Link>
        <Link href="/accomodation">
          <a className={router.pathname == "/accomodation" ? `${styles.nav_item__active}` : `${styles.nav_item}` }>Szállás</a>
        </Link>
     
       
    
        
    </div>)
}

export default Header