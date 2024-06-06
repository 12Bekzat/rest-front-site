import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import ProductsItem from '../components/productsItem/ProductsItem';
import { Product } from '../images';
import useMainService from '../services/MainService';

const Products = () => {
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { getMyUser, getMyProducts } = useMainService();
    const [products, setProducts] = useState([])

    const handleProducts = () => {
        getMyUser()
            .then(data => {
                getMyProducts(data.id)
                    .then(pds => {
                        setProducts(pds)
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleProducts();
    }, [])

    return (
        <div className='main'>
            <div className="main__row">
                <div className="title" style={{ marginTop: 40 }}>Товары</div>
                <div className="table">
                    <div className="table__filter">
                        <div className="table__row"></div>
                        <div className="table__row">
                            <div className="table__search">
                                <input autoComplete='off' type="text" id='search' placeholder='Поиск по имени' />
                                <label htmlFor="search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="table__products products">
                        {products.filter(item => item.deleted !== true).map((item, index) => (
                            <ProductsItem
                                key={item.id}
                                update={handleProducts}
                                id={item.id}
                                img={item.imageUrl}
                                name={item.name}
                                price={item.discount ? item.price - ((item.price * item.discount) / 100) :
                                    item.price
                                }
                                oldPrice={item.discount ? item.price : null}
                                tags={item.discount ? ['-' + item.discount + '%'] : []}
                                admin={true}
                                count={item.count}
                                date={item.expiredDate} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;