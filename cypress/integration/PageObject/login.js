class Login{
    navigate(){
        cy.visit('/conectare');
    }

    email(username){
        cy.get(
            'form input.input-field[placeholder="namesurname@domain.com"]'
          )
        .clear()
        .type(username);
        return this
    }
    password(password){
        cy.get('form input.input-field[placeholder="************"]')
        .clear()
        .type(password);
        return this
    }
    submit(){
        cy.get('main > div > div > div > div.second-container > div > form > div.button-wrapper > button').click();
    }
}

export default Login