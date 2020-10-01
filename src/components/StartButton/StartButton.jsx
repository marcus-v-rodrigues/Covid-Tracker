import React from 'react'
import styles from './StartButton.module.css'

const StartButton = ({title, reference}) => { 
    return(
        <a className={styles.button} href={`#${reference}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {title}
        </a>
    )
}

export default StartButton