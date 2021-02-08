import React, {Component} from "react";

function FormComponent(props) {
    return (
        <div className="formStyle">
            <div>
                <form>
                <input 
                        type = "text" 
                        name = "firstName" 
                        value = {props.firstName} 
                        onChange = {props.handleChange} 
                />
                <br></br>
                <input 
                        type = "text" 
                        name="lastName" 
                        value = {props.lastName} 
                        onChange = {props.handleChange} 
                />
                <br></br>
                <input 
                        type = "text" 
                        name ="age" 
                        value = {props.age} 
                        onChange = {props.handleChange} 
                        placeholder = "Age"
                />
                <br></br>
                <textarea value={"Some default value"} onChange = {props.handleChange}/>

                <br></br>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "subscribe"
                        checked = {props.subscribe}
                        onChange = {props.handleChange}
                    /> Subscribe
                </label>
                
                <label>
                    <input 
                        type = "radio" 
                        name = "gender"
                        value = "male"
                        checked = {props.gender === "male"}
                        onChange = {props.handleChange}
                    /> Male
                </label>

                <label>
                    <input 
                        type = "radio" 
                        name = "gender"
                        value = "female"
                        checked = {props.gender === "female"}
                        onChange = {props.handleChange}
                    /> Female
                </label>
                <br></br>
                {
                    //<select multiple={true} value={['B', 'C']}>
                }
                <select
                    value = {props.destination}
                    name = "destination"
                    onChange = {props.handleChange}
                >
                    <option value="">-- Please choose a destination --</option>
                    <option value="TaiChung">TaiChung</option>
                    <option value="TaiPei">TaiPei</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea</option>
                    <option value="Singapore">Singapore</option>

                </select>
                <br></br>
                
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isVegan"
                        checked = {props.dietaryRestrictions.isVegan}
                        onChange = {props.handleChange}
                    /> Vegan
                </label>
                <br></br>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isKosher"
                        checked = {props.dietaryRestrictions.isKosher}
                        onChange = {props.handleChange}
                    /> Kosher
                </label>
                <br></br>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isLactoseFree"
                        checked = {props.dietaryRestrictions.isLactoseFree}
                        onChange = {props.handleChange}
                    /> Lactose Free
                </label>
                <br></br>

            </form>
            </div>
            <div>
                Name: {props.firstName} {props.lastName}
                <br></br>
                Age: {props.age} 
                <br></br>
                Gender: {props.gender}
                <br></br>
                Destination: {props.destination}
            </div>
        </div>
    )
}
export default FormComponent;