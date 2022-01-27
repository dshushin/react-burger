import styles from './app-header-button.module.css'


const AppHeaderButton = ({children}) => {
  return (
    <div className={styles.header_button}>
      {children}
    </div>
    )
}

export default AppHeaderButton
