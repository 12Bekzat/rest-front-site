import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';

const EditProduct = () => {
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { id } = useParams();
    const { getProduct, editProduct, getCategories } = useMainService();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [category, setCategory] = useState('Фрукты');
    const [discount, setDiscount] = useState('');
    const [image, setImage] = useState('');

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

    useEffect(() => {
        if (id) {
            getProduct(id)
                .then(data => {
                    setName(data.name);
                    setPrice(data.price);
                    setCount(data.count);
                    setExpireDate(data.expiredDate);
                    setDiscount(data.discount);
                    setImage(data.imageUrl);
                })
                .catch(err => console.log(err));
        }
    }, [id])

    const save = () => {
        editProduct(id, { name, price, count, expiredDate: expireDate, discount, imageUrl: image, category })
            .then(() => {
                nav('/products')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Изменить продукт</div>
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
                        <input type="date" placeholder='Срок годности' value={expireDate}
                            onChange={e => setExpireDate(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="number" placeholder='Скидка %' value={discount}
                            onChange={e => setDiscount(e.target.value)} />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Картинка(url)' value={image}
                            onChange={e => setImage(e.target.value)} />
                    </div>
                </div>
                <div className="form__button" onClick={save}>Сохранить</div>
            </div>
        </div>
    );
};

export default EditProduct;