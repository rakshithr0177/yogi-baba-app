

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>
                        Shipping
                    </h1>
                    <p>
                        <b>Address</b>
                        { "some kind of Address"}
                    </p>
                </div>

                <div>
                    <h1>
                        Contact
                    </h1>
                    <p>
                        <b>Name</b>
                        {"Rakshith.R"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {732894374}
                    </p>
                </div>

                <div>
                    <h1>
                        Status
                    </h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-4-2023"}
                    </p>
                </div>

                <div>
                    <h1>
                        Payment
                    </h1>
                    <p>
                        <b>Playment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Playmet Reference</b>
                        {"gsahfdhf"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-4-2023"}
                    </p>
                </div>

                <div>
                    <h1>
                        Amount
                    </h1>
                    <p>
                        <b>Items Total</b>
                        Rs.{23431}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        Rs.{200}
                    </p>
                    <p>
                        <b>Tax</b>
                        Rs.{200}
                    </p>
                    <p>
                        <b>Total Amount</b>
                        Rs.{200+234+200}
                    </p>
                    
                </div>

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{ 232}</span> 
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Cheese Burger with French Price</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                fontWeight:800
                            }}
                        >Sub Total</h4>
                        <div
                            style={{
                                fontWeight: 800
                            }}
                        >
                            <span>Rs.{2312}</span>
                        </div>
                    </div>
                </article>
                
            </main>
        </section>
    )
}

export default OrderDetails