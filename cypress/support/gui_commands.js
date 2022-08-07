/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')
  
    cy.get("[data-qa-selector='login_field']").type(Cypress.env('user_name'))
    cy.get("[data-qa-selector='password_field']").type(Cypress.env('user_password'))
    cy.get("[data-qa-selector='sign_in_button']").click()
})


Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click();
    cy.contains('Sign out').click();

})

Cypress.Commands.add('gui_createProject_', project => {
  cy.log(project.name)
  cy.log(project.description)
  cy.visit('projects/new')
  cy.get('#project_name').type(project.name)
  cy.get('#project_description').type(project.description)
  cy.get('#project_initialize_with_readme').check()
  cy.contains('Create project').click()
})


Cypress.Commands.add('gui_createIssue', issue => {
  cy.log(issue.title)
  cy.log(issue.description)

cy.get('.qa-issues-item').click()
cy.get('#new_issue_link').click()
cy.get('#issue_title').type(issue.title)
cy.get('#issue_description').type(issue.description)
cy.get('.qa-issuable-create-button').click()
  

  //cy.visit(`${Cypress.env('user_name')}/projects/${issue.project.name}/issue/new`)
  // cy.get('#project_name').type(project.name)
  // cy.get('#project_description').type(project.description)
  // cy.get('#project_initialize_with_readme').check()
  // cy.contains('Create issue').click()
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('.qa-edit-link-labels').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
  cy.get('.block.milestone .edit-link').click()
  cy.contains(milestone.title).click()
})
