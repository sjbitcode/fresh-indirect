import { withRouter } from 'next/router'
import ProductDetailContainer from '../containers/ProductDetailContainer'

const Product = withRouter((props) => {
  return (
    <div>
      <ProductDetailContainer productId={props.router.query.id} />
    </div>
  )
})

export default Product