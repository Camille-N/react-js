const EshopListItem = (props) => {

    const {product, index, current} = props
    const getListClasses = (index) => {
        const classes = "list-group-item"
            return current === (index) ? classes + " active" : classes
    }

    return (
        <li className={getListClasses(index)} >
            <span className="font-weight-bold">{product.productName}</span>
            <span>({product.productCategory})</span>
        </li>
    )
}

export default EshopListItem;