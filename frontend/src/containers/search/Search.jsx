import React from 'react'
import searchIcon from "../../assets/search-icon.svg"
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
                        <label className='wte__search-checkbox'>Choose your current location
                            <input type="checkbox" />
                            <span className='wte__search-checkmark'></span>
                        </label>
                        <div className='wte__search-textbox wte__search-numberbox'>
                            <label for="searchRadius">Search radius:</label>
                            <input type="number" id="searchRadius" min="0.1" max="10.0" /><span>km</span>
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
                        <label className='wte__search-checkbox'>Randomize the food category
                            <input type="checkbox" />
                            <span className='wte__search-checkmark'></span>
                        </label>
                    </div>
                </div>
                <div className='wte__search-button'>
                    <button type="submit">Search<img src={searchIcon} alt="search icon" /></button>
                    <p>I'm hungry...</p>
                </div>
            </div>
        </form>
    )
}

export default Search