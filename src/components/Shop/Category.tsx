import React from 'react'
import classes from './Shop.module.css'
import all from '../../pictures/catalog/All.svg'
import another from '../../pictures/catalog/another.svg'
import cars from '../../pictures/catalog/cars.svg'
import clothes from '../../pictures/catalog/clothes.svg'
import comp from '../../pictures/catalog/comp.svg'
import forHouse from '../../pictures/catalog/forHouse.svg'
import furniture from '../../pictures/catalog/furniture.svg'
import pets from '../../pictures/catalog/pets.svg'
import toys from '../../pictures/catalog/toys.svg'

type propsType = {
    category: string
    setCategory: (category: string) => void
}

const Category: React.FC<propsType> = ({category, setCategory}) => {
  return (
        <div>
            <h1 className={classes.header} >{category}</h1>
            <div className={classes.line} ></div>
            <ul className={classes.cardList}>
                <li onClick={() => {setCategory('Все товары')}} className={classes.card}>
                    Все товары
                    <img alt='all' src={all} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Одежда')}} className={classes.card}>
                    Одежда
                    <img alt='clothes' src={clothes} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Бытовая техника')}} className={classes.card}>
                    <p className={classes.cardText}>Бытовая техника</p>
                    <img alt='furniture' src={furniture} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Транспорт')}} className={classes.card}>
                    Транспорт
                    <img alt='cars' src={cars} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Игрушки')}} className={classes.card}>
                    Игрушки
                    <img alt='toys' src={toys} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Для животных')}} className={classes.card}>
                    Для животных
                    <img alt='pets' src={pets} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Электроника')}} className={classes.card}>
                    Электроника
                    <img alt='comp' src={comp} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('Для дома')}} className={classes.card}>
                    Для дома
                    <img alt='forHouse' src={forHouse} className={classes.cardImg}></img>
                </li>
                <li onClick={() => {setCategory('другое')}} className={classes.card}>
                    другое
                    <img alt='another' src={another} className={classes.cardImg}></img>
                </li>
            </ul>
        </div>
    )
}

export default Category
