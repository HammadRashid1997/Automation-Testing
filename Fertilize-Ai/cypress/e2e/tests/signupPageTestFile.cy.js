// Signup page test files

import SignupPage from "../pages/signupPage"

describe("Fertilize Ai Signup Page Tests", () => {
    beforeEach(() => {
        SignupPage.visit()
    });
    
    // Side section
    context("Side Section", () => {
        it("Displays the side section", () => {
            SignupPage.getSideSection();
        })

        it("Logo in the side section is clickable and navigates to the home page when clicked", () => {
            SignupPage.verifySideSectionLogo();
        });

        it("Text in the bottom of the side section is correct", () => {
            SignupPage.checkSideSectionTextAtTheBottomIsCorrect();
        });
    })
    
    // Regsitration form
    context("Registration Form", () => {
        it("Displays the signup form", () => {
            SignupPage.getSignupFormSection();
        });

        it("Displays the form heading", () => {
            SignupPage.getSignupTextHeading();
        });

        it("Fill in the signup form and submit the form", () => {
            const userData = {
                firstName: 'John',
                lastName: 'Doe',
                phone: '03001234567',
                email: `johndoe@yahoo.com`,
                password: 'Secure@123'
            };
            SignupPage.fillInTheSignUpForm(userData);
            SignupPage.verifySignupButton();
            SignupPage.verifySuccessMessage();
        })
    })

    // Social Media Icons
    context("Social Media Icons", () => {
        it("Social Login buttons are visible", () => {
            SignupPage.getSocialLoginButtons();
        });

        it("Google button", () => {
            SignupPage.getSocialLoginGoogleButton()
        });

        it("Facebook button", () => {
            SignupPage.getSocialLoginFacebookButton()
        });
    })
    
})
