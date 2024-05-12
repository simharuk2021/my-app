import Link from "next/link";
import Books from './components/Books';

const HomePage = () => {
  return (
    <div>
      {/* <h1>Home Page</h1>
      <button className="btn btn-primary">Button</button>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/contact">Contact Page</Link></li>
      </ul> */}
      <Books/>
    </div>
  )
};

export default HomePage;