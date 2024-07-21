describe("Fertilize AI", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/");
  });

  it("The browser opens up", () => {});

  it("The home page is visible", () => {});

  // Navbar
  context("Navbar", () => {
    it("The navbar is visible", () => {
      cy.get(".navbar-logo-left").should("be.visible");
    });

    it("The logo in the navbar is visible", () => {
      cy.xpath("/html/body/div[1]/div/section/a/img").should("be.visible");
    });

    it("The logo is clickable", () => {
      cy.xpath("/html/body/div[1]/div/section/a/img")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/");
    });

    it("The FAQs heading is visible", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]").should(
        "be.visible"
      );
    });

    it("The text FAQs is correct", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]")
        .should("be.visible")
        .should("have.text", "FAQ's");
    });

    it("The text FAQs has the correct color", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]")
        .should("be.visible")
        .should("have.css", "color", "rgb(51, 51, 51)");
    });

    it("The text FAQs is clickable", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/faqs/");
    });

    it("The Signup button is visible", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a").should(
        "be.visible"
      );
    });

    it("The Signup button has the correct text", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .should("have.text", "Sign up");
    });

    it("The Signup button has the corect text color", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("The Signup button has the correct background color", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .should("have.css", "background-color", "rgb(122, 166, 108)");
    });

    it("The SignUp button is clickable", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/sign-up/");
    });
  });

  // Footer
  context("Footer", () => {
    it("The footer is visible", () => {
      cy.xpath("/html/body/section[2]").should("be.visible");
    });

    it("The copyright text is visible in the footer", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[1]/div").should(
        "be.visible"
      );
    });

    it("The copy right text is correct", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[1]/div")
        .should("be.visible")
        .should("have.text", "© 2024 Husky Ag Inc. All rights reserved.");
    });

    it("The color of the span text is correct", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[1]/div/span[1]").should(
        "have.css",
        "color",
        "rgb(122, 166, 108)"
      );
    });

    it("The Privacy Policy is visible", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]").should(
        "be.visible"
      );
    });

    it("The text Privacy Policy is correct", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]")
        .should("be.visible")
        .should("have.text", "Privacy Policy");
    });

    it("The text Privacy Policy has the correct color", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]")
        .should("be.visible")
        .should("have.css", "color", "rgba(0, 0, 0, 0.44)");
    });

    it("The Privacy Policy is clickable and takes me to the Privacy Policy Page", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/privacy-policy");
    });

    it("The Terms of Service is visible", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]").should(
        "be.visible"
      );
    });

    it("The Terms of Service has the correct text", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
        .should("be.visible")
        .should("have.text", "Terms of Services");
    });

    it("The Terms of Services has the correct text color", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
        .should("be.visible")
        .should("have.css", "color", "rgba(0, 0, 0, 0.44)");
    });

    it("The Terms of Services is clickable and takes me to the Terms of Services pop up", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
        .should("be.visible")
        .click();
      cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
    });
  });

  // Body Content
  context("Body", () => {
    it("The body of the page is visible", () => {
      cy.get(".section-10.hero-sec").should("be.visible");
    });

    it("The main content is visible", () => {
      cy.get(".hero").should("be.visible");
    });

    it("The text panel on the left is visible", () => {
      cy.get(".hero-text-panel").should("be.visible");
    });

    // Heading Text
    context("Heading Text", () => {
      it("The heading text is visible", () => {
        cy.get("h1").should("be.visible");
      });

      it("The heading text is correct", () => {
        cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/h1")
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            const actualText = text.replace(/\n\s+/g, " ").trim(); // Remove line breaks and extra spaces
            const expectedText = "Supercharge your  plant nutrition";
            expect(actualText).to.equal(expectedText);
          });
      });
    });

    // Paragraph Text
    context("Paragraph Text", () => {
      it("The paragraph text is visible", () => {
        cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/p").should(
          "be.visible"
        );
      });

      it("The paragraph text is correct", () => {
        cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/p")
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            const actualText = text.replace(/\n\s+/g, " ").trim(); // Remove line breaks and extra spaces
            const expectedText =
              "Chat today to leverage climate data, soil analyses & more to get more out of your crops.";
            expect(actualText).to.equal(expectedText);
          });
      });

      it("The paragraph text has the correct color", () => {
        cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/p")
          .should("be.visible")
          .should("have.css", "color", "rgba(0, 0, 0, 0.698)");
      });
    });

    // Button
    it("The button is visible", () => {
      cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/a").should(
        "be.visible"
      );
    });

    it("The button has the correct background color", () => {
      cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/a").should(
        "have.css",
        "background-color",
        "rgb(122, 166, 108)"
      );
    });

    it("The button has the correct text in it", () => {
      cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/a").should(
        "have.text",
        "Try Fertilize AI"
      );
    });

    it("The button is clickable and takes the user to the sign up page", () => {
      cy.xpath("/html/body/section[1]/div/div/main/div/div[1]/a")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/sign-up/");
    });

    // The animation in the hero section
    it("The animation in the hero section is visible", () => {
      cy.get(".hero-img-panel").should("be.visible");
    });
  });
});
