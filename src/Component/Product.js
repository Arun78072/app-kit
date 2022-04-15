import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

function Product() {
    return (
        <div className="products">
            <img src="./Images/product.png" />
            <h1>Nike Air Max 270 React</h1>
            <ul className="starts">
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiOutlineStar /></li>
            </ul>
            <ul className="prices">
                <li>$299,43</li>
                <li>$534,33</li>
                <li>24% Off</li>
            </ul>
        </div>
    )
}
export default Product;