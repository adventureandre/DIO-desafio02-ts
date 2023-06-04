import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('admin@adventure.dev.br','12345')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo: admin@adventure.dev.br')
    })
})