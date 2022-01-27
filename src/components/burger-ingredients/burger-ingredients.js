import React from 'react';
import style from './burger-ingredients.module.css';
import BurgerIngredientsTab from './burger-ingredients-tab';

const BurgerIngredients = () => {

  return (
    <div className={style.ingredients_container}>
      <h2>Соберите бургер</h2>
      <BurgerIngredientsTab />
    </div>
  );
}


export default BurgerIngredients;