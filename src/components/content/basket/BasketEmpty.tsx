import { FC } from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../../assets/img/empty-cart.jpg';

export const BasketEmpty: FC = () => (
    <div className="cart cart--empty">
        <h2>Корзина пустая</h2>
        <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/pizza-react" className="button button--back">
            <span>Вернуться назад</span>
        </Link>
    </div>
);