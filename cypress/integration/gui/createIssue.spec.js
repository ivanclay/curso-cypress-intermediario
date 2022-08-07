/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue 1', () => {

  const issue = {
    title: `issue-${faker.random.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.random.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.login()
    //cy.gui_createProject_(issue.project)
    cy.api_createProject(issue.project)
    cy.visit(`${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${issue.project.name}`)
  })
  
  it('successfully', () => {

    cy.gui_createIssue(issue)

    cy.get('.qa-title').contains(issue.title)
    // cy.contains('.issue-details')
    //   .should('contain', issue.title)
    //   .and('contain', issue.description)
  })
})
  