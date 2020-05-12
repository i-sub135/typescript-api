import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmt from 'helmet'
import cors from 'cors'
import {config as env} from 'dotenv'


// Router
import homeRoute from "./routes/HomeRouter"

// initial type data
let port : Number
    

class App {

    public app: Application
    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
        env()
    }

    protected plugins() : void {
        this.app.use(bodyParser.json())
        this.app.use(morgan("dev"))
        this.app.use(compression())
        this.app.use(helmt())
        this.app.use(cors())
    }

    protected routes () : void {
        /*router registed */

        this.app.route("/").get((req: Request, res: Response) => {
            let out = {
                code : 200,
                message : "OK"
            }
            res.status(200)
            res.send(out)
        })

        this.app.use("/home", homeRoute)



        /*router registed */
    }

    
}

port = 8001
const app = new App().app
app.listen(port, () =>{
    console.log("Aplication Listen on Port : " + port);

    // console.log(process.env.DB_HOST);
    
    
})

// Run apps 

