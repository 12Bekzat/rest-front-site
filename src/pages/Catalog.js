import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import ProductsItem from '../components/productsItem/ProductsItem';
import { Product } from '../images';
import useMainService from '../services/MainService';

const Catalog = () => {
    const [sort, setSort] = useState(-1)
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('')
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { getCategories, getProducts, getCart, addCart, createCart, getMyUser } = useMainService();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const query = new URLSearchParams(useLocation().search);
    const categoryName = query.get('category');

    const handleCategories = () => {
        getCategories()
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }

    const handleProducts = () => {
        getProducts()
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }

    const sortProductsByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    const sortProductsByPriceDescending = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    useEffect(() => {
        if (sort == 1) {
            sortProductsByPrice()
        }
        else if (sort == 2) {
            sortProductsByPriceDescending();
        }
    }, [sort])

    useEffect(() => {
        handleCategories();
        handleProducts();
    }, [])

    useEffect(() => {
        if(categoryName) {
            setCategory(categoryName)
        }
    }, [categoryName])

    const saveToCart = () => {
        getMyUser()
            .then(myInfo => {
                getCart()
                    .then(data => {
                        let cart = localStorage.getItem('cart123');
                        if (cart) {
                            cart = JSON.parse(cart);
                            let totalPrice = 0;
                            cart.map(it => {
                                totalPrice += it.price;
                            })

                            console.log(cart);

                            const order = {
                                totalPrice, restaurant: myInfo.id,
                                orderItems: cart.map((item, ind) =>
                                ({
                                    totalPrice: item.price * 50,
                                    price: item.price,
                                    quantity: 50,
                                    product: {
                                        id: item.id,
                                        reviews: []
                                    },
                                    orderDate: '2024-03-02',
                                    deliveryDate: '2024-03-04',
                                    payWay: ind % 2 ? 5 : 6,
                                    supplier: {
                                        id: myInfo.id,
                                    }
                                })
                                )
                            }

                            addCart(order)
                                .then(data => {
                                    console.log(data);
                                })
                                .catch(err => console.log(err));
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='main'>
            <div className="main__row">
                <div className="main__path">
                    <p>Главная</p>
                    <p>/</p>
                    <p>Каталог товаров</p>
                </div>
                <div className="title" style={{ marginTop: '50px' }}>Каталог товаров</div>
                <div className="manage">
                    <div className="manage__search">
                        <input type="text" placeholder='Поиск' value={search}
                            onChange={e => setSearch(e.target.value)} />
                        <div className="manage__button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="manage__acts">
                        <div className={"manage__act" + (sort == 0 ? ' active' : '')} onClick={() => setSort(0)}>
                            Со скидкой
                        </div>
                        <div className={"manage__act norm" + (sort == 1 ? ' active' : '')} onClick={() => setSort(1)}>
                            По возрастанию
                        </div>
                        <div className={"manage__act third" + (sort == 2 ? ' active' : '')} onClick={() => setSort(2)}>
                            По убыванию
                        </div>
                    </div>
                </div>
                <div className="filter">
                    <div className="filter__menu">
                        {categories.map(item => <div key={item.id}
                            className={"filter__item" + (category == item.name ? ' active' : '')}
                            onClick={() => setCategory(category => category == item.name ? '' : item.name)}>{item.name}</div>)}
                    </div>
                    <div className="filter__products products">
                        {products
                            .filter(item => item.deleted !== true)
                            .filter(item => item.category.includes(category))
                            .filter(item => (sort == 0) ? item.discount != 0 : true)
                            .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                            .map(item => <ProductsItem
                                key={item.id}
                                id={item.id}
                                img={item.imageUrl}
                                name={item.name}
                                price={item.discount ? item.price - ((item.price * item.discount) / 100) :
                                    item.price
                                }
                                buy={true}
                                oldPrice={item.discount ? item.price : null}
                                tags={item.discount ? ['-' + item.discount + '%'] : []}
                                count={item.count}
                                date={item.expiredDate} />)}

                    </div>
                    <div className="button" onClick={saveToCart}>Сохранить в корзину</div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;