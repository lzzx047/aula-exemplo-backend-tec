// service

class ServiceUser {

    async Buscar() {
        return RepositoryUsuario.Buscar()
    }
    async Detalhe(id) {
        if(!id) {
            throw new Error()
        }

        return RepositoryUsuario.Detalhe(id)
    }

    async Criar(name, email, senha) {
        if(!name || !email) {

        }
    }
    async Alterar(id, name, email, senha) {}
    async Deletar(id) {}
    async Login(email, senha) {}

}

export default new ServiceUser()