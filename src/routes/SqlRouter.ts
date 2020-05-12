import BaseRoute from './BaseRouter'

class SqlRouter extends BaseRoute {
    
    routes(): void {
        throw new Error("Method not implemented.");
    }
}

export default new SqlRouter().routes