import { Link } from "react-router-dom"
import {RiFindReplaceLine} from "react-icons/ri"

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>Yogi Baba Burger Center</h4>
                    <p>
                        We are Yogi Baba Burger Center. The place for most tasty burgers on the
                        enitre earth.
                    </p>

                    <p>
                        Explore the various type of food and burgers. Click below to see the
                        menu
                    </p>
                    <Link to='/'>
                        <RiFindReplaceLine/>
                    </Link>
                </article>
                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src="https://i.pinimg.com/564x/f4/0e/25/f40e25243ca82916bde748b608767d26.jpg" alt="founder" />
                            <h3>Rakshith.R</h3>
                        </div>
                        <p>I am Rakshith.R ,the founder of Yogi Baba Burger center. Affiliated to Great Taste...</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About