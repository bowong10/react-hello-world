import React, {Component} from "react"  

class ApiTest extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
            }
        }
    
    componentDidMount() {
    //     fetch("https://api.nasa.gov/planetary/apod?api_key=46f5kFNLVd9PTUagcR0SafScybJIizSvbIRJs4jU")
    //     .then(response => response.json())
    //     /*
    //     .then(data => console.log(data))
    //     .then(data =>{
    //         this.setState(prevState =>{
    //                 return {
    //                     character: !prevState.login
    //                 }
    //             }
    //         )
    //     })
    //     */
    //    .then(data => {
    //         this.setState({
    //             loading: false,
    //             character:data
    //         })
    //     })
        fetch("http://localhost:63226/api/Values/GetNames/1/2")
        .then(response => response.json())
        .then(data => {
                        console.log(data)
                        this.setState({
                            loading:false,
                            character:data
                        })
                    }
            )
    }

    render(){
        var val = "This value is grabbed from API!! " + JSON.stringify(this.state.character);
        
        const text = this.state.loading ? "Loading from API (You have to open the Fake API app that created in VS)..." : val;
        return(
            <div>{text}</div>
        )
    }
}

export default ApiTest