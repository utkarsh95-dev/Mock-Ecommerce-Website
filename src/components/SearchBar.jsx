import {FaSearch} from "react-icons/fa";
import "../styles/Search.css"
import { MyContext } from "../MyContext";
import { useContext } from "react";



const SearchBar = () => {
  const{search,handleSearch} = useContext(MyContext);
  return (
    <div className="search-main">
        <input type="text" id="search-in" placeholder="search..."
         value={search} onChange={(e)=> handleSearch(e)} />
        <FaSearch id="search-icon"/>

    </div>
  )
}

export default SearchBar