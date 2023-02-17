let products = [
    { id: '1' ,category: 'remeras', title: "producto 1",   price: 37, img:'' },
    { id: '2' ,category: 'remeras', title: "producto 2", price: 27, img:'' },
    { id: '3' ,category: 'remeras', title: "producto 3",    price: 40, img:'' },
]

export const pFetch = (id) => new Promise( (res, rej)=>{
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(id ? products.find(prod => id === prod.id)  : products)    
        }, 1000)
    } else {
        rej('Algo Salio Mal ')
        
    }
})

