import React, {useState, useEffect} from 'react'
import { useForm, useWatch } from 'react-hook-form'
import './search.css'

const Search = () => {

    const { register, unregister, handleSubmit, getValues, watch, reset, formState: {errors} } = useForm();
    const [coords, setCoords] = useState({
        latitude: null,
        longitude: null
    });
    const [geoDisabled, setGeoDisabled] = useState(true);
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    const changeIsCurrentLocation = (event) => {

        if (!navigator.geolocation) {
            console.log("it is not allowed");
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
            const isChecked = event.target.checked;
            document.getElementById("locationName").disabled = isChecked;

            if (isChecked) {
                reset({locationName: ""});
            }
        }, (error) => {
            console.log("unable to set", error);
            reset({isCurrentLocation: false});
        });   

    }

    const changeIsRandomCategory = (event) => {
        const isChecked = event.target.checked;
        document.getElementById("foodCategory").disabled = isChecked;
        if (isChecked) {
            reset({foodCategory: ""});
        }
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <div className='wte__search'>
                <div className='wte__search-container'>
                    <div className='wte__search-content'>
                        <h4>Location</h4>
                        <div className='wte__search-textblock'>
                            <div className='wte__search-textbox'>
                                <input type="text" id="locationName" name="locationName" placeholder=" " autocomplete="off" aria-labelledby="locationNamePlaceholder"
                                    {...register("locationName", {
                                        validate: {
                                            required: value => {
                                                if (!value && !getValues("isCurrentLocation")) {
                                                    return "Please enter location name or select your current location.";
                                                }
                                            },
                                        },
                                    })}
                                />
                                <label className="wte__search-textbox-placeholder" for="locationName" id="locationNamePlaceholder">
                                    <div className="wte__search-textbox-str">Name of location</div>
                                </label>
                            </div>
                            {errors.locationName && <p className='wte__search-errormsg'>{errors.locationName.message}</p>}               
                        </div>
                        <label className='wte__search-checkbox'>Choose your current location
                            <input type="checkbox" 
                                name="isCurrentLocation"
                                {...register("isCurrentLocation", {
                                    onChange: (e) => {changeIsCurrentLocation(e)}
                                }
                                )}
                            />
                            <span className='wte__search-checkmark'></span>
                        </label>
                        <div className='wte__search-textbox wte__search-numberbox'>
                            <label for="searchRadius">Search radius:</label>
                            <input type="number" id="searchRadius"
                                {...register("searchRadius", {required: "Please enter search radius."})}
                            />
                            <span>km</span>
                            {errors.searchRadius && <p className='wte__search-errormsg-radius'>{errors.searchRadius.message}</p>}
                        </div>
                    </div>
                    <div className='wte__search-content'>
                        <h4>Food category</h4>
                        <div className='wte__search-textblock'>
                            <div className='wte__search-textbox'>
                                <input type="text" id="foodCategory" name="foodCategory" placeholder=" " autocomplete="off" aria-labelledby='foodCategoryPlaceholdere'
                                    {...register("foodCategory", {
                                        validate: {
                                            required: value => {
                                                if(!value && !getValues("isRandomCategory")) return "Please enter food category or choose to randomize the category.";
                                            },
                                        },
                                    })}
                                />
                                <label className="wte__search-textbox-placeholder" for="foodCategory" id="foodCategoryPlaceholder">
                                    <div className='wte__search-textbox-str'>Food category you'd like</div>
                                </label>
                            </div>
                            {errors.foodCategory && <p className='wte__search-errormsg'>{errors.foodCategory.message}</p>}
                        </div>
                        <label className='wte__search-checkbox'>Randomize the food category
                            <input type="checkbox" 
                                {...register("isRandomCategory", {
                                    onChange: (e) => {changeIsRandomCategory(e)}
                                })}
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
        </>
    );
}

export default Search