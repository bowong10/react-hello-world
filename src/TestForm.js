import React, {Component} from "react";

class TestForm extends Component{

    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false, 
                isLactoseFree: false
            },
            subscribe: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
    handleChange(event){
        const {name, value, type, checked} = event.target;

        type === "checkbox" ?
            //name === "subscribe" ?
                this.setState({
                    // [event.target.name] : event.target.value
                    [name]: checked
                })
            // :this.setState(prevState => ({
            //     dietaryRestrictions: [
            //         {[name]: checked},
            //         ...prevState.dietaryRestrictions
            //     }
            // }))
            :this.setState({
                [name]: value
            })    
    }

    handleSubmit(){

    }

    render(){
        return (
            <div className="formStyle">
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <input 
                            type = "text" 
                            name = "firstName" 
                            value = {this.state.firstName} 
                            onChange = {this.handleChange} 
                    />
                    <br></br>
                    <input 
                            type = "text" 
                            name="lastName" 
                            value = {this.state.lastName} 
                            onChange = {this.handleChange} 
                    />
                    <br></br>
                    <input 
                            type = "text" 
                            name ="age" 
                            value = {this.state.age} 
                            onChange = {this.handleChange} 
                            placeholder = "Age"
                    />
                    <br></br>
                    <textarea value={"Some default value"} />

                    <br></br>
                    <label>
                        <input 
                            type = "checkbox" 
                            name = "subscribe"
                            checked = {this.state.subscribe}
                            onChange = {this.handleChange}
                        /> Subscribe
                    </label>
                    
                    <label>
                        <input 
                            type = "radio" 
                            name = "gender"
                            value = "male"
                            checked = {this.state.gender === "male"}
                            onChange = {this.handleChange}
                        /> Male
                    </label>

                    <label>
                        <input 
                            type = "radio" 
                            name = "gender"
                            value = "female"
                            checked = {this.state.gender === "female"}
                            onChange = {this.handleChange}
                        /> Female
                    </label>
                    <br></br>

                    <select
                        value = {this.state.destination}
                        name = "destination"
                        onChange = {this.handleChange}
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
                            checked = {this.state.dietaryRestrictions.isVegan}
                            onChange = {this.handleChange}
                        /> Vegan
                    </label>
                    <br></br>
                    <label>
                        <input 
                            type = "checkbox" 
                            name = "isKosher"
                            checked = {this.state.dietaryRestrictions.isKosher}
                            onChange = {this.handleChange}
                        /> Kosher
                    </label>
                    <br></br>
                    <label>
                        <input 
                            type = "checkbox" 
                            name = "isLactoseFree"
                            checked = {this.state.dietaryRestrictions.isLactoseFree}
                            onChange = {this.handleChange}
                        /> Female
                    </label>
                    <br></br>

                </form>
                </div>
                <div>
                    Name: {this.state.firstName} {this.state.lastName}
                    <br></br>
                    Age: {this.state.age} 
                    <br></br>
                    Gender: {this.state.gender}
                    <br></br>
                    Destination: {this.state.destination}
                </div>
            </div>
        )
    }
}
export default TestForm;