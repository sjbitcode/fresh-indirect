const MainPage = ({storeName, products}) => (
    <div>
      <p>Index page</p>
      {storeName}
      <ul>
        {
          Object.keys(products).map(key => {
            <li key={key}>
              <p>Hi</p>
              {/* <h2>{products[key].name}</h2>
              <p>{products[key].description}</p>
              <strong>{products[key].price}</strong> */}
            </li>
          })
        }
      </ul>
    </div>
)

export default MainPage;
