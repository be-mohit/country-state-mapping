export interface IGetStateList {
    code: string;
    name: string;
}
export interface ICountryStatesService {
    getStateList(countryCode: string): IGetStateList[]
}