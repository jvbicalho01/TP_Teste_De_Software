import Filter from '../../src/components/Filter/Filter'

describe('Filter Component', () => {
    const obj = {
        setSort() {
            console.log("A função foi chamada!")
        },
        setFilter() {
            return 0;
        }
    }

    it('should render component correctly', () => {
        cy.mount(<Filter />)
        cy.get('[data-cy=filter]').should('be.visible')
    })
    it('when \"Asc\" button is pressed, the setSort function should be called', () => {
        cy.mount(<Filter setSort={obj.setSort} />, {obj})
        cy.spy(obj, 'setSort')
        cy.get('[data-cy=asc-button]').click()
    })
    it('should select filter status \"Todas\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=status-select]').select('Todas').should('have.value', 'All')
    })
    it('should select filter status \"Completas\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=status-select]').select('Completas').should('have.value', 'Completed')
    })
    it('should select filter status \"Incompletas\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=status-select]').select('Incompletas').should('have.value', 'Incomplete')
    })

    // Novos 
    it('should display asc button', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=asc-button]').should('be.visible')
    })
    it('should display desc button', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=desc-button]').should('be.visible')
    })


    it('should display text all', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=text-all]').should('be.visible')
    })
    it('should display text completed', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=text-completed]').should('be.visible')
    })
    it('should display text uncompleted', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=text-uncompleted]').should('be.visible')
    })


    
    it('should have text all', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=text-all]').should('have.text', "Todas")
    })
    it('should have text completed', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=text-completed]').should('have.text', "Completas")
    })
    it('should have text uncompleted', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=text-uncompleted]').should('have.text', "Incompletas")
    })

    
    it('should display filter title', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=filter-title]').should('be.visible')
    })
    it('should display filter description', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=filter-description]').should('be.visible')
    })
    it('should have text \"Ordem alfabética:\" on filter description', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=filter-description]').should('have.text', "Ordem alfabética:")
    })
    it('should display filter status', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=filter-status]').should('be.visible')
    })
    it('should have text \"status\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=filter-status]').should('have.text', "Status:")
    })
})