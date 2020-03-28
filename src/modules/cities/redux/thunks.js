import {getCityById} from './selector';
import { citiesLoaded } from './actions';
export function makeSureCitiesExist() {
    return async(dispatch, getState) => {
        const state = getState();
        const cities = getCityById(state);

        if(!cities || cities.length === 0){
            const citiesResponse = await fetch('http://www.fulek.com/nks/api/aw/cities')
            const cities = await citiesResponse.json();

            dispatch(citiesLoaded(cities))
        }
    }
}