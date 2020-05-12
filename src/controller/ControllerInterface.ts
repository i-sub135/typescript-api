import { Request, Response } from 'express'

export default interface iController {
    index(req: Request, res: Response): void | Promise<void>
    create(req: Request, res: Response): void | Promise<void>
    update(req: Request, res: Response): void | Promise<void>
    delete(req: Request, res: Response): void | Promise<void>

}
