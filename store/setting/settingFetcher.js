import { getCurrentCurrency, getCurrencyPosition } from '../../api/modules/setting';
import { fetchCurrencySuccess, fetchCurrencyPositionSuccess } from './settingActions';

export const fetchCurrentCurrency = () => {
  return async (dispatch) => {
    try {
      const response = await getCurrentCurrency();
      dispatch(fetchCurrencySuccess(response.data));
    } catch (error) {}
  };
};

export const fetchCurrencyPosition = () => {
  return async (dispatch) => {
    try {
      const response = await getCurrencyPosition();
      dispatch(fetchCurrencyPositionSuccess(response.data?.value));
    } catch (error) {}
  };
};
