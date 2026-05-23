const users = []

export class UserController {
    static async create(req, res) {
        try {
            const { name, old } = req.body
            users.push({ name, old })
            res.status(201).send()
        } catch (error) {
            console.error('Deu Ruim', error)
        }
    }

    static async list(req, res) {
        try {
            res.status(200).json({ users })
        } catch (error) {
            console.error('Deu Ruim', error)
        }
    }
} 