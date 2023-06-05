import React, { Fragment } from 'react';
import classes from './header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './headerCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food." />
            </div>
        </Fragment>
    );
}

export default Header;