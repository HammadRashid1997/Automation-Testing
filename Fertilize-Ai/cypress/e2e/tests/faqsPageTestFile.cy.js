import FAQsPage from "../pages/faqsPage"

describe("Fertilize Ai FAQs Page", () => {

    beforeEach(() => {
        FAQsPage.visit()
    });

    context("Hero Section", () => {
        it("Hero section is displayed", () => {
            FAQsPage.getHeroSection()
        })

        it("Hero section text is displayed", () => {
            FAQsPage.getHeroSectionText()
        })

        it("Hero section image is displayed", () => {
            FAQsPage.getHeroSectionImage()
        })
    })

    context("FAQs", () => {
        it("FAQs section is visible", () => {
            FAQsPage.getFAQsSection()
        })

        it("FAQs Heading text is visible", () => {
            FAQsPage.getFAQsSectionHeadingText()
        })

        it("FAQs content is visible", () => {
            FAQsPage.getFAQsQuestionsContent()
        })
    })
})
