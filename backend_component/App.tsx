import React, { useEffect, useState } from "react"
import {useRef} from "react"
import Product_list from "./Product_list";

function App(){
    const ref = useRef<HTMLInputElement>(null);
    const[category, setCategory] = useState('')

    //after-render
    useEffect(() => {
        //side-effect
        if (ref.current) ref.current.focus();
    }
    )

    useEffect(() => {
        document.title = "My App"
    })    
    
    
    return(
        <div>
            <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
                <option value=''></option>
                <option value='Clothing'> Clothing</option>
                <option value='Household'> Household</option>
            </select>
            <Product_list category={category}></Product_list>
        </div>
    )
}

export default App