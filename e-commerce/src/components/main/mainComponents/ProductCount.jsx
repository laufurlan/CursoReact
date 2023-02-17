import { useState } from "react";


const ProductCount = ({ initial= 1, stock=10, onAdd}) => {

    const [count, setCount] = useState(initial)

    const add = ()=> {
        if (count<stock) {
            setCount(count+1)            
        }
    }
    const subtract = ()=> {
        if (count > initial) {
            setCount(count-1)            
        }
    }

    return (
        <div className="" >
            <div className="">
                <div>
                <button className="" onClick={add}> + </button>
                </div>
                <div className="">
                <center>
                <label>{count}</label>
                </center> 
                </div>
                <div className="">
                <button className="" onClick={subtract}> - </button>
                 </div>
            </div>
            <div className="">
                <button className="" onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCount
