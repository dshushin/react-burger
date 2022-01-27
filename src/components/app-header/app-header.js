import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeaderButton from './app-header-button';
import styles from './app-header.module.css';

const AppHeader = () => {
  // return (
  //   <header className={styles.header}>
  //     <nav className={styles.navbar}>
  //       <div className={styles.navbar_block}>
  //         <div className={styles.navbar_button}>
  //           <BurgerIcon type="primary" />
  //           <span className={styles.navbar_button_text}>Конструктор</span>
  //         </div>
  //         <div className={styles.navbar_button}>
  //           <ListIcon type="primary"/>
  //           <span className={styles.navbar_button_text}>Лента заказов</span>
  //         </div>
  //       </div>
  //       <Logo/>
  //       <div className={styles.navbar_button}>
  //       <ProfileIcon type="primary"/>
  //         <span className={styles.navbar_button_text}>Личный кабинет</span>
  //       </div>
  //     </nav>
  //   </header>
  // )
  return (
    <header className={`${styles.headerContainer} p-4 text text_type_main-default`}>
      <nav className={styles.navbar}>
        <div className="" style={{flex: 1, display: 'flex'}}>
          <AppHeaderButton>
            <BurgerIcon type="primary"/>
            <span className="ml-2">Конструктор</span>
          </AppHeaderButton>
          <AppHeaderButton>
            <ListIcon type="primary"/>
            <span className="ml-2">Лента заказов</span>
          </AppHeaderButton>
        </div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
          <Logo/>
        </div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
          <AppHeaderButton>
            <ProfileIcon type="primary"/>
            <span className="ml-2">Личный кабинет</span>
          </AppHeaderButton>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader;