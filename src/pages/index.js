import CartUpdate from '../components/CartUpdate'

const MainPage = ({products, cart}) => {
  return (
    <div>
      <p>Index page</p>
      <h2>Cart total is: {cart.total}</h2>
      <ul style={{ listStyleType: 'none', padding: '0px' }}>
        {
          Object.keys(products).map(key =>
            <li key={key}>
              <h2>{products[key].name}</h2>
              <p>{products[key].description}</p>
              <img src={products[key].imageUrl} alt={products[key].name} />
              <strong>{products[key].price}</strong>
            <CartUpdate />
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default MainPage;
