

const Button = (props) =>{  // props is an object {name: "Apple"}
    return(
       
            <button className="button">{props.name}</button>

       
    )
}

export default Button;