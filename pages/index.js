import About from './about'
import Link from 'next/link'

const Index = () => (
    <div>
        <p>Next.js</p>
        <Link href="/about" title="Home">Home</Link>
    </div>
)
export default Index