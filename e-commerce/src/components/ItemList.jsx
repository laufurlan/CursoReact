import Item from "./Item";

const ItemList = ( { products } ) => {
  return (
    <div className="item-list">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {products.map(product => {  
        return <Item key={product.id} product={product} />
      })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
