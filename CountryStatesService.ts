import { ICountryStatesService, IGetStateList } from "./ICountryStatesService";
import { stateMappings } from "./stateMappings";

export class CountryStatesService implements ICountryStatesService {
    getStateList(countryCode: string): IGetStateList[] {
        const stateList = stateMappings.find((mapping) => { return mapping.iso2 === countryCode })
        return stateList?.states.map((state) => {
            return {
                code: state.state_code,
                name: state.name
            }
        });
    }
}