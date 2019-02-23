import CartUpdate from '../components/CartUpdate'
import { toCurrency } from '../helpers'

const MainPage = ({products, cart, addItem}) => {
  return (
    <div>
      <p>Index page</p>
      <h2>Cart total is: {toCurrency(cart.total)}</h2>
      <ul style={{ listStyleType: 'none', padding: '0px' }}>
        {
          Object.keys(products).map(key =>
            <li key={key}>
              <h2>{products[key].name}</h2>
              <img src={products[key].imageUrl} alt={products[key].name} />
              <strong>{products[key].price}</strong>
            <CartUpdate product={products[key]} productId={key} addItem={addItem}/>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default MainPage;
