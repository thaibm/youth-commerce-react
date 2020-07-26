import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './productActions';
import {
  getAllProducts,
} from '../../api/modules/woo-commerce';

const mapProducts = (pro) => {
  return {
    id: pro.id,
    title: pro.name,
    price: pro.price,
    priceHtml: pro.price_html,
    image: pro.images[0].src,
    imageHover: pro.images[0].src,
    quickView: pro.images[1].src,
  };
};

export const fetchProducts = (params) => {
  return async (dispatch) => {
    dispatch(fetchProductsPending());
    try {
      const response = await getAllProducts(params);
      const products = response.data.map(mapProducts);
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsError(error));
    }
  };
};
