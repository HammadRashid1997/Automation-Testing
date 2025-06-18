// Tests for Home Page

import HomePage from "../pages/homePage"

describe("Fertilize Ai Home Page Tests", () => {
    beforeEach(() => {
        HomePage.visit()
    });

    // Navbar
    it("Displays the top navbar", () => {
        HomePage.getTopNavbar();
    })

    it("Logo in the navbar is clickable and navigates to the home page of the site", () => {
        HomePage.verifyTopNavbarLogo();
    })

    it("Displays the FAQs and Signup button", () => {
        HomePage.getTopNavbarFAQsButton();
        HomePage.getTopNavbarSignUpButton();
    });

    it("FAQs button in header is clickable and navigates to FAQs page", () => {
        HomePage.verifyTopNavbarFAQsButton();
    });

    it("Sign up button in header is clickable and navigates to Sign up page", () => {
        HomePage.verifyTopNavbarSignUpButton();
    });

    // Hero section
    it("Displays the hero section", () => {
        HomePage.getHeroSection();
    });

    it("Hero section heading text is visible and correct", () => {
        HomePage.checkHeroSectionHeadingText();
    })

    it("Hero section paragraph text is visible and correct", () => {
        HomePage.checkHeroSectionParagraphText();
    })

    it("Hero section image is visible", () => {
        HomePage.getHeroSectionImage()
    });

    it("Hero section button is clickable and navigates to sign-up page", () => {
        HomePage.verifyHeroSectionButton()
    })

    // Footer displayed
    it("Displays the footer", () => {
        HomePage.getFooterSection();
    });

    it("Privacy Policy button in footer section is clickable and navigates to privacy policy page", () => {
        HomePage.verifyFooterSectionPrivacyPolicyButton()
    })

    it("Terms and Conditions button in footer section is clickable and opens the terms and conditions page", () => {
        HomePage.verifyFooterSectionTermsAndConditionsButton()
    })
});
