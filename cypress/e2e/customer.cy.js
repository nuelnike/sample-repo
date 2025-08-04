const genRandPhone = (len = 10) => 
{ 
    let res = '';
    let chars = '123456789'
    let charLen = chars.length;

    for(var i = 0; i < len; i++)
        res += chars.charAt(Math.floor(Math.random() * charLen));
    
    return Number(res);
}

describe('Store Brand Creation Test', () => {

    beforeEach(() => {
        cy.visit('https://dmsfrontenduat.z6.web.core.windows.net/')
        cy.get('#username').type('07035528282')
        cy.get('#password').type('07035528282')
        cy.get('.btn').click()
        cy.url().should('eq', 'https://dmsfrontenduat.z6.web.core.windows.net/buy/brand')
    });

    // it('Confirm user can create a new valid customer', () => {
    //     cy.get('.burger > .material-symbols-outlined').click()
    //     cy.get(':nth-child(2) > .sidebar-nav-item--link').click()
    //     cy.url().should("eq", "https://dmsfrontenduat.z6.web.core.windows.net/contacts")
    //     cy.get('.btn').click()
    //     cy.wait(5000)
    //     cy.get('.app-modal-body-content').should("be.visible")
    //     cy.get(':nth-child(1) > div > .form__input').type("John Doe")
    //     cy.get('#email').type("johndoe@yopmail.com")
    //     cy.get('#phone').type('070'+genRandPhone(8))
    //     cy.get(':nth-child(4) > div > .form__input').type("20 street name")

    //     cy.get('.select__input')
    //     .find('option').eq(5)
    //     .then(option => {
    //         const value = option.val();
    //         cy.get('.select__input').select(value);
    //     });

    //     cy.get(':nth-child(6) > [style="position: relative;"] > .select-wrapper > .select__input')
    //     .find('option').eq(5)
    //     .then(option => {
    //         const value = option.val();
    //         cy.get(':nth-child(6) > [style="position: relative;"] > .select-wrapper > .select__input').select(value);
    //     });

    //     cy.get('.form-buttons > .app-button > .btn').click()
    //     cy.url().should("eq", "https://dmsfrontenduat.z6.web.core.windows.net/contacts")
    // });


    // it('Confirm user can update customer', () => {
    //      cy.get('.burger > .material-symbols-outlined').click()
    //     cy.get(':nth-child(2) > .sidebar-nav-item--link').click()
    //     cy.url().should("eq", "https://dmsfrontenduat.z6.web.core.windows.net/contacts");
    //     cy.wait(10000)
    //     cy.get(':nth-child(1) > .bo-data-table-body-each-item-menu > .app-button > .btn').click()
    //     cy.get('.bo-submenu-body > :nth-child(1)').click()
    //     cy.get('#email').clear();
    //     cy.get('#email').type("newemail@yopmail.com")
    //     cy.get(':nth-child(4) > div > .form__input').type("10 new street name")
    //     cy.get('.form-buttons > .app-button > .btn').click()
    // });


    // it('Confirm user can delete a customer', () => {
    //      cy.get('.burger > .material-symbols-outlined').click()
    //     cy.get(':nth-child(2) > .sidebar-nav-item--link').click()
    //     cy.url().should("eq", "https://dmsfrontenduat.z6.web.core.windows.net/contacts");
    //     cy.wait(10000)
    //     cy.get(':nth-child(1) > .bo-data-table-body-each-item-menu > .app-button > .btn').click()
        
    //     cy.get('.bo-submenu-body > :nth-child(2)').click()
    //     cy.get('.app-modal-body-content').should("be.visible")
    //     cy.get(':nth-child(2) > .btn').click()
    //     cy.contains('Customer has been successfully deleted').should("be.visible")

    //     cy.get('.table-top-input--textbox-input').type("Emmanuel")
        
    // });

    


    it('Confirm user can delete a customer', () => {
         cy.get('.burger > .material-symbols-outlined').click()
        cy.get(':nth-child(2) > .sidebar-nav-item--link').click()
        cy.url().should("eq", "https://dmsfrontenduat.z6.web.core.windows.net/contacts");
        cy.wait(10000)
        cy.get('.table-top-input--textbox-input').should("be.visible").type("John Doe").type("{enter}")
        
    });

})