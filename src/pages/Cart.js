import React from 'react';
import ProductsItem from '../components/productsItem/ProductsItem';
import { Product } from '../images';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='main'>
            <div className="main__row">
                <div className="title" style={{ marginTop: 30 }}>Корзина</div>
                <div className="cart">
                    <div className="cart__products">
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']} />
                    </div>
                    <div className="cart__form">
                        <div className="cart__line">
                            <div className="cart__title">Общая сумма</div>
                            <div className="cart__text">5 000 тг</div>
                        </div>
                        <div className="cart__line">
                            <div className="cart__title">Скидка</div>
                            <div className="cart__text">-10%</div>
                        </div>
                        <div className="cart__line">
                            <div className="cart__title">Итоговая сумма</div>
                            <div className="cart__text">4500 тг</div>
                        </div>
                        <Link className="cart__button" to={"/payment"}>Заказать</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;