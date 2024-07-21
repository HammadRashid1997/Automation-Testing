describe("SignUp Page", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/sign-up");
  });

  it("The page is visible", () => {});

  // Section
  context("Container", () => {
    it("The container has the image present", () => {
      cy.get(".navbar-brand.logolink.w-nav-brand").should("be.visible");
    });

    it("The image is clickable", () => {
      cy.get(".navbar-brand.logolink.w-nav-brand").should("be.visible").click();
      cy.visit("https://www.fertilize.ai/");
    });

    it("The text below is visible", () => {
      cy.get(".text-block-12").should("be.visible");
    });

    it("The text below is correct", () => {
      cy.get(".text-block-12")
        .should("be.visible")
        .should(
          "have.text",
          "Enhancing crop yields through intelligent nutrient optimization, powered by fertilize AI!"
        );
    });
  });

  // Signup Form
  context("Signup Form", () => {
    it("The signup form is visible", () => {
      cy.get(".column-3.w-col.w-col-9").should("be.visible");
    });

    context("Signup Heading", () => {
      it("The signup form has the correct heading Signup", () => {
        cy.get("h1")
          .should("be.visible")
          .should("have.text", "Sign up")
          .should("have.css", "color", "rgb(0, 0, 0)");
      });
    });

    // Signup Form
    context("Form", () => {
      it("The form is visible", () => {
        cy.get("#email-form").should("be.visible");
      });

      it("The user can sign up with valid information", () => {
        cy.get("#Name-2").type("John");
        cy.get("#Name").type("Doe");
        cy.get("#Phone").type("1234567890"); // Fill in phone number
        cy.get("#Email-2").type("john.doe@example.com");
        cy.get("#Password").type("password123");

        cy.get("#checkbox-3").check();

        cy.get(".button-4.registration.w-button").click();

        cy.wait(5000);
        cy.xpath("/html/body/section/div/div/main/div/div[1]/div[1]").should(
          "be.visible"
        );
      });
    });

    context("Social Media Icons", () => {
      it("The social media box is visible", () => {
        cy.get(".social-box").should("be.visible");
      });

      it("The social media icon Google is present", () => {
        cy.get(".social-login.w-inline-block").should("be.visible");
      });

      it("The container has white background color", () => {
        cy.get(".social-login.w-inline-block")
          .should("be.visible")
          .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
      });

      it("The container has text Google in it", () => {
        cy.get(".social-login.w-inline-block")
          .should("have.text", "GoogleFacebook")
          .should("have.css", "color", "rgb(0, 0, 238)");
      });

      it("The container has the Google icon in it", () => {
        cy.get(".image-2").should("be.visible");
      });

      // Facebook
      it("The social media icon Facebook is present", () => {
        cy.get(".social-login.facebook.w-inline-block").should("be.visible");
      });

      it("The container has blue background color", () => {
        cy.get(".social-login.facebook.w-inline-block")
          .should("be.visible")
          .should("have.css", "background-color", "rgb(59, 89, 152)");
      });

      it("The container has text Facebook in it", () => {
        cy.get(".social-login.facebook.w-inline-block")
          .should("have.text", "Facebook")
          .should("have.css", "color", "rgb(0, 0, 238)");
      });

      it("The container has the Facebook icon in it", () => {
        cy.get(".social-login.facebook.w-inline-block").should("be.visible");
        cy.get(".image-2").should("be.visible");
      });
    });
  });
});
