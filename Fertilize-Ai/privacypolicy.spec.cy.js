describe("Privacy Policy Page", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/privacy-policy");
  });

  it("The page is visible", () => {});

  it("The bd");

  context("Hero section", () => {
    it("The hero section is visible", () => {
      cy.get(".section-7.privacy-policy-section").should("be.visible");
    });

    it("Checks if background image is visible", () => {
      // Get the element with the background image
      cy.get(".section-7.privacy-policy-section")
        .should("be.visible")
        .then(($element) => {
          // Get the computed style of the element
          const computedStyle = window.getComputedStyle($element[0]);

          const backgroundImage =
            computedStyle.getPropertyValue("background-image");

          expect(backgroundImage).not.to.equal("none");
        });
    });

    it("The text is visible", () => {
      cy.xpath("/html/body/section[2]/div/div").should("be.visible");
    });

    it("The heading text is visible", () => {
      cy.xpath("/html/body/section[2]/div/div/h1").should("be.visible");
    });

    it("The heading text is correct", () => {
      cy.xpath("/html/body/section[2]/div/div/h1")
        .should("be.visible")
        .should("have.text", "Fertilize Ai’s Privacy Policy");
    });

    it("The heading text color is correct", () => {
      cy.xpath("/html/body/section[2]/div/div/h1")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("The sub text is visible", () => {
      cy.xpath("/html/body/section[2]/div/div/div").should("be.visible");
    });

    it("The sub text is correct", () => {
      cy.xpath("/html/body/section[2]/div/div/div")
        .should("be.visible")
        .should(
          "have.text",
          "Our Privacy Policy describes how Fertilize AI handles your data when you interact with our platform."
        );
    });

    it("The sub text color is correct", () => {
      cy.xpath("/html/body/section[2]/div/div/div")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("The table of contents are visible", () => {
      cy.get(".privacy-policy-tabs-panel").should("be.visible");
    });

    it("The table of contents have the correct heading text", () => {
      cy.get(".privacy-policy-tabs-head").should("be.visible");
    });

    it("The h3 text is visible, correct and has the correct color", () => {
      cy.get("h3")
        .should("be.visible")
        .should("have.text", "Fertilize Ai's Privacy Policy")
        .should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("The effected text is visible, correct and has the correct text color", () => {
      cy.xpath("/html/body/section[3]/div/div/section/div[1]/div[1]/div")
        .should("be.visible")
        .should("have.text", "Effected:- Agust 23, 2026")
        .should("have.css", "color", "rgba(255, 255, 255, 0.7)");
    });

    context("Tests privacy policy tabs", () => {
      context("Tab 1", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[1]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[1]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "1");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[1]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Privacy Policy")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 2", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[2]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[2]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "2");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[2]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Information We Collect")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 3", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[3]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[3]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "3");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[3]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "How We Use Your Information")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 4", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[4]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[4]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "4");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[4]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "How We Share Your Information")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 5", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[5]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[5]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "5");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[5]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Data Security")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 6", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[6]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[6]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "6");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[6]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Data Retention")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 7", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[7]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[7]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "7");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[7]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Your rights")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 8", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[8]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[8]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "8");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[8]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Children's Privacy")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 9", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[9]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[9]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "9");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[9]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Changes to this Privacy Policy")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });

      context("Tab 10", () => {
        it("The tab is visible, content is visible, correct, has the correct color.", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[10]"
          ).should("be.visible");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[10]/div[1]"
          )
            .should("be.visible")
            .should("have.text", "10");
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[1]/div[2]/div[10]/div[2]"
          )
            .should("be.visible")
            .should("have.text", "Contact us")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });
      });
    });

    context("Privacy Policies", () => {
      it("The privacy policies are visible", () => {
        cy.xpath("/html/body/section[3]/div/div/section/div[2]").should(
          "be.visible"
        );
      });

      context("Policy 1", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab1"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[1]/h2")
            .should("be.visible")
            .should("have.text", "Privacy Policy")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[1]/p"
          ).should("be.visible");
        });
      });

      context("Policy 2", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab2"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[2]/h2")
            .should("be.visible")
            .should("have.text", "Information We collect")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[2]/p"
          ).should("be.visible");
        });
      });

      context("Policy 3", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab3"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[3]/h2")
            .should("be.visible")
            .should("have.text", "How We Use Your Information")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[3]/p"
          ).should("be.visible");
        });
      });

      context("Policy 4", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab4"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[4]/h2")
            .should("be.visible")
            .should("have.text", "How We Share Your Information")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[4]/p"
          ).should("be.visible");
        });
      });

      context("Policy 5", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab1"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[5]/h2")
            .should("be.visible")
            .should("have.text", "Data Security")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[5]/p"
          ).should("be.visible");
        });
      });

      context("Policy 6", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab6"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[6]/h2")
            .should("be.visible")
            .should("have.text", "Data Retention")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[6]/p"
          ).should("be.visible");
        });
      });

      context("Policy 7", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab1"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[7]/h2")
            .should("be.visible")
            .should("have.text", "Your Rights")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[7]/p"
          ).should("be.visible");
        });
      });

      context("Policy 8", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab8"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[8]/h2")
            .should("be.visible")
            .should("have.text", "Children's Privacy")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[8]/p"
          ).should("be.visible");
        });
      });

      context("Policy 9", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab9"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[9]/h2")
            .should("be.visible")
            .should("have.text", "Changes to this Privacy Policy")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[9]/p"
          ).should("be.visible");
        });
      });

      context("Policy 10", () => {
        it("The policy is visible, correct, has correct heading, heading color and text", () => {
          cy.xpath('//*[@id="tab10"]').should("be.visible");
          cy.xpath("/html/body/section[3]/div/div/section/div[2]/div[10]/h2")
            .should("be.visible")
            .should("have.text", "Contact Us")
            .should("have.css", "color", "rgb(51, 51, 51)");
        });

        it("The body text is visible, correct and has the correct color", () => {
          cy.xpath(
            "/html/body/section[3]/div/div/section/div[2]/div[10]/p"
          ).should("be.visible");
        });
      });
    });
  });
});
