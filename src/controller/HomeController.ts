import { Request, Response } from 'express'

import iController from "./ControllerInterface"

const db = require('../db/models')

let data: any[] = [
    { id: 1, nama: "ahmad" },
    { id: 2, nama: "ahad" },
    { id: 3, nama: "ahha" },
]


class HomeController implements iController {
    delete(req: Request, res: Response): void {
        const { id } = req.params

        let people = data.filter(i => i.id != id)

        let out = {
            code: 200,
            message: "Data Deleted",
            result: [people]
        }
        res.status(out.code)
        res.send(out)


    }
    update(req: Request, res: Response): void {
        const { id } = req.params
        const { name } = req.body

        let person = data.find(item => item.id == id)

        if (person == undefined) {
            let out = {
                code: 404,
                message: "Data Notfound",
                result: []
            }
            res.status(out.code)
            res.send(out)
            return
        }

        person.nama = name

        let out = {
            code: 200,
            message: "Update Sukses",
            result: data
        }
        res.status(200)
        res.send(out)
    }

    index = async (req: Request, res: Response): Promise<void> => {
        // let env = process.env

        const datas = await db.t_testing.findAll({ limit: 10000})
        let out = {
            code: 200,
            message: "OK",
            env : datas.length,
            result: datas,
        }
        res.status(200)
        res.send(out)
    }

    create(req: Request, res: Response): void {
        const { name } = req.body
        let len = data.length


        if (name == undefined) {
            let out = {
                code: 400,
                message: "Bad Request",
                result: {
                    error: "parameter not valid"
                }
            }
            res.status(400)
            res.send(out)

            return
        }

        data.push({
            id: len + 1,
            name: name
        })

        let out = {
            code: 200,
            message: "OK",
            result: data
        }
        res.status(200)
        res.send(out)

    }


}
export default new HomeController
