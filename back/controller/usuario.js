// service
import usuario from '../service/usuario.js'
import ServiceUsuario from '../service/usuario.js'

class ControllerUser {

    async Buscar(req, res) {
        try {
            const usuarios = await ServiceUsuario.Buscar()

            res.status(200).send({ usuarios })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Detalhe(req, res) {
        try {
            const id = req.session.id
            const usuario = await ServiceUsuario.Detalhe

            res.status(200).send({ usuario })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    async Criar(req, res) {
        try {
            const { name, email, password } = req.body
            const usuario = await ServiceUsuario.Criar

            res.status(201).send({ message: "Usuario criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    async Alterar(req, res) {
        try {
            const { name, email, password } = req.body
            const usuario = await ServiceUsuario.Alterar()

            res.status(200).send({ usuario })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    async Deletar(req, res) {
        try {

            const usuario = await ServiceUsuario.Deletar

            res.status(204).send({ usuario })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    async Login(req, res) {
        return res.send({ token: 123 })
        try {

            const usuario = await ServiceUsuario.Login()

            res.status(200).send({ usuario })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerUser()