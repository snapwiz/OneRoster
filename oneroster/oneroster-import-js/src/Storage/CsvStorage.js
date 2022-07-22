import _ from "lodash"

export default class CsvStorage {
    #importService
    #imports = {}

    constructor(importService) {
        this.#importService = importService
    }

    async findAllEntity() {
        const allowedEntityTypes = [
            'academicSessions',
            'classes',
            'courses',
            'demographics',
            'enrollments',
            'orgs',
            'users',
            'categories',
            'classResources',
            'courseResources',
            'lineItems',
            'results',
            'resources'
        ]
          
        if(!_.isEmpty(this.#imports)) {
            return this.#imports
        }
        let pathToFolder = this.#importService.getPathToFolder()
        if(_.isEmpty(pathToFolder)) {
            const directory = this.#importService.getFileStream()
            for await (const file of directory.files) {
                const fileName = file.path.split('/')?.[1]
                if (_.isEmpty(fileName)) {
                  continue
                }
                const typeOfEntity = fileName?.split('.')?.[0]
                if (!allowedEntityTypes.includes(typeOfEntity)) {
                    continue
                  }
                const file_stream = await file.stream()
                    
                if (file_stream)
                    this.#imports[typeOfEntity] = await this.#importService.import(this.#importService.getFileStream(), typeOfEntity)
                else 
                    this.#imports[typeOfEntity] = {}
            }
        } else {
            for (const typeOfEntity of allowedEntityTypes)
                this.#imports[typeOfEntity] = await this.#importService.import(`${pathToFolder}${typeOfEntity}.csv`, typeOfEntity)
        }
        return this.#imports
    }

    async findByType(typeOfEntity) {
        if(!_.isEmpty(this.#imports[typeOfEntity])) {
            return this.#imports[typeOfEntity]
        }
        let pathToFolder = this.#importService.getPathToFolder()
        if(_.isEmpty(pathToFolder)) {
            const directory = this.#importService.getFileStream()
            let file_stream
            for await (const file of directory.files) {
                const fileName = file.path.split('/')?.[1]
                if (isEmpty(fileName)) {
                  continue
                }
                const entityType = fileName?.split('.')?.[0]
                if (entityType === typeOfEntity) {
                    file_stream = await file.stream()
                    break
                }
              }
            if (file_stream)
                this.#imports[typeOfEntity] = await this.#importService.import(this.#importService.getFileStream(), typeOfEntity)
            else 
                this.#imports[typeOfEntity] = {}
        } else {
            this.#imports[typeOfEntity] = await this.#importService.import(`${pathToFolder}${typeOfEntity}.csv`, typeOfEntity)
        }
        return this.#imports[typeOfEntity]
    }

    async findByTypeAndId(typeOfEntity, id) {
        if(!_.isEmpty(this.#imports[typeOfEntity])) {
            return this.#imports[typeOfEntity][id]
        }

        if(_.isEmpty(this.#imports[typeOfEntity])) {
            let pathToFolder = this.#importService.getPathToFolder()
            if(_.isEmpty(pathToFolder)) {
                const directory = this.#importService.getFileStream()
                let file_stream
                for await (const file of directory.files) {
                    const fileName = file.path.split('/')?.[1]
                    if (isEmpty(fileName)) {
                      continue
                    }
                    const entityType = fileName?.split('.')?.[0]
                    if (entityType === typeOfEntity) {
                        file_stream = await file.stream()
                        break
                    }
                  }
                if (file_stream)
                    this.#imports[typeOfEntity] = await this.#importService.import(this.#importService.getFileStream(), typeOfEntity)
                else 
                    this.#imports[typeOfEntity] = {}
            } else {
                this.#imports[typeOfEntity] = await this.#importService.import(`${pathToFolder}${typeOfEntity}.csv`, typeOfEntity)
            }
        }

        this.#imports[typeOfEntity].forEach(item => {
            if(item['sourcedId'] === id) {
                return item
            }
        })
    }
}