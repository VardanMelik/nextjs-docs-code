import Home from './index'
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <p>This is the about page</p>
            <Link href="./index" title="Back to Home">Back to Home</Link>
        </div>
    )
}
export default About