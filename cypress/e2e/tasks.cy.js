import {faker} from '@faker-js/faker'

describe('tarefas', ()=> {


    it('deve cadastrar uma nova tarefa', ()=> {
        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
        .type('ler um livro de Node.js')     

        cy.contains('button', "Create").click()
    

    }) 

})


