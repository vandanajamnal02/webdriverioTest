import loginPage from '../../pages/login.page';



describe('login test spec', ()=>{
    it('should deny accessing with the incorrect creds', ()=>{
        loginPage.open();
        loginPage.username.setValue('foo')
        loginPage.password.setValue('bar')
        loginPage.submit()
        expect(loginPage.flash).toHaveTextContaining('Your username is invalid!')
    })

    it('it should allow access with correct creds', ()=> {

        loginPage.open()
        loginPage.username.setValue('tomsmith')
        loginPage.password.setValue('SuperSecretPassword!')
        loginPage.submit()
        expect(loginPage.flash).toHaveTextContaining('You logged into a secure area!')
    })
})