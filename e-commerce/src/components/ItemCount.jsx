import React, { useState } from "react";



function ItemCount ({ initial = 0, stock = 25, handleAdd}) {
  const [contador, setContador] = useState(initial);
  const [nuevoStock = stock - (contador + 1), updateStock] = useState(stock);
  


  const handleOp = (simbolo) => {
    if (simbolo === "+") {
      if (contador <= stock) {
        setContador(contador + 1);
        const masStock = nuevoStock - 1;
        updateStock(masStock);
      }
    } else {
      if (contador > 0) {
        setContador(contador - 1);
        const menosStock = nuevoStock + 1;
        updateStock(menosStock);
    }
    }
  };

  return (
    <div className="itemCount">
      <div className="d-flex">
        <h6>Stock: {nuevoStock}</h6>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => handleOp("-")}
        disabled={contador === 0}
      >
      -
      </button>
      <span className="count">{contador}</span>
      <button
        className="btn btn-primary"
        onClick={() => handleOp("+")}
        disabled={contador === stock}
      >
      +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleAdd(contador)} 
        disabled={contador === 0}
      >
      Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;