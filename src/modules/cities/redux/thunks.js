import {getCityById} from './selector';
import { citiesLoaded } from './actions';
import { apiClientFactory } from '../../api';
export function makeSureCitiesExist() {
    return async(dispatch, getState) => {
        const state = getState();
        const cities = getCityById(state);

        if(!cities || cities.length === 0){
            
            const cities = await apiClientFactory.getRestApiClient().get('/cities/')

            dispatch(citiesLoaded(cities.data))
        }
    }
}