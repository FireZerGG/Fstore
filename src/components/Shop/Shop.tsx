import React, { useState } from 'react'
import classes from './Shop.module.css'
import toBuy from '../../pictures/toBuy.svg'
import back from '../../pictures/back.svg'
import Category from './Category'


const Shop = () => {

    const [category, setCategory] = useState('Категории товаров')

  return (
    <div className={classes.container}>
        {category === 'Категории товаров'
            ? <Category category={category} setCategory={setCategory}/>
            :<>
                <h1 className={classes.header}>
                    <div onClick={() => {setCategory('Категории товаров')}} className={classes.backBtn}>
                        <img src={back} alt='toBuy' className={classes.backImg1} ></img>
                        <img src={toBuy} alt='toBuy' className={classes.backImg2} ></img>
                    </div>
                    {category}
                </h1>
                <div className={classes.line} ></div>
                {}
            </>}
    </div>
  )
}

export default Shop