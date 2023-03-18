import styles from './button.module.css'

const Button = ({ text, icon }) => {
  return (
    <button className={styles.btn}>
        {text}
        {icon}
    </button>
  )
}

export default Button