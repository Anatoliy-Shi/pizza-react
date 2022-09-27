import {Link} from "react-router-dom";
import notfound from "../../../assets/img/notfound.jpg"
import s from "./NotFound.module.scss"
import {FC} from "react";


export const NotFound:FC = () => {
    return (
        <div className="container">
            <div className={s.center}>
                <div>
                    <h1>Мы не нашли эту страницу</h1>
                    <p className={s.text}>Но знаем, где найти много всего вкусного</p>
                        <Link className={s.back} to='/'>На главную</Link>
                </div>
                <img className={s.img} src={notfound} alt="not-found"/>
            </div>
        </div>
    );
}
export default NotFound
