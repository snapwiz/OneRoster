import _ from "lodash";

export default class RelationConfig {
    #dataConfig

    constructor(dataConfig)
    {
        this.#dataConfig = dataConfig;
    }

    getConfig(configKey)
    {
        let parts = configKey.split('.')
        let val = this.iterate(this.#dataConfig, parts)
        return val
    }

    iterate(data, parts, index = 0)
    {
        let value = data[parts[index]]

        if (!_.isEmpty(parts[index+1])) {
            if (_.isEmpty(value[parts[index+1]])){
                return null;
            }
            parts[index] = null
            index++
            return this.iterate(value, parts, index)
        }

        return value
    }

}