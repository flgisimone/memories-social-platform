import styles from "./SearchBar.module.scss"

const SearchBar = ({setFilterState, filterState}) => {

   const onHandleInput = (e) => {
        e.preventDefault()
        setFilterState(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div className={styles.SearchBar}>
        <i className="fa-solid fa-circle-user"></i> 
        <input type="text" value={filterState} onChange={onHandleInput} className={styles.inputFilter} placeholder="Cerca"/>
    </div>
  )
}

export default SearchBar