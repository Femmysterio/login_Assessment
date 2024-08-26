/// <reference types="cypress" />

import loginPage from '../../support/POM/loginPage'

const userId = "Femmysterio"
const password = "Femmysterio@2000"
const errorMsg = "Incorrect login or password provided."
const invalidUserId = "random123"
const invalidPassword = "345dhf"
const userIdWithSpace = "Femm yste rio"
const uppercasePassword = "FEMMYSTERIO@2000"
const uppercaseUserId = "FEMMYSTERIO"
const oneLetterUserId = "F"
const oneLetterPassword = "T"
const onlyNumbersUserId = "123456789"
const specialXtersUserId = "@#$$%%$#^%&^*&?>{}_"
const specialXtersPassword = "%$^#@+_@#)(*><?"

    describe('Verify login functionality', () => {

        beforeEach(() => {
            cy.visit('https://automationteststore.com/index.php?rt=account/login')
        })


        it('Successful login with valid credentials.', () => {

            loginPage.username(userId);
            loginPage.password(password)
            cy.wait(3000)
            loginPage.loginBtn()
            loginPage.assertHomePage().should('contain.text', "Oluwafemi")

        });


        it('Verify User cannot Login with Invalid loginName', () => {
            loginPage.username(invalidUserId);
            loginPage.password(password)
            cy.wait(3000)
            loginPage.loginBtn()
            loginPage.assertLoginError().should('include.text', errorMsg)
        });


        it('Verify User cannot Login with Invalid password', () => {
            loginPage.username(userId);
            loginPage.password(invalidPassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with Invalid loginName and password credentials', () => {
            loginPage.username(invalidUserId);
            loginPage.password(invalidPassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with Empty loginName field ', () => {
            loginPage.username(' ');
            loginPage.password(password);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with Empty Password field ', () => {
            loginPage.username(userId);
            loginPage.password('  ');
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with both Empty loginName and Password field ', () => {
            loginPage.username(' ');
            loginPage.password('  ');
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with loginName that has trailing spaces', () => {
            loginPage.username(userIdWithSpace);
            loginPage.password(password);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with entire Uppercase letters in Password field', () => {
            loginPage.username(userId);
            loginPage.password(uppercasePassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with entire Uppercase letters in loginName field', () => {

            // There is a bug here as User is being logged In. Username also should be Case Sensitive 

            loginPage.username(uppercaseUserId);
            loginPage.password(password);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with Uppercase letters for both loginName and password fields', () => {
            loginPage.username(uppercaseUserId);
            loginPage.password(uppercasePassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with less than minimum characters allowed in loginName field', () => {
            loginPage.username(oneLetterUserId);
            loginPage.password(password);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with less than minimum characters allowed in password field', () => {
            loginPage.username(userId);
            loginPage.password(oneLetterPassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with only digits as loginName', () => {
            loginPage.username(onlyNumbersUserId);
            loginPage.password(password);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with only Special characters as loginName', () => {
            loginPage.username(specialXtersUserId);
            loginPage.password(password);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });


        it('Verify User cannot Login with only Special characters as Password', () => {
            loginPage.username(userId);
            loginPage.password(specialXtersPassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });

        it('Verify User cannot Login with only Special characters in both LoginName and Password fields ', () => {
            loginPage.username(specialXtersUserId);
            loginPage.password(specialXtersPassword);
            cy.wait(3000);
            loginPage.loginBtn();
            loginPage.assertLoginError().should('include.text', errorMsg);
        });
    })  