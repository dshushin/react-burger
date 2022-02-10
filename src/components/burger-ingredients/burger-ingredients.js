import React from 'react';
import style from './burger-ingredients.module.css';
import BurgerIngredientsTab from './burger-ingredients-tab';
import {INGREDIENTS} from '../../ustils/data';
import BurgerIngredientsItem from './burger-ingredients-item';


const INGREDIENTS_TYPES = [
  {key: 'bun', title: 'Булки'},
  {key: 'main', title: 'Начинки'},
  {key: 'sauce', title: 'Соусы'},
]


const aggregateIngredients = (ingredients) => {
  const results = {};
  ingredients.forEach((ingredient) => {
    if (!results[ingredient.type]) {
      results[ingredient.type] = []
    }
    results[ingredient.type].push(ingredient)
  })
  return results;
}

// console.log(aggregateIngredients(INGREDIENTS))

const BurgerIngredients = () => {

  const ingredientsByType = aggregateIngredients(INGREDIENTS)


    return (
    <div className={style.ingredients_container}>
      <h2>Соберите бургер</h2>
      <BurgerIngredientsTab/>

      <div className={style.scroll}>
        {INGREDIENTS_TYPES.map((type) => <div>
          {type.title}
          <div className={style.columns_puns}>{ingredientsByType[type.key].map((ingredient) => <BurgerIngredientsItem
            ingredient={ingredient}/>)}
          </div>
        </div>)}
      </div>
    </div>
  );
}


export default BurgerIngredients;