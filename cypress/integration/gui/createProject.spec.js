/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Project', () => {
  beforeEach(() => cy.login())
  
  it('successfully', () => {
    
    const project = {
      name: `project-${faker.random.uuid()}`,
      description: faker.random.words(5)
    }

    cy.log(project.name)
    cy.log(project.description)
    
    cy.gui_createProject_(project)

    cy.log(project.name)
    cy.log(project.description)

    cy.log(Cypress.env('user_name'))


    cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
  