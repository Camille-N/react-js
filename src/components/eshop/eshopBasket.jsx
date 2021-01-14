const EshopBasket = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h4 className="card-title">Panier</h4>
                <h6>Nombre d'articles : <span className="badge badge-secondary">{props.itemNumber}</span></h6>
                <h6>Total : <span className="badge badge-secondary">{props.totalPrice}</span></h6>                
            </div>
        </div>
    )
}

export default EshopBasket;