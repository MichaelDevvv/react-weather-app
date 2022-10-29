import React from 'react'
import styles from './Header.module.scss'

const Header = ({ title, setWeather }) => {
  return (
    <div className={styles.wrapper}>
      <i 
        className='bx bx-left-arrow-alt'
        onClick={() => setWeather('')}
      ></i>
      {title}
    </div>
  )
}
export default Header