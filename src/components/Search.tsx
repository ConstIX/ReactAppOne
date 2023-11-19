import React from 'react'

const Search: React.FC = () => {
   return (
      <div className="exersices__search search">
         <div className="search__header-block header-block">
            <h2 className="header-block__title header-block__title_s">Awesome Exercises <br /> You Should Know</h2>
         </div>
         <form className="search__form">
            <input type="text" className="input" placeholder='Search Exersices' />
            <button className="search__btn btn btn_s"><span>Search</span></button>
         </form>
      </div>
   )
}

export default Search