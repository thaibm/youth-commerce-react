import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './productActions';
import { getAllProducts } from '../../api/modules/product';

const mapProducts = (pro) => {
  const imageSrc =
    pro.images.length && pro.images[0]?.src
      ? pro.images[0]?.src
      : require('../../images/img1.jpg');
  const quickViewImageSrc =
    pro.images.length && pro.images[1] && pro.images[1].src
      ? pro.images[1].src
      : require('../../images/quick-view-img.jpg');
  return {
    id: pro.id,
    title: pro.name,
    price: Number(pro.price),
    priceHtml: pro.price_html,
    imageSrc,
    imageHoverSrc: imageSrc,
    quickViewImageSrc,
    description: pro.description,
    shortDescription: pro.short_description,
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
