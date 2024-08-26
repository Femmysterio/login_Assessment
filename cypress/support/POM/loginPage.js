/// <reference types="cypress" />class homePage {

class loginPage {

    username(value) {
        cy.get('#loginFrm_loginname').type(value)
    }

    password(value) {
        cy.get('#loginFrm_password').type(value)
    }

    loginBtn() {
        cy.get('[title="Login"]').click({force:true})
    }  

    assertHomePage() {
        return cy.get('.subtext')
    }

    assertLoginError() {
        return cy.get('.alert-danger')
    }
   
    
    

    
    
}

module.exports = new loginPage