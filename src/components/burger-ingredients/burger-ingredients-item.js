import React from 'react';
import style from './burger-ingredients-item.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredientsItem = ({ingredient}) => {

  return (
    <div style={{position: 'relative',}}>
      <Counter count={1} size="default"/>
      <div className={style.container}>
        <img className="pl-4 pr-4" src={ingredient.image}/>
        <div className={style.price}>
          <div className="mr-2">
            {ingredient.price}
          </div>
          <CurrencyIcon type="primary"/>
        </div>
        <div className={style.name}>
          {ingredient.name}
        </div>
      </div>
    </div>
  );
}


export default BurgerIngredientsItem;