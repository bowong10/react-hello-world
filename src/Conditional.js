import React from "react";

function Conditional(props)
{
    console.log(props.isLoading);
    if (props.isLoading === true){
        return(
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div>
            {
            // cannot return nothing :|
            //<h1 style={{display:"none"}}>Temp</h1>
            }
        </div>   
    )
}
export default Conditional;