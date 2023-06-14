import { MdError } from "react-icons/md"
import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <section className="notFound">
            <main>
                <div>
                    <MdError />
                    <h1>404</h1>
                </div>
                <p>Page not found, click bellow to go to Home page.</p>
                <Link to='/'>Go to home</Link>
            </main>
        </section>
    )
}

export default NotFound