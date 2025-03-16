







import {Link} from "react-router-dom"
const Contact=()=>{
    return(
        <>
        <h1>hello contact us</h1>
        <Link to="/">
            <button>go to home page</button>
        </Link>

        <Link to ="/posts">
            <button>bavk to posts page</button>
        </Link>
        </>
    )
}
export default Contact;