
const stateMappings = require("./stateMappings")

module.exports =  {
    getStateList(countryCode) {
        const stateList = stateMappings.find((mapping) => { return mapping.iso2 === countryCode })
        return stateList?.states.map((state) => {
            return {
                code: state.state_code,
                name: state.name
            }
        });
    }
}