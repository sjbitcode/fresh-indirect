import Link from 'next/link'

const links = [
    {href: '/', text: 'Home'},
    {href: '/about', text: 'About'},
    {href: '/cart', text: 'Cart'},
];

const Navbar = ({storeName}) => (
  <div>
    <ul>
        <li><strong>{storeName}</strong></li>
        {
            links.map((item, index) => (
                <li key={index}>
                    <Link href={item.href}><a>{item.text}</a></Link>
                </li>
            ))
        }
    </ul>
    <style jsx>{`
        ul {
            list-style: none;
            padding: 0px;
        }
        li {
            display: inline;
            margin-right: 20px;
        }
    `}</style>
  </div>
)

export default Navbar
