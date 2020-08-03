import {
  getCurrentCurrency,
  getCurrencyPosition,
} from '../../api/modules/setting';
import {
  fetchCurrencySuccess,
  fetchCurrencyPositionSuccess,
  fetchSettingsPending,
  fetchSettingsSuccess,
  fetchSettingsError,
} from './settingActions';

export const fetchCurrentCurrency = async (dispatch) => {
  try {
    const response = await getCurrentCurrency();
    dispatch(fetchCurrencySuccess(response.data));
  } catch (error) {}
};

export const fetchCurrencyPosition = async (dispatch) => {
  try {
    const response = await getCurrencyPosition();
    dispatch(fetchCurrencyPositionSuccess(response.data?.value));
  } catch (error) {}
};

export const fetchSettings = async (dispatch) => {
  dispatch(fetchSettingsPending());
  try {
    await Promise.all([
      fetchCurrentCurrency(dispatch),
      fetchCurrencyPosition(dispatch),
    ]);
    dispatch(fetchSettingsSuccess());
  } catch (error) {
    dispatch(fetchSettingsError(error));
  }
};
