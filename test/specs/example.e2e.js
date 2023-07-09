const LoginPage = require('../pageobjects/login.page')
const securePage = require('../pageobjects/secure.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it("Should click logout and user is logged out", () => {
        securePage.btnLogout.click();
        expect(securePage.flashAlert).toHaveTextContaining("You loggedin to the secure area!");
    })
})


