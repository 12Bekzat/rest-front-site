import React from 'react';
import ProductsItem from '../components/productsItem/ProductsItem';
import { Product } from '../images';

const Products = () => {
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
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']}
                            admin={true}
                            count={50}
                            date={'12.09.2024'} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']}
                            admin={true}
                            count={50}
                            date={'12.09.2024'} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']}
                            admin={true}
                            count={50}
                            date={'12.09.2024'} />
                        <ProductsItem
                            img={Product}
                            name={'Овощи ассорти 1кг'}
                            price={'2 090'}
                            oldPrice={2590}
                            tags={['-10%']}
                            admin={true}
                            count={50}
                            date={'12.09.2024'} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;