import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';

const CreateProduct = () => {
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const [categories, setCategories] = useState([]);
    const { isAuth, role } = useContext(AuthContext);
    const { getCategories, createProduct, getMyUser } = useMainService();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [expiredDate, setExpiredDate] = useState('');
    const [count, setCount] = useState('');
    const [category, setCategory] = useState('Фрукты');
    const [imageUrl, setImageUrl] = useState('');

    const handleCategories = () => {
        getCategories()
            .then(data => {
                setCategories(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleCategories();
    }, [])

    const save = () => {
        const product = {
            name, price, discount, expiredDate, count, category, imageUrl
        }

        getMyUser()
            .then(user => {
                createProduct(user.id, product)
                    .then(data => nav('/products'))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Создать продукта</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__select">
                        <p>
                            Категория:
                        </p>
                        <select onChange={e => setCategory(e.target.value)}>
                            {categories.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Название' value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Цена' min={0} value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Кол-во' min={0} value={count}
                            onChange={e => setCount(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="date" placeholder='Срок годности' value={expiredDate}
                            onChange={e => setExpiredDate(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Скидка %' value={discount}
                            onChange={e => setDiscount(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Url картинки' value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)} />
                    </div>
                </div>
                <div className="form__button" onClick={save}>Создать</div>
            </div>
        </div>
    );
};

export default CreateProduct;