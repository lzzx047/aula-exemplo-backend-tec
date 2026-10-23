import api from './api'

// buscar

// buscarUm

// criar

// alterar

// deletar

export const loginUser = async () => {
    const reponse = await api.post('/v1/usuario/login')

    return Response.data
}