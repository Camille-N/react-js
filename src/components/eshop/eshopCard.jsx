const EshopCard = (props) => {

    const { product, onAddToBasket } = props

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={product.productImage} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.productCategory}</li>
                <li className="list-group-item">{product.productPrice.toFixed(2)}</li>
            </ul>
            <div className="card-body">
                <button className="btn btn-success" onClick={onAddToBasket}>Ajouter</button>
            </div>
        </div>
    )
}

export default EshopCard;