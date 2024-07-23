import Link from 'next/link';

const Header = () => (
  <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">Medbank</div>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/sample-shipping">Sample Shipping</Link>
        </li>
        <li>
          <Link href="/strength">Strength</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <div>
      <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
    </div>
  </header>
);

export default Header;

