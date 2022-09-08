import {Categories} from "../content/categoreis/Categories"
import {Pizza} from "../content/pizza/Pizza"
import {Sort} from "../content/sort/Sort"
import {nanoid} from "nanoid";
import {FC, useEffect} from "react";
import {Loader} from "../content/pizza/Loader";
import {useSelector} from "react-redux";
import {fetchPizzas, SelectPizzaStatusItem} from "../../redux/slices/pizzaSlice";
import {useAppDispatch} from "../../redux/store";
import {SelectFilterCategoryId, SelectFilterSearch, SelectFilterSortProp} from "../../redux/slices/filterSlice";

export const Content: FC = () => {
    const activeCategory = useSelector(SelectFilterCategoryId)
    const sort = useSelector(SelectFilterSortProp)
    const valueInput = useSelector(SelectFilterSearch)
    const {items, status} = useSelector(SelectPizzaStatusItem)
    const dispatch = useAppDispatch()

    const getPizzas = async () => {
        const order = sort.includes('-') ? 'desc' : 'asc'
        const sortBy = sort.replace('-', '')
        const category = activeCategory > 0 ? `category=${activeCategory}` : ''
        const search = valueInput  ? `&search=${valueInput}` : ''
        dispatch(
            fetchPizzas({
                order,
                sortBy,
                category,
                search
            }))
        window.scroll(0, 0)
    }

    useEffect(() => {
        getPizzas()
    }, [activeCategory, sort, valueInput])

    const pizza = items.map((item: any) => (<Pizza key={nanoid()} {...item}/>))

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {status === 'loading' ? <Loader/> : pizza}
                </div>
            </div>
        </>
    )
}

