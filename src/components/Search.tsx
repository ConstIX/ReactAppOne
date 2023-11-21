import React from 'react'
import { setSearch } from '../redux/slices/filterSlice'
import { useAppDispatch } from '../redux/store'

const Search: React.FC = () => {

   const dispatch = useAppDispatch()

   const [value, setValue] = React.useState<string>('')
   const updateSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      dispatch(setSearch(value))
   }

   return (
      <div className="exercises__search search">
         <div className="search__header-block header-block">
            <h2 className="header-block__title header-block__title_s">Awesome Exercises <br /> You Should Know</h2>
         </div>
         <form className="search__form">
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="input" placeholder='Search exercises' />
            <button onClick={e => updateSearch(e)} className="search__btn btn btn_s"><span>Search</span></button>
         </form>
      </div>
   )
}

export default Search