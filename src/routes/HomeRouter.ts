import BaseRouter from './BaseRouter'

// middleware
import { auth } from '../middleware/AuthMiddleware'
// Controller 
import Ctrl from './../controller/HomeController'


class HomeRouter extends BaseRouter {
    
    
    routes(): void {
        this.router.get("/", /* middleware */auth, /* controller */Ctrl.index)
        this.router.post("/create", Ctrl.create)
        this.router.put("/update/:id", Ctrl.update)
        this.router.delete("/delete/:id", Ctrl.delete)
    }
    
}

export default  new HomeRouter().router