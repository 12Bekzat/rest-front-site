import React from 'react';
import { Banner, Choice, Comfort, Product, Transperent } from '../images';
import ProductsItem from '../components/productsItem/ProductsItem';
import Slider from '../components/slider/Slider';

const Home = () => {
    return (
        <div className='main'>
            <div className="banner">
                <div className="banner__img">
                    <img src={Banner} alt="" />
                </div>
                <div className="banner__content">
                    <div className="banner__title">Добро пожаловать в ReSmart</div>
                    <div className="banner__text">
                        Ваше умное решение для заказа продуктов для ресторанов! Оптимизируйте свои закупки и управляйте своим бизнесом с легкостью.
                    </div>
                </div>
            </div>
            <div className="main__row">
                <div className="comfort">
                    <div className="comfort__item">
                        <div className="comfort__icon">
                            <img src={Comfort} alt="" />
                        </div>
                        <div className="comfort__title">Удобство заказов</div>
                        <div className="comfort__text">ReSmart предоставляет простую и эффективную платформу для быстрых закупок.</div>
                    </div>
                    <div className="comfort__item">
                        <div className="comfort__icon">
                            <img src={Transperent} alt="" />
                        </div>
                        <div className="comfort__title">Прозрачность и надежность</div>
                        <div className="comfort__text">Информация о качестве, доставке и отзывы для уверенности в выборе.</div>
                    </div>
                    <div className="comfort__item">
                        <div className="comfort__icon">
                            <img src={Choice} alt="" />
                        </div>
                        <div className="comfort__title">Широкий выбор продуктов</div>
                        <div className="comfort__text">Разнообразие поставщиков и товаров для оптимального выбора.</div>
                    </div>
                </div>

                <div className="title">Скидки и акции</div>
                <div className="products">
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
                <div className="title">Категории</div>
                <Slider />
            </div>
        </div>
    );
};

export default Home;