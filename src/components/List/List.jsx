import styles from './List.module.css'
import React from 'react'

const List = ({title, description, children}) => {
    
    return (
      <div className={styles.card}>
        <div>
          <h3>{title}</h3>
          {description ? (
            <p>{description}</p>
          ) : (
            <div>{children}</div>
          )}
        </div>    
      </div>
    )
  }
  
export default List