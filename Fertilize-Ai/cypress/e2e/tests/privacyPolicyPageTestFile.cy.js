// Privacy Policy page 

import PrivacyPolicyPage from "../pages/privacyPolicyPage"

describe("Fertilize Ai Privacy Policy Page Tests", () => {

    beforeEach(() => {
        PrivacyPolicyPage.visit()
    })

    context("Home Section", () => {
        it("Displays the hero section", () => {
            PrivacyPolicyPage.getHeroSection()
        })

        it("Displays the hero section image in the background", () => {
            PrivacyPolicyPage.getHeroSectionImageInTheBackground()
        })

        it("Displays the hero section text", () => {
            PrivacyPolicyPage.getHeroSectionText()
        })
    })

    context("Privacy Policy", () => {

        it("Privacy Policy section is dispalyed", () => {
            PrivacyPolicyPage.getPrivacyPolicySection()
        })

        context("Table of Contents", () => {
            it("Table of contents section is visible", () => {
                PrivacyPolicyPage.getPrivacyPolicySectionTableOfContents()
            })

            it("Table of contents heading text is displayed", () => {
                PrivacyPolicyPage.getPrivacyPolicySectionTableOfContentsText()
            })

            it("Table of contents body text is displayed", () => {
                PrivacyPolicyPage.getPrivacyPolicySectionTableOfContentsBodyText()
            })

            it("Clicking on table of contents navigates to the desired section", () => {
                PrivacyPolicyPage.verifyPrivacyPolicySectionTableOfContentsWhenClickedNavigateToRightSection()
            })
        })

        context("Privacy Policy Content", () => {
            it("Content section is visible", () => {
                PrivacyPolicyPage.getPrivacyPolicyContentSection()
            })

            it("Content section text is visible and correct", () => {
                PrivacyPolicyPage.getPrivacyPolicySectionHeadingAndBodyContentText()
            })
        })
    })
})
