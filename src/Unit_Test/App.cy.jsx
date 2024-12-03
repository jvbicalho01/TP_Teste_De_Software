import App from "../App"

describe('App', () => {

    it('should render component correctly', () => {
        cy.mount(<App />)
        cy.get('[data-cy=app]').should('be.visible')
    })

    it('should display app header', () => {
        cy.mount(<App />)
        cy.get('[data-cy=app-header]').should('be.visible')
    })

    it('should display app header', () => {
        cy.mount(<App />)
        cy.get('[data-cy=app__todo-list]').should('be.visible')
    })

    it('should display app header title', () => {
        cy.mount(<App />)
        cy.get('[data-cy=app-header-title]').should('be.visible')
    })

    it('should text \"Lista de Tarefas\" on app header title', () => {
        cy.mount(<App />)
        cy.get('[data-cy=app-header-title]').should('have.text', "Lista de Tarefas")
    })
})