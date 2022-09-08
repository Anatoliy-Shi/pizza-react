import {nanoid} from "nanoid";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SelectFilterCategoryId, setCategoryId} from "../../../redux/slices/filterSlice";

export const Categories:FC = () => {
    const dispatch = useDispatch()
    const activeCategory = useSelector(SelectFilterCategoryId)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                    {categories.map((category,key) => (
                        <li
                            key={nanoid()}
                            onClick={() => dispatch(setCategoryId(key))}
                            className={activeCategory === key ? 'active' : ''}>
                            {category}
                        </li>
                        ))}
            </ul>
        </div>
    )
}