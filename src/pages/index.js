const MainPage = ({products}) => (
    <div>
      <p>Index page</p>
    <ul style={{listStyleType: 'none', padding: '0px'}}>
        {
          Object.keys(products).map(key => 
            <li key={key}>
              <h2>{products[key].name}</h2>
              <p>{products[key].description}</p>
              <img src={products[key].imageUrl} alt={products[key].name}/>
              <strong>{products[key].price}</strong>
            </li>
          )
        }
      </ul>
    </div>
)

export default MainPage;
