import React, { useState } from 'react';

const CreateUser = () => {
    const [error, setError] = useState(null);

    return (
        <div className='main' style={{ justifyContent: 'center' }}>
            <div className="form">
                <div className="form__title">Создать</div>
                {error ? <div className="form__error">
                    {error}
                </div> : null}
                <div className="form__data">
                    <div className="form__input">
                        <input type="text" placeholder='Название' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактное лицо' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Контактный телефон' />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="form__input">
                        От: <input type='time' placeholder='Email' />
                        До: <input type='time' placeholder='Email' />
                    </div>
                    <div className="form__input">
                        <textarea placeholder='Введите адрес'></textarea>
                    </div>
                </div>
                <div className="form__button">Создать</div>
            </div>
        </div>
    );
};

export default CreateUser;