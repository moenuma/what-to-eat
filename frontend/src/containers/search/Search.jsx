import React from 'react'
import searchIcon from "../../assets/search-icon.svg"
import checkboxIcon from "../../assets/checkbox.svg"
import './search.css'

const Search = () => {
    // let input_element = document.querySelector("input");
    // input_element.addEventListener("keyup", () => {
    //     input_element.setAttribute("value", input_element.value);
    // })

    return (
        <form action="">
            <div className='wte__search'>
                <div className='wte__search-container'>
                    <div className='wte__search-content'>
                        <h4>Location</h4>
                        <div className='wte__search-textbox'>
                            <input type="text" id="locationName" name="locationName" placeholder=" " autocomplete="off" aria-labelledby="locationNamePlaceholder"/>
                            <label className="wte__search-textbox-placeholder" for="locationName" id="locationNamePlaceholder">
                                <div className="wte__search-textbox-str">Name of location</div>
                            </label>
                        </div>
                        <div className='wte__search-checkbox'>
                            <input type="checkbox" id="isCurrentLocation"/>
                            <img src={checkboxIcon} alt="checkbox icon" />
                            <label for="isCurrentLocation">Choose your current location</label>
                        </div>
                        <div className='wte__search-numberbox'>
                            <label for="searchRadius">Search radius:</label>
                            <input type="number" id="searchRadius"/><span>km</span>
                        </div>
                    </div>
                    <div className='wte__search-content'>
                        <h4>Food category</h4>
                        <div className='wte__search-textbox'>
                            <input type="text" id="foodCategory" name="foodCategory" placeholder=" " autocomplete="off" aria-labelledby='foodCategoryPlaceholdere'/>
                            <label className="wte__search-textbox-placeholder" for="foodCategory" id="foodCategoryPlaceholder">
                                <div className='wte__search-textbox-str'>Food category you'd like</div>
                            </label>
                        </div>
                        <div className='wte__search-checkbox'>
                            <input type="checkbox" id="randomizeCategory"/>
                            <label for="randomizeCategory">Randomize the food category</label>
                        </div>
                    </div>
                </div>
                <div className='wte__search-button'>
                    <button type="submit">Search</button>
                    <img src={searchIcon} alt="search icon" />
                    <p>I'm hungry...</p>
                </div>
            </div>
        </form>
    )
}

export default Search