import express from "express" 
import ControllerUsuario from "../controller/usuario.js"
//controller

const router = express.Router()

router.get('/buscar', ControllerUsuario.Buscar)
router.get('/detalhe', ControllerUsuario.Detalhe)
router.post('/criar', ControllerUsuario.Criar)
router.put('/alterar', ControllerUsuario.Alterar)
router.delete('/deletar', ControllerUsuario.Deletar)
router.post('/login', ControllerUsuario.Login)

export default router