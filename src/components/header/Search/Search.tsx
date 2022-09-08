import s from './Search.module.scss'
import {ChangeEvent, FC, useCallback, useRef, useState} from "react";
import debounce from "lodash.debounce";
import {useDispatch} from "react-redux";
import {setSearch} from '../../../redux/slices/filterSlice';

export const Search: FC = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickClear = () => {
        dispatch(setSearch(''))
        setInput('')
        inputRef.current?.focus()
    }

    const debounceValue = useCallback(
        debounce((str) => {
            dispatch(setSearch(str))
        }, 350), []
    )

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        debounceValue(event.target.value)
        setInput(event.target.value)
    }

    return (
        <div className={s.root}>
            <input
                ref={inputRef}
                onChange={onChangeInput}
                value={input}
                className={s.input} type="text" placeholder="Search..."/>
            {input && <div onClick={onClickClear} className={s.svg}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 252 252">
                    <g>
                        <path d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
		c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"/>
                        <path d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
		c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
		c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
		s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
		C168.127,96.601,168.127,90.902,164.612,87.388z"/>
                    </g>
                </svg>
            </div>}
        </div>
    )
}