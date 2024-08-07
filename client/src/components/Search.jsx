import { useState } from "react";
import apiService from "../services/ApiServices";
import searchIcon from '../assets/search.svg'

function Search({ getFestival, setFestival }) {

 // initialise use state for search value 
  const [searchValue, setSearchValue] = useState('');
  const [inputMessage, setInputMessage] = useState(null);
  const [stateMessage, setStateMessage] = useState(null);


  // update search value based on input 
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    setInputMessage(null);
  }

  // search api based on user input and set new festival
  const searchSubmit = (e) => {
    e.preventDefault();
    if (searchValue === '') {
      setInputMessage('Please input festival name');
      setStateMessage(null)
    }
    else {
      apiService.getFestival(searchValue, setFestival, setStateMessage)
      e.target.reset();
    }
  }

  return (
    <div className="Login">
      <div className="login-container">
        <div className="festify-title-container">
         <h1 className="festify-title">festify</h1>
        </div>
        <div className="login-text-container">
          {/* <h2>step 2</h2> */}
          <h3>enter a festival name</h3>
          <div id="search-container">
            <img src={searchIcon} className='filter-grey'></img>
            <form onSubmit={searchSubmit}>
              <input type="text" value={searchValue} onChange={searchHandler} placeholder="SEARCH"></input>
            </form>
          </div>
          {stateMessage && <p>{stateMessage}</p>}
          {inputMessage && <p>{inputMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default Search
