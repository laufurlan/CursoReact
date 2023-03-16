import { useEffect } from "react"

export const Loading = ()=> {
    useEffect(()=>{
        return () => console.log('loading')
    })
    return (
        <h2>Cargando...</h2>
    )
}
