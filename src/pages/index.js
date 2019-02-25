import CartUpdate from '../components/CartUpdate'
import { toCurrency } from '../helpers'
import ProductList from '../containers/ProductList'
import Test from '../containers/Test'

const MainPage = ({products, cart, addItem}) => {
  return (
    <div>
      <p>Index page</p>
      <h2>Cart total is: {toCurrency(cart.total)}</h2>
      {/* <ProductList /> */}
      <Test />
    </div>
  );
}

export default MainPage;
