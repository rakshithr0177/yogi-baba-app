import { Link } from "react-router-dom"


const PaymentSuccess = () => {
    return (
        <section className="paymentSuccess">
            <main>
                <h1>Order Confirmed</h1>
                <p>Order Placed Successfully, You can check order status bellow</p>
                <Link to='/myorders'>Check Status</Link>
            </main>
        </section>
    )
}

export default PaymentSuccess