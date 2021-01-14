const EshopChangeButtons = (props) => {

    const { onPrevProduct, onNextProduct } = props;

    return (
        <div className="card-body">
            <button className="btn btn-secondary mx-1" onClick={onPrevProduct}>Prev</button>
            <button className="btn btn-secondary mx-1"onClick={onNextProduct}>Next</button>
        </div>
    )
}

export default EshopChangeButtons;