import styles from './Logo.module.css'
import React from 'react'

const Logo = () => {
    
    return (
        <svg className={styles.logo} viewBox="0 0 160 160">
            <defs>
                <clipPath id="circle1">{/*Definição da área na qual a logo existirá para o efeito passar por trás*/}
                    <circle cx="80" cy="80" r="100"/>
                </clipPath>
            </defs>
            <image className={styles.image} href={"/images/anti_covid.png"}  clipPath="url(#circle1)"/>

            <g transform="matrix(0.866, -0.5, 0.25, 0.433, 85, 85)">{/*Definição da trajetória e formato do objeto que orbita a logo*/}
                <path d="M 0,75 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,75Z" fill="#fff">
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite"/>
                </path>
            </g>

            <defs>
                <clipPath id="circle2">{/*Definição da área na qual a logo existirá para o efeito passar por trás*/}
                    <path d="M 80, 0 A 70, 70 0 0, 0 -80,0Z" transform="matrix(0.866, -0.5, 0.25, 0.433, 80, 60)"/>
                </clipPath>
            </defs>
            <image className={styles.image} href={"/images/anti_covid.png"}  clipPath="url(#circle2)"/>

        </svg>
    )
  }
  
export default Logo