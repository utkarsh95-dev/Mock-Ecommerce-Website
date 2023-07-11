import {FaSearch} from "react-icons/fa";
import "../styles/Search.css"

const SearchBar = () => {
  return (
    <div className="search-main">
        <input type="text" id="search-in" placeholder="search..."/>
        <FaSearch id="search-icon"/>

    </div>
  )
}

export default SearchBar