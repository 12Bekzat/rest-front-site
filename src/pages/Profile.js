import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [desc, setDesc] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <div className='main'>
            <div className="main__row">
                <div className="profile">
                    <div className="profile__img">
                        <img src="https://restolife.kz/upload/information_system_6/1/9/5/item_1952/information_items_1952.png" alt="" />
                    </div>
                    <div className="profile__title">Апель Агро</div>
                </div>
                <div className="contacts">
                    <div className="contacts__item">
                        <div className="contacts__title">Контактное лицо</div>
                        <div className="contacts__text">Бекзат, Админстратор</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Контактный телефон</div>
                        <div className="contacts__text active">+7 (777)777 77 77</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Почта для связей</div>
                        <div className="contacts__text active">apelagro@gmail.com</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Рабочие часы</div>
                        <div className="contacts__text active">08:00-22:00</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Рабочий адрес</div>
                        <div className="contacts__text">г. Алматы, Жандосова 33/1</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Действие</div>
                        <Link to={'/my/edit'} className="contacts__text active">Изменить</Link>
                    </div>
                </div>

                <div className="desc">
                    {desc ? <div className="desc__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad inventore magnam. Voluptas voluptatum ullam in expedita, voluptatibus beatae id excepturi reiciendis quasi dolorem et. Nihil impedit facilis perspiciatis ipsam earum accusamus nobis cumque, perferendis dignissimos. Quis ex nostrum cum sapiente mollitia accusamus eligendi nihil fugiat id alias! Incidunt laborum quod numquam! Blanditiis, ut nisi voluptatum iure, inventore magni molestiae voluptates delectus rerum corporis aspernatur autem beatae, eos quia. At doloremque cum enim, vitae reiciendis nobis. Dignissimos debitis nesciunt laudantium?</div>
                        : <div className={"desc__input" + (open ? ' open' : '')} onClick={() => setOpen(true)}>
                            <textarea placeholder='Введите описание'></textarea>
                            <button>Сохранить</button>
                            <div className="desc__layer">
                                <span>
                                    <i className="fa-solid fa-file-pen"></i>
                                </span>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Profile;