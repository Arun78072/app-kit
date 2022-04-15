import Product from "./Product";

function BestSeller() {
    return (
        <>
            <div className="container">
                <div className="best_seller">
                    <h1>Best Seller</h1>
                    <ul className="seller_menu">
                        <li className="active">All</li>
                        <li>Bags</li>
                        <li>Sneakers</li>
                        <li>Belt</li>
                        <li>Sunglasses</li>
                    </ul>
                </div>
            </div>
            <div className="AllSeller">
                <div className="product_box">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="btn">
                    <a href="/" className="load_more">Load More</a>
                </div>
            </div>
        </>
    )
}
export default BestSeller;