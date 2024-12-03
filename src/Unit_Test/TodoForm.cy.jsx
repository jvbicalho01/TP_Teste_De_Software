import React from 'react'
import TodoForm from '../../src/components/TodoForm/TodoForm'

describe('<TodoForm />', () => {
    beforeEach(() => {
        cy.mount(<TodoForm />)
    })
    let input = 'Finalizar parte escrita do trabalho de Ética';

    it('should render component correctly', () => {
        cy.get('[data-cy=todo-form]').should('be.visible')
    })
    it('should select \"Trabalho\" category', () => {
        cy.get('[data-cy=select-category]').select('Trabalho').should('have.value', "Trabalho")
    })
    it('should select \"Pessoal\" category', () => {
        cy.get('[data-cy=select-category]').select('Pessoal').should('have.value', "Pessoal")
    })
    it('should select \"Estudos\" category', () => {
        cy.get('[data-cy=select-category]').select('Estudos').should('have.value', "Estudos")
    })
    it('should check input', () => {
        cy.get('[data-cy=todo-form-input]').type(input).should("have.value", input)
    })
    it('should check shape of color buttons', () => {
        cy.get('[data-cy=color]').should("have.css", "border-radius", "100%")
    })
    it('should check if color buttons are grouped horizontally', () => {
        cy.get('[data-cy=colors]').should("have.css", "flex-direction", "row")
    })

    //New Tests
    it('should check if submit button is visible', () => {
        cy.get('[data-cy=submit]').should('be.visible')
    })

    it('should check if submit button has text Criar tarefa', () => {
        cy.get('[data-cy=submit]').should('have.text', "Criar tarefa")
    })


    it('should check if option trabalho has text Trabalho', () => {
        cy.get('[data-cy=todo-form-work]').should('have.text', "Trabalho")
    })

    it('should check if option pessoal has text Pessoal', () => {
        cy.get('[data-cy=todo-form-personal]').should('have.text', "Pessoal")
    })

    it('should check if option estudos has text Estudos', () => {
        cy.get('[data-cy=todo-form-studies]').should('have.text', "Estudos")
    })
    
    it('should display colors title', () => {
        cy.get('[data-cy=colors-title]').should('be.visible')
    })

    it('should check if option categoria has text Selecione uma categoria', () => {
        cy.get('[data-cy=todo-form-select-category]').should('have.text', "Selecione uma categoria")
    })
    
    it('should display colors options', () => {
        cy.get('[data-cy=colors-options]').should('be.visible')
    })

    it('should check if option trabalho is visible', () => {
        cy.get('[data-cy=todo-form-work]').should('be.visible')
    })

    it('should check if option pessoal is visible', () => {
        cy.get('[data-cy=todo-form-personal]').should('be.visible')
    })

    it('should check if option estudos is visible', () => {
        cy.get('[data-cy=todo-form-studies]').should('be.visible')
    })

    it('should check if header create task is visible', () => {
        cy.get('[data-cy=h2-create-task]').should('be.visible')
    })

    it('should check if header create task has text Criar tarefa:', () => {
        cy.get('[data-cy=h2-create-task]').should('have.text', "Criar tarefa:")
    })
    
})