import {motion } from 'framer-motion'

const Contact = () => {
    return (
        <section className="contact">
            <motion.form
                initial={{
                    x: "100vw",
                    opacity:0,
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{delay:0.2}}
            >
                <h2>Contact Us</h2>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email' />      
                <textarea placeholder='Message' cols="30" rows="10"></textarea>
                <button type="submit">Send</button>
            </motion.form>
            <motion.div
                className='formBorder'
                initial={{
                    x: "100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    initial={{
                        y: "-100vw",
                        x:"50%",
                        opacity: 0,
                    }}
                    animate={{
                        y: "-50%",
                        x: "50%",
                        opacity: 1
                    }}
                    transition={{ delay: 1 }}
                >
                    <img src="https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png" alt="burger" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact