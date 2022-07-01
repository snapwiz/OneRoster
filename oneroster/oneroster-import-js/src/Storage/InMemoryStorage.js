export default class InMemoryStorage{
    constructor(state = {}) {
        this.state = state
    }

    findByType(typeOfEntity) {
        return this.state[typeOfEntity]
    }

    findbyTypeAndId(typeOfEntity, id) {
        return this.state[typeOfEntity][id]
    }
}