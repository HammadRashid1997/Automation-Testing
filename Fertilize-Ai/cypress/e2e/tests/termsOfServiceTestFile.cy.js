import HomePage from "../pages/homePage"

describe("Fertile Ai's Terms of Services", () => {
    beforeEach(() => {
        HomePage.visit()
    })

    context("Terms of Services", () => {
        it("Terms of service is visible and clickable and opens the modal when clicked", () => {
            HomePage.verifyFooterSectionTermsAndConditionsButton()
        })

        it("Terms of Services modal heading text is visible", () => {
            HomePage.getFooterSectionTermsOfServicesModalHeadingText()
        })

        it("Terms of Services modal sub-heading text is visible", () => {
            HomePage.getFooterSectionTermsAndConditionsModalSubHeadingText()
        })

        it("Verify and check all of the content in the terms of service modal", () => {
            HomePage.getFooterSectionTermsAndConditionsModalBodyContent()
        })
    })
})