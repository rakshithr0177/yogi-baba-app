import app from "./app.js"
import connectDB from "./config/database.js";
import Razorpay from "razorpay";
import cors from "cors"

app.use(
    cors({
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

const port = process.env.PORT || 5000

connectDB();

export const instance = new Razorpay(
    {
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET
    }
)


app.get("/", (req, res) => {
    res.send("<h1>Working</h1>");
})

app.listen(port, () => {
    console.log(`Sever is running on port: ${port} in ${process.env.NODE_ENV} Mode`)
})