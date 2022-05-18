import React from 'react'
import './search.css'

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // input variables
            locationName: "",
            isCurrentLocation: false,
            searchRadius: 1,
            foodCategory: "",
            isRandomCategory: false,

            hasLocationError: false,
            hasCategoryError: false
        };
    }

    clickSearch(e) {
        e.preventDefault();
        
        // validation
        let isLocationEmpty = this.state.locationName === "";
        let hasLocError = !this.state.isCurrentLocation && isLocationEmpty;
        let isCategoryEmpty = this.state.foodCategory === "";
        let hasCategError = !this.state.isRandomCategory && isCategoryEmpty
        this.setState({
            hasLocationError: hasLocError,
            hasCategoryError: hasCategError
        })

        if (hasLocError || hasCategError) {
            return;
        }
        
        // TODO search action
        console.log("no error")
    }

    changeLocationName(event) {
        const inputValue = event.target.value;
        this.setState({locationName: inputValue});
    }

    changeIsCurrentLocation() {
        let isCurrentLoc = !this.state.isCurrentLocation;
        this.setState({isCurrentLocation: isCurrentLoc});

        // enable/disable locationName input
        document.getElementById("locationName").disabled = isCurrentLoc;
        if (isCurrentLoc) {
            this.setState({locationName: ""});
        }
    }

    changeSearchRadius(event) {
        const inputValue = event.target.value;
        this.setState({searchRadius: inputValue});
    }

    changeFoodCategory(event) {
        const inputValue = event.target.value;
        this.setState({foodCategory: inputValue});
    }

    changeIsRandomCategory() {
        let isRandomCateg = !this.state.isRandomCategory;
        this.setState({isRandomCategory: isRandomCateg});

        // enable/disable foodCategory input
        document.getElementById("foodCategory").disabled = isRandomCateg;
        if (isRandomCateg) {
            this.setState({foodCategory: ""});
        }
    }

    render() {
        let locationErrorText, categoryErrorText;
        if (this.state.hasLocationError) {
            locationErrorText = (
                <p className='wte__search-errormsg'>Please enter location name or select your current location.</p>
            )
        }
        if (this.state.hasCategoryError) {
            categoryErrorText = (
                <p className='wte__search-errormsg'>Please enter food category or choose to randomize the category.</p>
            )
        }
        return (
            <form onSubmit={(e) => {this.clickSearch(e)}}>
                <div className='wte__search'>
                    <div className='wte__search-container'>
                        <div className='wte__search-content'>
                            <h4>Location</h4>
                            <div className='wte__search-textblock'>
                                <div className='wte__search-textbox'>
                                    <input type="text" id="locationName" name="locationName" placeholder=" " autocomplete="off" aria-labelledby="locationNamePlaceholder"
                                        value={this.state.locationName}
                                        onChange={(event) => {this.changeLocationName(event)}}
                                    />
                                    <label className="wte__search-textbox-placeholder" for="locationName" id="locationNamePlaceholder">
                                        <div className="wte__search-textbox-str">Name of location</div>
                                    </label>
                                </div>
                                {locationErrorText}
                            </div>
                            <label className='wte__search-checkbox'>Choose your current location
                                <input type="checkbox" 
                                    checked={this.state.isCurrentLocation}
                                    onChange={() => {this.changeIsCurrentLocation()}}
                                />
                                <span className='wte__search-checkmark'></span>
                            </label>
                            <div className='wte__search-textbox wte__search-numberbox'>
                                <label for="searchRadius">Search radius:</label>
                                <input type="number" id="searchRadius" 
                                    value={this.state.searchRadius}
                                    onChange={(event) => {this.changeSearchRadius(event)}}
                                />
                                <span>km</span>
                            </div>
                        </div>
                        <div className='wte__search-content'>
                            <h4>Food category</h4>
                            <div className='wte__search-textblock'>
                                <div className='wte__search-textbox'>
                                    <input type="text" id="foodCategory" name="foodCategory" placeholder=" " autocomplete="off" aria-labelledby='foodCategoryPlaceholdere'
                                        value={this.state.foodCategory}
                                        onChange={(event) => {this.changeFoodCategory(event)}}
                                    />
                                    <label className="wte__search-textbox-placeholder" for="foodCategory" id="foodCategoryPlaceholder">
                                        <div className='wte__search-textbox-str'>Food category you'd like</div>
                                    </label>
                                </div>
                                {categoryErrorText}
                            </div>
                            <label className='wte__search-checkbox'>Randomize the food category
                                <input type="checkbox" 
                                    checked={this.state.isRandomCategory}
                                    onChange={() => {this.changeIsRandomCategory()}}
                                />
                                <span className='wte__search-checkmark'></span>
                            </label>
                        </div>
                    </div>
                    <div className='wte__search-button'>
                        <button type="submit">Search</button>
                        <p>I'm hungry...</p>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search