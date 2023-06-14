import {motion} from 'framer-motion'

const Founder = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <section className="founder">
            <motion.div {...options}>
                <img src="https://i.pinimg.com/564x/f4/0e/25/f40e25243ca82916bde748b608767d26.jpg" width={200} height={200} alt="" />
                <h3>Rakshith.R</h3>
                <p>
                    Hey, Everyone I am Rakshith.R ,the founder of Yogi Baba Burger center.
                    <br />
                    Our aim is to create the most tasty burger
                </p>
            </motion.div>
        </section>
    )
}

export default Founder