export const getCustomersSelector = (state) => state.customers.customers;
export const customersLoadingSelector = (state) => state.customers.isLoading;
export const resolveCitySelector = (cityId) => {
   return (state)=> {
    const citiesFiltered = state.cities.cities.filter(cit => cit.Id === cityId);

    if(!citiesFiltered || citiesFiltered.length === 0){
        return cityId;
    }else{
        const city = citiesFiltered[0];
        return city.Name;
    }
   }
}