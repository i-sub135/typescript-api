import { Router } from 'express'
import iRouter from './RouterInterface'

abstract class BaseRouter implements iRouter {
    public router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }
    abstract routes(): void 

}

export default BaseRouter