import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="cartItem">
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>

        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value} />
            <button onClick={increment}>+</button>
        </div>
    </div>
);

const Cart = () => {
    const increment = (item) => {
        
    }
    const decrement = (item) => {

    }
    return (
        <section className="cart">
            <main>
                <CartItem 
                    title={"Cheese burger"}
                    img={'https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png'}
                    value={0}
                    increment={()=>increment(1)}
                    decrement={()=>decrement(1)}
                />
                <CartItem
                    title={"Veg Cheese burger"}
                    img={'https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png'}
                    value={0}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem
                    title={"Cheese burger with French Fries"}
                    img={'https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png'}
                    value={0}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{2000}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{2000*0.18}</p>
                    </div>
                    <div>
                        <h4>Shiping Charges</h4>
                        <p>₹{200}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>₹{2000 + 2000 * 0.18 +200}</p>
                    </div>
                    <Link to='/shipping'>Checkout</Link>
                </article>
            </main>
        </section>
    )
}

export default Cart