import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Banner, Choice, Comfort, Product, Transperent } from '../images';
import ProductsItem from '../components/productsItem/ProductsItem';
import Slider from '../components/slider/Slider';
import useMainService from '../services/MainService';

const Home = () => {
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { getProducts, getCategories } = useMainService();
    const [products, setProducts] = useState([]);

    const handleProducts = () => {
        getProducts()
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleProducts();
    }, [])

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
                    {products
                        .filter(item => item.deleted !== true)
                        .map(item => <ProductsItem
                            key={item.id}
                            id={item.id}
                            img={item.imageUrl}
                            name={item.name}
                            price={item.discount ? item.price - ((item.price * item.discount) / 100) :
                                item.price
                            }
                            oldPrice={item.discount ? item.price : null}
                            tags={item.discount ? ['-' + item.discount + '%'] : []}
                            count={item.count}
                            date={item.expiredDate} />)}
                </div>
                <div className="line">
                    <div className="title">Категории</div>
                    {role.filter(item => item.name === "ROLE_ADMIN").length > 0 ?
                        <Link to={'/category/create'} className={'link'}>Создать</Link> : null}
                </div>
                <Slider/>
            </div>
        </div>
    );
};

export default Home;