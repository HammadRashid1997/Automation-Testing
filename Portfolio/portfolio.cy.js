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

    context('Skillset', () => {
      it('The skillsets are visible', () => {
        cy.get('#services .container.text-center .row').should('be.visible')
      })

      context('Row 1', () => {

      })
    })
  })

  // Contact Us section
  context('Contact Us Slide Section', () => {
    it('The section is visible', () => {
      cy.get('.section-sm.bg-primary').should('be.visible')
    })

    it('The section has the correct background color', () => {
      cy.get('.section-sm.bg-primary').should('be.visible')
        .should('have.css', 'background-color', 'rgb(105, 90, 166)')
    })

    context('Text', () => {
      it('The text is visible', () => {
        cy.get('.section-sm.bg-primary .col-sm.offset-md-1.mb-4.mb-md-0').should('be.visible')
      })

      it('The text title is correct', () => {
        cy.xpath('/html/body/section[4]/div/div/div[1]/h6').should('be.visible')
          .should('have.text', 'Want to work with me?')
      })

      it('The text has the correct color', () => {
        cy.xpath('/html/body/section[4]/div/div/div[1]/h6').should('be.visible')
          .should('have.css', 'color', 'rgb(248, 249, 250)')
      })

      it('The subtitle text is correct', () => {
        cy.xpath('/html/body/section[4]/div/div/div[1]/p').should('be.visible')
          .should('have.text', 'Feel free to Contact & Hire me')
      })

      it('The subtitle text has the correct color', () => {
        cy.xpath('/html/body/section[4]/div/div/div[1]/p').should('be.visible')
          .should('have.css', 'color', 'rgb(248, 249, 250)')
      })
    })

    context('Button', () => {
      it('The button is visible', () => {
        cy.get('.row.align-items-center .col-sm.offset-sm-2.offset-md-3 .btn.btn-lg.my-font.btn-light.rounded')
          .should('be.visible')
      })

      it('The button has the correct background color', () => {
        cy.get('.row.align-items-center .col-sm.offset-sm-2.offset-md-3 .btn.btn-lg.my-font.btn-light.rounded')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(33, 37, 41)')
      })

      it('The button has the correct text', () => {
        cy.get('.row.align-items-center .col-sm.offset-sm-2.offset-md-3 .btn.btn-lg.my-font.btn-light.rounded')
          .should('be.visible')
          .contains('Hire Me')
      })

      it('The button text has the correct color', () => {
        cy.xpath('/html/body/section[4]/div/div/div[2]/button')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(33, 37, 41)')
      })

      it('The button is clickable', () => {
        cy.xpath('/html/body/section[4]/div/div/div[2]/button')
          .should('be.visible').click()
      })

      it('When the button is clicked takes the user to the contact section', () => {
        cy.xpath('/html/body/section[4]/div/div/div[2]/button')
          .should('be.visible').click()

        cy.get('#contact').should('be.visible')
      })
    })
  })

  // Languages section
  context('Languages', () => {
    it('The section is visible', () => {
      cy.xpath('//*[@id="programming-languages"]').scrollIntoView().should('be.visible')
    })

    context('Text', () => {
      context('Title Text', () => {
        it('The title text is visible', () => {
          cy.xpath('/html/body/section[5]/div/h6').should('be.visible')
        })

        it('The text is correct', () => {
          cy.xpath('/html/body/section[5]/div/h6').should('be.visible')
            .should('have.text', 'Programming Languages I Know')
        })

        it('The text color is correct', () => {
          cy.xpath('/html/body/section[5]/div/h6').should('be.visible')
            .should('have.css', 'color', 'rgb(105, 90, 166)')
        })
      })

      context('Subtitle Text', () => {
        it('The text is visible', () => {
          cy.xpath('/html/body/section[5]/div/div[1]/p').should('be.visible')
        })

        it('The text is correct', () => {
          cy.xpath('/html/body/section[5]/div/div[1]/p').should('be.visible')
            .should('have.text', 'Skills I Have Acquired')
        })

        it('The text color is correct', () => {
          cy.xpath('/html/body/section[5]/div/div[1]/p').should('be.visible')
            .should('have.css', 'color', 'rgb(17, 17, 17)')
        })
      })
    })

    context('Slider', () => {
      it('Display images and corresponding text correctly', () => {
        cy.get('.slide').each(($slide, index) => {

          cy.wrap($slide).scrollIntoView();
          // Extract image and text content
          cy.wrap($slide).find('img').should('be.visible').and('have.attr', 'src').then((src) => {
            // Perform assertions based on the src or other criteria
            expect(src).to.contain('assets/imgs/');
          });

          cy.wrap($slide).find('.styled-text p').should('be.visible').and(($p) => {
            // You can make more specific checks based on known characteristics
            expect($p.text()).to.not.be.empty;
            expect($p.text()).to.match(/JavaScript|Python|Java|TypeScript|C|C\+\+|HTML|CSS/);
          });
        });
      });

      it('should have the correct background color', () => {
        cy.get('.slider-track').should('have.css', 'background-color').and('eq', 'rgba(0, 0, 0, 0)');
      });
    })
  })

  // Tools and frameworks section
  context('Tools and Frameworks', () => {
    it('The section is visible', () => {
      cy.xpath('/html/body/section[6]/div').should('be.visible')
    })

    it('The section background color is correct', () => {
      cy.xpath('/html/body/section[6]/div').should('be.visible')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })

    context('Text', () => {
      it('The title text is visible', () => {
        cy.xpath('/html/body/section[6]/div/h6').should('be.visible')
      })

      it('The title text has the correct color', () => {
        cy.xpath('/html/body/section[6]/div/h6').should('be.visible')
        .should('have.text', 'Tools and Frameworks')
      })

      it('The title text has the correct color', () => {
        cy.xpath('/html/body/section[6]/div/h6').should('be.visible')
        .should('have.css', 'color', 'rgb(105, 90, 166)')
      })

      it('The subtitle text is visible', () => {
        cy.xpath('/html/body/section[6]/div/div[1]/p').should('be.visible')
      })

      it('The subtitle text has the correct color', () => {
        cy.xpath('/html/body/section[6]/div/div[1]/p').should('be.visible')
        .should('have.text', 'How I Do')
      })

      it('The subtitle text has the correct color', () => {
        cy.xpath('/html/body/section[6]/div/div[1]/p').should('be.visible')
        .should('have.css', 'color', 'rgb(17, 17, 17)')
      })
    })

    context('Tools and Frameworks', () => {
      context('Tool 1', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[1]').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[1]/div/div/h6').should('be.visible')
          .should('have.text', 'Cypress').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[1]/div/div/img').should('be.visible')
        })
      })

      context('Tool 2', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[2]').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[2]/div/div/h6').should('be.visible')
          .should('have.text', 'Selenium').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[2]/div/div/img').should('be.visible')
        })
      })

      context('Tool 3', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[3]').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[3]/div/div/h6').should('be.visible')
          .should('have.text', 'TestCafe').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[3]/div/div/img').should('be.visible')
        })
      })

      context('Tool 4', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[4]').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[4]/div/div/h6').should('be.visible')
          .should('have.text', 'Cucumber').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[2]/div[4]/div/div/img').should('be.visible')
        })
      })

      context('Tool 5', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[1]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[1]/div/div/h6').should('be.visible')
          .should('have.text', 'Nightwatch').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[1]/div/div/img').should('be.visible')
        })
      })

      context('Tool 6', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[2]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[2]/div/div/h6').should('be.visible')
          .should('have.text', 'Playwright').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[2]/div/div/img').should('be.visible')
        })
      })

      context('Tool 7', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[3]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[3]/div/div/h6').should('be.visible')
          .should('have.text', 'JUnit').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[3]/div/div/img').should('be.visible')
        })
      })

      context('Tool 8', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[4]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[4]/div/div/h6').should('be.visible')
          .should('have.text', 'PyTest').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[3]/div[4]/div/div/img').should('be.visible')
        })
      })

      context('Tool 9', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[1]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[1]/div/div/h6').should('be.visible')
          .should('have.text', 'EsLint').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[1]/div/div/img').should('be.visible')
        })
      })

      context('Tool 10', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[2]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[2]/div/div/h6').should('be.visible')
          .should('have.text', 'Prettier').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[2]/div/div/img').should('be.visible')
        })
      })

      context('Tool 11', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[3]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[3]/div/div/h6').should('be.visible')
          .should('have.text', 'K6').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[3]/div/div/img').should('be.visible')
        })
      })

      context('Tool 12', () => {
        it('The tool is visible',() => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[4]/div/div').should('be.visible')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[4]/div/div/h6').should('be.visible')
          .should('have.text', 'Apache JMeter').should('have.css', 'color', 'rgb(51, 51, 51)')
        })

        it('The logo is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[4]/div[4]/div/div/img').should('be.visible')
        })
      })
    })
  })

  // Certifications section
  context('Certifications', () => {
    it('The section is visible', () => {
      cy.xpath('//*[@id="certifications"]').should('be.visible')
    })

    it('The section background color is correct', () => {
      cy.get('#certifications').should('be.visible')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })

    // context('Text', () => {
    //   it('The title text is visible', () => {
    //     cy.xpath('/html/body/section[7]/div/h6').should('be.visible')
    //   })

    //   it('The title text has the correct color', () => {
    //     cy.xpath('/html/body/section[7]/div/h6').should('be.visible')
    //       .should('have.text', 'Certifications')
    //   })

    //   it('The title text has the correct color', () => {
    //     cy.xpath('/html/body/section[7]/div/h6').should('be.visible')
    //       .should('have.css', 'color', 'rgb(105, 90, 166)')
    //   })

    //   it('The subtitle text is visible', () => {
    //     cy.xpath('/html/body/section[7]/div/div[1]/p').should('be.visible')
    //   })

    //   it('The subtitle text has the correct color', () => {
    //     cy.xpath('/html/body/section[7]/div/div[1]/p').should('be.visible')
    //       .should('have.text', 'From where I have done')
    //   })

    //   it('The subtitle text has the correct color', () => {
    //     cy.xpath('/html/body/section[7]/div/div[1]/p').should('be.visible')
    //       .should('have.css', 'color', 'rgb(17, 17, 17)')
    //   })
    // })

    context('Certificates', () => {
      context('Certificate 1', () => {
        it('The certificate is visible', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[1]').should('be.visible')
        })

        it('The background color is correct', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[1]').should('be.visible')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        })

        it('The text is visible, correct and has the correct color', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[1]/h2').should('be.visible')
            .should('have.text', 'ISTQB Certified Tester Foundation Level (CTFL)')
            .should('have.css', 'color', 'rgb(111, 66, 193)')

          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[1]/p')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
              const normalizedText = text.replace(/\s+/g, ' ').trim();
              expect(normalizedText).to.eq('International Software Testing Qualifications Board - Issued: June 2024');
            })
        })

        it('The text color is correct', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[1]/p')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(85, 85, 85)')
        })
      })

      context('Certificate 2', () => {
        it('The certificate is visible', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[2]').should('be.visible')
        })

        it('The background color is correct', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[2]').should('be.visible')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        })

        it('The text is visible, correct and has the correct color', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[2]/h2').should('be.visible')
            .should('have.text', 'Certified Associate in Software Testing (CAST)')
            .should('have.css', 'color', 'rgb(111, 66, 193)')

          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[2]/p').should('be.visible')
            .should('have.text', 'Great Learning Academy - Issued: April 2024')
            .should('have.css', 'color', 'rgb(85, 85, 85)')
        })
      })

      context('Certificate 3', () => {
        it('The certificate is visible', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[3]').should('be.visible')
        })

        it('The background color is correct', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[3]').should('be.visible')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        })

        it('The text is visible, correct and has the correct color', () => {
          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[3]/h2').should('be.visible')
            .should('have.text', 'Certified Associate in Software Quality (CASQ)')
            .should('have.css', 'color', 'rgb(111, 66, 193)')

          cy.xpath('/html/body/section[7]/div/div[2]/ul/li[3]/p').should('be.visible')
            .should('have.text', 'Great Learning Academy - Issued: April 2024')
            .should('have.css', 'color', 'rgb(85, 85, 85)')
        })
      })
    })
  })

  // Blogs section
  context('Blogs', () => {
    it('The blogs section is visible', () => {
      cy.get('#blog').should('be.visible')
    })

    it('The background color is correct', () => {
      cy.get('#blog').should('be.visible')
        .should('have.css', 'background-color', 'rgb(105, 90, 166)')
    })

    context('Text', () => {
      it('The text is visible', () => {
        cy.xpath('/html/body/section[8]/div/div/div[1]/h2').should('be.visible')
      })

      it('The sub text is visible', () => {
        cy.xpath('/html/body/section[8]/div/div/div[1]/p').should('be.visible')
      })

      it('The text has the correct background color', () => {
        cy.xpath('/html/body/section[8]/div/div/div[1]/h2').should('be.visible')
          .should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.xpath('/html/body/section[8]/div/div/div[1]/p').should('be.visible')
          .should('have.css', 'color', 'rgb(248, 249, 250)')
      })

      it('The text is correct', () => {
        cy.xpath('/html/body/section[8]/div/div/div[1]/h2').should('be.visible')
          .should('have.text', 'Latest Blogs')
        cy.xpath('/html/body/section[8]/div/div/div[1]/p').should('be.visible')
          .should('have.text', 'Want to read more about what I write?')
      })
    })

    context('Button', () => {
      it('The button is visible', () => {
        cy.xpath('/html/body/section[8]/div/div/div[2]/button').should('be.visible')
      })

      it('The button has the correct background color', () => {
        cy.xpath('/html/body/section[8]/div/div/div[2]/button').should('be.visible')
          .should('have.css', 'background-color', 'rgb(248, 249, 250)')
      })

      it('The button has the correct text', () => {
        cy.xpath('/html/body/section[8]/div/div/div[2]/button').should('be.visible')
          .contains('Read More')
      })

      it('The button is clickable', () => {
        cy.xpath('/html/body/section[8]/div/div/div[2]/button').should('be.visible').click()
      })
    })
  })

  // Contact Section
  context('Contact', () => {

    it('The section is visible', () => {
      cy.get('.section #contact .container.text-center').should('be.visible')
    })

    it('The background color is correct', () => {
      cy.get('#contact').should('be.visible')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })

    context('Text', () => {
      context('Title text', () => {
        it('The text is visible', () => {
          cy.xpath('/html/body/section[9]/div/h6').should('be.visible')
        })

        it('The text is correct', () => {
          cy.xpath('/html/body/section[9]/div/h6').should('be.visible')
            .should('have.text', 'Contact Me')
        })

        it('The text color is correct', () => {
          cy.xpath('/html/body/section[9]/div/h6').should('be.visible')
            .should('have.css', 'color', 'rgb(105, 90, 166)')
        })
      })

      context('Subtext', () => {
        it('The text is visible', () => {
          cy.get('#contact .section-subtitle').should('be.visible')
        })

        it('The text is correct', () => {
          cy.get('#contact .section-subtitle').should('be.visible')
            .should('have.text', 'Reach out to Me')
        })

        it('The text color is correct', () => {
          cy.get('#contact .section-subtitle').should('be.visible')
            .should('have.css', 'color', 'rgb(17, 17, 17)')
        })
      })
    })

    context('Contact Cards', () => {
      context('Email card', () => {
        it('The card is visible', () => {
          cy.xpath('/html/body/section[9]/div/div/div[1]/div')
            .should('be.visible')
        })

        it('The card has the correct background color', () => {
          cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]').should('be.visible')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        })

        it('The border color is correct', () => {
          cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]').should('be.visible')
            .should('have.css', 'border', '2px solid rgb(105, 90, 166)')
        })

        context('Mail icon', () => {
          it('The mail icon is visible', () => {
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[1]/img')
              .should('be.visible')
          })
        })

        context('Text', () => {
          it('The text is visible', () => {
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]/p').should('be.visible')
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]/h6/a').should('be.visible')
          })

          it('The text is correct', () => {
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]/p').should('be.visible')
              .contains('Reach out to me on my email address.')
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]/h6/a').should('be.visible')
              .contains('hammadrashid2001@gmail.com')
          })

          it('The text has the correct color', () => {
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]/p').should('be.visible')
              .should('have.css', 'color', 'rgb(17, 17, 17)')
            cy.xpath('/html/body/section[9]/div/div/div[1]/div/div[2]/h6/a').should('be.visible')
              .should('have.css', 'color', 'rgb(105, 90, 166)')
          })
        })
      })

      context('Phone card', () => {
        it('The card is visible', () => {
          cy.xpath('/html/body/section[9]/div/div/div[2]/div').should('be.visible')
        })

        it('The card has the correct background color', () => {
          cy.xpath('/html/body/section[9]/div/div/div[2]/div').should('be.visible')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        })

        it('The border color is correct', () => {
          cy.xpath('/html/body/section[9]/div/div/div[2]/div').should('be.visible')
            .should('have.css', 'border', '0px none rgb(33, 37, 41)')
        })

        context('Phone icon', () => {
          it('The phone icon is visible', () => {
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[1]/img')
              .should('be.visible')
          })
        })

        context('Text', () => {
          it('The text is visible', () => {
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[2]/p').should('be.visible')
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[2]/h6/a').should('be.visible')
          })

          it('The text is correct', () => {
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[2]/p').should('be.visible')
              .contains('You can contact me on my cell number as well.')
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[2]/h6/a').should('be.visible')
              .contains('+92 304-9679489')
          })

          it('The text has the correct color', () => {
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[2]/p').should('be.visible')
              .should('have.css', 'color', 'rgb(17, 17, 17)')
            cy.xpath('/html/body/section[9]/div/div/div[2]/div/div[2]/h6/a').should('be.visible')
              .should('have.css', 'color', 'rgb(105, 90, 166)')
          })
        })
      })
    })

    context('Scroll Button', () => {
      it('The button is visible', () => {
        cy.xpath('//*[@id="scrollBtn"]').scrollIntoView().should('be.visible')
      })

      it('The button is clickable', () => {
        cy.xpath('//*[@id="scrollBtn"]').scrollIntoView().should('be.visible')
          .click()
      })
    })
  })
})
