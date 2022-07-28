// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goVisit", (url, urlQueryParamStr = "") => {
    if (!url) return;

    const identifyBy = "identifyBy=" + Cypress.env("identifyBy");
    const identifyValue = "identifyValue=" + Cypress.env("identifyValue");
    const department = "department=" + Cypress.env("department");
    const chatKeepId = "chatKeepId=" + Cypress.env("chatKeepId");
    const urlQueryParams = `${identifyBy}&${identifyValue}&${department}&${chatKeepId}${urlQueryParamStr}`;

    cy.visit(`${Cypress.env("host")}/${url}?${urlQueryParams}`);
});
