import styles from './Header.module.css'

import feedLogo from '../assets/logo-michellepachecoweb.png'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={feedLogo} alt='logotipo do feed'/>
        </header>
    )
}