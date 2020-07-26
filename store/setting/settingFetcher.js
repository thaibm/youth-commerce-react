import { getCurrentCurrency } from '../../api/modules/woo-commerce';
import { fetchCurrencySuccess } from './settingActions';

export const fetchCurrentCurrency = () => {
  return async (dispatch) => {
    try {
      const response = await getCurrentCurrency();
      dispatch(fetchCurrencySuccess(response.data));
    } catch (error) {}
  };
};
