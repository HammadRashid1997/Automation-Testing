describe('Personal Portfolio', () => {
  beforeEach(() => {
    cy.visit('https://hammadrashid1997.github.io/Portfolio/')
  })

  it('The home page opens up', () => {

  })

  // Navbar
  context('Navbar', () => {
    it('The Navbar is visible', () => {
      cy.get('nav').should('be.visible')
    })

    // Navbar Logo
    context('Navbar Logo', () => {
      it('The logo is visible', () => {
        cy.get('.container .logo').should('be.visible')
      })

      it('The logo is clickable', () => {
        cy.get('.container .logo').should('be.visible').click();
      })

      it('The logo when clicks opens the home page', () => {
        cy.get('.container .logo').should('be.visible').click()
        cy.visit('https://hammadrashid1997.github.io/Portfolio/')
      })
    })

    // Hamburger Menu
    context('Hamburger Menu', () => {
      it('The hamburger menu is visible', () => {
        cy.get('.hamburger-box').should('be.visible')
      })

      it('The hamburger menu is clickable', () => {
        cy.get('.hamburger-box').should('be.visible').click()
      })

      it('The hamburger menu when clicked shows the menu links', () => {
        cy.get('.hamburger-box').should('be.visible').click()
        cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
      })

      context('Menu Links', () => {
        it('The menu links are visible', () => {
          cy.get('.hamburger-box').should('be.visible').click()
          cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
          cy.get('.nav.show').should('be.visible')
        })

        context('About', () => {
          it('The text About is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'About').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'About').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'About').should('be.visible').click()
            cy.get('#about').should('be.visible')
          })
        })

        context('Services', () => {
          it('The text Services is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Services').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Services').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Services').should('be.visible').click()
            cy.get('#services').should('be.visible')
          })
        })

        context('My Works', () => {
          it('The text My Works is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'My Works').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'My Works').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'About').should('be.visible').click()
            cy.get('#portfolio').should('be.visible')
          })
        })

        context('Languages', () => {
          it('The text Languages is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Languages').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Languages').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Services').should('be.visible').click()
            cy.get('#programming-languages').should('be.visible')
          })
        })

        context('Tools and Frameworks', () => {
          it('The text Tools and Frameworks is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Tools and Frameworks').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Tools and Frameworks').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'About').should('be.visible').click()
            cy.get('#toolsandframeworks').should('be.visible')
          })
        })

        context('Certfications', () => {
          it('The text Certfications is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Certifications').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Certifications').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Certifications').should('be.visible').click()
            cy.get('#certifications').should('be.visible')
          })
        })

        context('Blogs', () => {
          it('The text Blogs is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Blogs').should('be.visible')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Blogs').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.link', 'Blogs').should('be.visible').click()
            cy.get('#blog').should('be.visible')
          })
        })

        context('Contact', () => {
          it('The text Blogs is visible', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.item', 'Contact').should('be.visible')
          })

          it('The text has the correct background color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.item', 'Contact').should('be.visible').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })

          it('The text has the correct color', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.item', 'Contact').should('be.visible').should('have.css', 'color', 'rgb(33, 37, 41)')
          })

          it('The link is clickable', () => {
            cy.get('.hamburger-box').should('be.visible').click()
            cy.get('.hamburger.hamburger--elastic.is-active').should('be.visible')
            cy.contains('.item', 'Contact').should('be.visible').click()
            cy.get('#contact').should('be.visible')
          })
        })
      })
    })
  })

  // Hero Section
  context('Hero Section', () => {
    it('The hero section is visible', () => {
      cy.get('#home').should('be.visible')
    })

    it('The background image is visible', () => {
      cy.get('.overlay').should('be.visible')
    })

    context('Hero Section Text', () => {
      it('The text is visible', () => {
        cy.get('.header-content.container').should('be.visible')
      })

      context('Title Text', () => {
        it('The header text is visible', () => {
          cy.get('.text-center-header .header-title').should('be.visible')
        })

        it('The text has the correct color', () => {
          cy.get('.text-center-header .header-title').should('be.visible')
            .should('have.css', 'color', 'rgb(33, 37, 41)')
        })
      })

      context('Subtitle Text', () => {
        it('The subtitle text is visible', () => {
          cy.get('.text-center-header.mt-4 .header-subtitle').should('be.visible')
        })

        it('The subtitle text has the correct color', () => {
          cy.get('.text-center-header.mt-4 .header-subtitle').should('be.visible')
            .should('have.css', 'color', 'rgb(17, 17, 17)')
        })
      })

      context('Visit my Works Button', () => {
        it('The button is visible', () => {
          cy.get('.text-center-header.mt-4 .btn.btn-primary.btn-rectangular').should('be.visible')
        })

        it('The button has the correct background color', () => {
          cy.get('.text-center-header.mt-4 .btn.btn-primary.btn-rectangular').should('be.visible')
            .should('have.css', 'background-color', 'rgb(105, 90, 166)')
        })

        it('The button text has the correct color', () => {
          cy.get('.text-center-header.mt-4 .btn.btn-primary.btn-rectangular').should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        it('The button is clickable', () => {
          cy.get('.text-center-header.mt-4 .btn.btn-primary.btn-rectangular').should('be.visible')
            .click()
        })

        it('The button when clicked takes to the My Works section clickable', () => {
          cy.get('.text-center-header.mt-4 .btn.btn-primary.btn-rectangular').should('be.visible')
            .click()
          cy.get('#portfolio').should('be.visible')
        })
      })
    })
  })

  // About Me Section
  context('About', () => {
    it('The section is visible', () => {
      cy.get('#about').should('be.visible')
    })

    context('Text', () => {
      it('The text is visible', () => {
        cy.get('.about-caption').should('be.visible')
      })

      it('The section subtitle is visible', () => {
        cy.get('.about-caption .section-subtitle').should('be.visible')
      })

      it('The section subtitle is correct', () => {
        cy.get('.about-caption .section-subtitle').should('be.visible')
          .should('have.text', 'Who Am I ?')
      })

      it('The section subtitle text color is correct', () => {
        cy.get('.about-caption .section-subtitle').should('be.visible')
          .should('have.css', 'color', 'rgb(17, 17, 17)')
      })

      it('The title text is visible', () => {
        cy.get('.section-title.mb-3').should('be.visible')
      })

      it('The title text is correct', () => {
        cy.get('.section-title.mb-3').should('be.visible')
          .should('have.text', 'About Me')
      })

      it('The color of the title text is correct', () => {
        cy.get('.section-title.mb-3').should('be.visible')
          .should('have.css', 'color', 'rgb(105, 90, 166)')
      })

      it('The paragraph is visible', () => {
        cy.xpath('/html/body/section[1]/div/div/div[1]/p[2]').should('be.visible')
      })
    })

    context('Button', () => {
      it('The button is visible', () => {
        cy.get('.about-caption .btn.btn-primary.btn-rectangular')
          .should('be.visible')
      })

      it('The button has correct background color', () => {
        cy.get('.about-caption .btn.btn-primary.btn-rectangular')
          .should('be.visible')
          .should('have.css', 'background-color', 'rgb(105, 90, 166)')
      })

      it('The text color is correct', () => {
        cy.get('.about-caption .btn.btn-primary.btn-rectangular')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(255, 255, 255)')
      })

      it('The button is clickable', () => {
        cy.get('.about-caption .btn.btn-primary.btn-rectangular')
          .should('be.visible')
          .click()
      })

      it('Should download the CV when the button is clicked', () => {
        // Intercept the network request
        cy.intercept('GET', '**/assets/files/resume.pdf*').as('downloadCV');

        // Click the button that initiates the download
        cy.get('.about-caption .btn.btn-primary.btn-rectangular')
          .should('be.visible')
          .click()
          .then(() => {
            cy.log('Button clicked'); // Log the button click for debugging
          });

        // Increase the timeout and wait for the network request
        cy.wait('@downloadCV', { timeout: 10000 }).then((interception) => {
          // Assert the status code is 200
          expect(interception.response.statusCode).to.equal(200);
        });
      });
    })

    context('Image', () => {
      it('The image is visible', () => {
        cy.get('.about-img-holder').should('be.visible')
      })
    })
  })

  // Skills section
  context('Services', () => {
    it('The section is visible', () => {
      cy.get('#services').should('be.visible')
    })
    context('Text', () => {
      it('The subtitle text is visible', () => {
        cy.get('#services .section-subtitle').should('be.visible')
      })

      it('The subtitle text is correct', () => {
        cy.get('#services .section-subtitle').should('be.visible')
          .should('have.text', 'What I Do ?')
      })

      it('The subtitle text has the correct color', () => {
        cy.get('#services .section-subtitle').should('be.visible')
          .should('have.css', 'color', 'rgb(17, 17, 17)')
      })

      it('The title text is visible', () => {
        cy.get('#services .section-title.mb-6').should('be.visible')
      })

      it('The title text is correct', () => {
        cy.get('#services .section-title.mb-6').should('be.visible')
          .should('have.text', 'Services')
      })

      it('The title text has the correct color', () => {
        cy.get('#services .section-title.mb-6').should('be.visible')
          .should('have.css', 'color', 'rgb(105, 90, 166)')
      })
    })
  })
})

