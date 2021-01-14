import EshopListItem from './eshopListItem';

const EshopList = (props) => {

    const { displayedProducts, current } = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <ul className="list-group"> { displayedProducts.map((product, index) => (
                <EshopListItem
                    key={product.productId}
                    index={index}
                    product={product}
                    current={current}
                />
            ))}
            </ul>
        </div>
    )
}

export default EshopList;