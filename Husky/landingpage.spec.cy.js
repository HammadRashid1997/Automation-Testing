describe('Husky Landing Page', () => {
  beforeEach(() => {
    cy.visit('https://www.husky.ag/')
  })

  it('Opens the homepage', () => {

  })

  it('Opens the screen', () => {
    cy.get('body').should('be.visible')
  })

  // Navbar
  context('Navbar', () => {
    it('The navbar is visible', () => {
      cy.get('.header-section').should('be.visible')
    })

    // Husky Logo
    context('Husky logo', () => {
      it('The navbar has Husky logo', () => {
        cy.get('.nav-logo.w-nav-brand').should('be.visible')
      })

      it('The husky logo is clickable', () => {
        cy.get('.nav-logo.w-nav-brand').should('be.visible').click()
      })

      it('The husky logo when clicked takes him to the home page', () => {
        cy.get('.nav-logo.w-nav-brand').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/');
      })
    })

    // Home button
    context('Home button', () => {
      it('The navbar has Home button', () => {
        cy.get('.nav-link.w-nav-link.w--current').should('be.visible')
      })

      it('The home button is clickable', () => {
        cy.get('.nav-link.w-nav-link.w--current').should('be.visible').click()
      })

      it('The home button when clicked takes me to the Home page', () => {
        cy.get('.nav-link.w-nav-link.w--current').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/');
      })
    })

    // Products button
    context('Products button', () => {
      it('The navbar has Products button', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[2]').should('be.visible')
      })

      it('The products button has correct text', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[2]').should('be.visible').should('have.text', 'Products')
      })

      it('The products button is clickable', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[2]').should('be.visible').click()
      })

      it('The products button when clicked takes me to the Products page', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[2]').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/products');
      })
    })

    // Solutions button
    context('Solutions button', () => {
      it('The navbar has Solutions button', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[3]').should('be.visible')
      })

      it('The solutions button has correct text', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[3]').should('be.visible').should('have.text', 'Solutions')
      })

      it('The solutions button is clickable', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[3]').should('be.visible').click()
      })

      it('The solutions button when clicked takes me to the Solutions page', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[3]').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/solution');
      })
    })

    // About Us button
    context('About Us button', () => {
      it('The navbar has About Us button', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[4]').should('be.visible')
      })

      it('The about us button has correct text', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[4]').should('be.visible').should('have.text', 'About us')
      })

      it('The about us button is clickable', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[4]').should('be.visible').click()
      })

      it('The about us button when clicked takes me to the About Us page', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[4]').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/our-mission');
      })
    })

    // Sustainability button
    context('Sustainability button', () => {
      it('The navbar has Sustainability button', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[5]').should('be.visible')
      })

      it('The Sustainability button has correct text', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[5]').should('be.visible').should('have.text', 'Sustainability')
      })

      it('The Sustainability button is clickable', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[5]').should('be.visible').click()
      })

      it('The Sustainability button when clicked takes me to the Sustainability page', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[5]').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/sustainability');
      })
    })

    // Contact Us button
    context('Contact Us button', () => {
      it('The navbar has Contact Us button', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[6]').should('be.visible')
      })

      it('The Contact Us button has green background', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[6]').should('be.visible').should('have.css', 'background-color', 'rgb(122, 166, 108)')
      })

      it('The button can be hovered ', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[6]').trigger('mouseover')
      })

      it('The Contact Us button has correct text', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[6]').should('be.visible').should('have.text', 'Contact Us')
      })

      it('The Contact Us button is clickable', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[6]').should('be.visible').click()
      })

      it('The Contact Us button when clicked takes me to the Contact Us page', () => {
        cy.xpath('/html/body/section[1]/div/div[1]/nav/a[6]').should('be.visible').click()
        cy.url().should('eq', 'https://www.husky.ag/contact-us');
      })
    })
  })

  // Landing Page/Home Page
  context('Home Page', () => {
    context('Hero Section', () => {
      it('The hero section is visible', () => {
        cy.get('.hero-section').should('be.visible')
      })

      it('The title text is visible and correct', () => {
        cy.xpath('/html/body/section[2]/div/div/h1').should('be.visible').should('have.text', 'The Future of Plant Nutrition is Fertilizer as a Service')
      })

      context('Span text', () => {
        it('The span text is correct and visible', () => {
          cy.xpath('/html/body/section[2]/div/div/h1/span').should('be.visible').should('have.text', 'Fertilizer as a Service')
        })
      })

      context('Paragraph text', () => {
        it('The paragraph text is correct and visible', () => {
          cy.xpath('/html/body/section[2]/div/div/p').should('be.visible').should('have.text', 'We produce an innovative biofertilizer using coffee byproducts to promote fertilizer use efficiency, optimize nutrient release & increase crop yield.')
        })
      })

      context('Learn More button', () => {
        it('The learn more button is visible', () => {
          cy.xpath('/html/body/section[2]/div/div/a').should('be.visible')
        })

        it('The learn more button has correct background color', () => {
          cy.xpath('/html/body/section[2]/div/div/a').should('be.visible').should('have.css', 'background-color', 'rgb(122, 166, 108)')
        })

        it('The learn more button has correct text in it', () => {
          cy.xpath('/html/body/section[2]/div/div/a').should('be.visible').should('have.text', 'learn more')
        })

        it('The learn more button is directed to correct page', () => {
          cy.xpath('/html/body/section[2]/div/div/a').should('be.visible').click()
          cy.wait(6000)
          cy.url().should('eq', 'https://www.husky.ag/learn-more')
        })
      })
    })

    // Cards section
    context('Cards Section', () => {
      it('The cards section is visible', () => {
        cy.xpath('/html/body/section[3]').should('be.visible')
      })

      context('Card 1', () => {
        it('The card 1 is visible', () => {
          cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]').should('exist')
        })

        context('Title', () => {
          it('The card1 has title visible', () => {
            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
          })

          it('The card1 has correct title', () => {
            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist').should('have.text', 'crop yield')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })
        })

        context('Text', () => {
          it('The card1 has text visible', () => {
            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
          })

          it('The card1 has correct text', () => {
            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist').should('have.text', 'We increase yields and productivity, improve soil health and drive farm revenues.')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })
        })
      })

      context('Card 2', () => {
        it('The card 2 is visible', () => {
          cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]').should('exist')
        })

        context('Title', () => {
          it('The card 2 has title visible', () => {
            cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
          })

          it('The card 2 has correct title', () => {
            cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
            .should('have.text', 'Profitability')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })
        })

        context('Text', () => {
          it('The card 2 has text visible', () => {
            cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
          })

          it('The card 2 has correct text', () => {
            cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
            .should('have.text', 'We reduce the use of chemical fertilizers, boost plant nutrition and optimize profit margin.')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })
        })
      })

      context('Card 3', () => {
        it('The card 3 is visible', () => {
          cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]').should('exist')
        })

        context('Title', () => {
          it('The card 2 has title visible', () => {
            cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
          })

          it('The card 2 has correct title', () => {
            cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
            .should('have.text', 'Impact')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })
        })

        context('Text', () => {
          it('The card 2 has text visible', () => {
            cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
          })

          it('The card 2 has correct text', () => {
            cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
            .should('have.text', 'We reduce coffee byproduct waste and create circular economies around the world.')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          })
        })
      })
    })

    context('Superfood Bottle Section', () => {
      it('The superfood bottle section is visible', () => {
        cy.get('.superfood-bottle-section').should('be.visible')
      })

      context('Image container', () => {
        it('The image container is visible', () => {
          cy.xpath('//*[@id="w-node-_46497585-e275-d4f7-3756-502d307f6f5c-bb4d16b1"]').should('be.visible')
        })

        context('Image', () => {
          it('The text container is visible', () => {
            cy.xpath('//*[@id="w-node-_0082d12a-dcc5-8063-b20f-41598fec125e-bb4d16b1"]').should('be.visible')
          })
  
          context('Heading h1', () => {
            it('The text has heading h1 visible', () => {
              cy.xpath('/html/body/section[5]/div/div/div[3]/h1').should('be.visible')
            })

            it('The text has correct heading text', () => {
              cy.xpath('/html/body/section[5]/div/div/div[3]/h1').should('be.visible').should('have.text', 'Increase Fertilizer efficiency without sacrificing crop yield & quality')
            })

            context('Text', () => {
              const firstTextSelector = '.super-food-list-1-wrapper .superfood-list-title';
              const secondTextSelector = '.super-food-list-2-wrapper .superfood-list-title';
            
              context('Text 1', () => {
                it('The first text heading is visible and correct', () => {
                  cy.get(firstTextSelector, { force: true })
                    .should('exist')
                    .should('have.text', 'An alternative to traditional fertilizers');
                })
            
                it('The first text text is visible and correct', () => {
                  cy.get('.super-food-list-1-wrapper p', { force: true })
                    .should('exist')
                    .should('have.text', 'We produce a biofertilizer from repurposed coffee byproducts, harnessing the benefits of metabolites, microorganisms & amino acids in the coffee fruit.');
                })

                it('The icon is visible', () => {
                  cy.xpath('//*[@id="w-node-_17c52039-ea8f-9617-ea17-06c18338a4d1-bb4d16b1"]').should('exist')
                })
              })
            
              context('Text 2', () => {
                it('The second text heading is visible and correct', () => {
                  cy.get(secondTextSelector, { force: true })
                    .should('exist')
                    .should('have.text', 'Proven results & enormous potential');
                })
            
                it('The second text text is visible and correct', () => {
                  cy.get('.super-food-list-2-wrapper p', { force: true })
                    .should('exist')
                    .should('have.text', 'From amplicon DNA sequencing, R&D has confirmed that our biofertilizer enhances crop yield, increases drought tolerance and improves stress adaptation.');
                })

                it('The icon is visible', () => {
                  cy.xpath('//*[@id="w-node-_72fa6d99-c906-b1ec-3a60-13df03b3cb39-bb4d16b1"]').should('exist')
                })
              })
            })
          })
        })
      })
    })

    context('Main Ingredients Container', () => {
      it('The container is visible', () => {
        cy.xpath('/html/body/section[6]').should('be.visible')
      })

      context('Title text',  () => {
        it('The title text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[1]/h1').should('be.visible')
        })

        it('The title text has span element as well', () => {
          cy.xpath('/html/body/section[6]/div/div[1]/h1/span').should('be.visible')
        })
      })

      context('Text below Title', () => {
        it('The text is visible', () => {
          cy.xpath('/html/body/section[6]/div/div[1]/p').should('be.visible')
        })
      })

      context('Image', () => {
        it('The image is visible', () => {
          cy.xpath('/html/body/section[6]/div/img').should('exist')
        })
      })

      context('Cards', () => {
        context('Card 1', () => {
          it('The card 1 is visible', () => {
            cy.xpath('/html/body/section[6]/div/img').should('exist')
          })

          it('The card 1 has correct icon visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[1]/div[1]/div/img[2]').should('exist')
          })

          it('The card 1 has correct heading h3 visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[1]/div[1]/h3').should('exist')
            .should('have.text', 'Plant Microbiome')
          })

          it('The card 1 has correct text visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[1]/p').should('exist')
            .should('have.text', 'We discovered microorganisms in the coffee fruit that enhance bioactive compounds and have a powerful effect on plant metabolism & growth regulation.')
          })
        })

        context('Card 2', () => {
          it('The card 2 is visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[2]/div[2]').should('exist')
          })

          it('The card 2 has correct icon visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[2]/div[1]/div/img[2]').should('exist')
          })

          it('The card 2 has correct heading h3 visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[2]/div[1]/h3').should('exist')
            .should('have.text', 'Intellectual Property')
          })

          it('The card 2 has correct text visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[2]/p').should('exist')
            .should('have.text', 'We developed a process to capture discarded coffee pulp & mucilage as a foundation for our natural biofertilizer.')
          })
        })

        context('Card 3', () => {
          it('The card 3 is visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[3]/div[2]').should('exist')
          })

          it('The card 3 has correct icon visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[3]/div[1]/div/img[2]').should('exist')
          })

          it('The card 3 has correct heading h3 visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[3]/div[1]/h3').should('exist')
            .should('have.text', 'Circular Economies')
          })

          it('The card 3 has correct text visible', () => {
            cy.xpath('/html/body/section[6]/div/div[2]/div[3]/p').should('exist')
            .should('have.text', 'We build circular economies in coffee producing regions to improve nutrient use efficiency, crop yields, farms profitability and producers well-being.')
          })
        })
      })

      context('Person Section', () => {
        it('The section is visible', () => {
          cy.xpath('/html/body/section[7]').should('be.visible')
        })

        it('The background color is green', () => {
          cy.xpath('/html/body/section[7]').should('be.visible').should('have.css', 'background-color', 'rgb(122, 166, 108)')
        })

        it('The image of the person is visible', () => {
          cy.xpath('//*[@id="w-node-_2aad5d60-d59b-c076-b0cf-27efee435676-bb4d16b1"]').should('exist')
        })

        it('The text is visible', () => {
          cy.xpath('/html/body/section[7]/div/div/div/p').should('exist')
        })

        it('The text is correct displayed on the screen', () => {
          cy.xpath('/html/body/section[7]/div/div/div/p').should('exist')
          .should('have.text', '“Farmers will be freed to more fully explore the holistic vision of ‘Plant Nutrition’ that includes integrated roles of plant nutrients on stress tolerance, efficiency of resource use, crop quality & whole system sustainability. Consumers will benefit from enhanced & food that could be a lot more nutritious.”')
        })

        it('The text is white in color', () => {
          cy.xpath('/html/body/section[7]/div/div/div/p').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        it('The heading Dr.Patrick Brown is visible', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/div/h5').should('exist')
        })

        it('The heading is white in color', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/div/h5').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        it('The heading has correct text', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/div/h5').should('exist').should('have.text', 'Dr. Patrick Brown')
        })

        it('The text below the heading Dr.Patrick Brown is visible', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/div/div').should('exist')
        })

        it('The text below the heading Dr.Patrick Brown is correct', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/div/div').should('exist').should('have.text', 'Husky Advisor, Professor of Plant Nutrition, UC Davis Department of Plant Sciences')
        })

        it('The text below the heading Dr.Patrick Brown is white in color', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/div/div').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        it('The linkedin icon is visible', () => {
          cy.xpath('/html/body/section[7]/div/div/div/div/div/a/img').should('exist')
        })

        it('The linkedin is clickable', () => {
          cy.wait(5)
          cy.xpath('/html/body/section[7]/div/div/div/div/div/a/img').should('exist').click({force: true})
        })

        it('The linkedin icon when clicked takes me to the LinkedIn Page of Dr.Patrick Brown', () => {
          cy.wait(5)
          cy.xpath('/html/body/section[7]/div/div/div/div/div/a/img').should('exist').click({ force: true })
          cy.url('eq', 'https://www.linkedin.com/checkpoint/challengesV2/AQFHd-eJosWn3wAAAY0cr38uxOMeJndaN86D3TejvXuwq_CYssX7CSZhmlKS9J4DGpoAZSjkw8IX0hK0EFlcbuCNgVYNnNd4Aw?original_referer=https%3A%2F%2Fwww.husky.ag%2F')
        })
      })

      context('Why does Nitrogen Use Efficiency Matter?', () => {
        it('The section is visible', () => {
          cy.xpath('/html/body/section[8]').should('be.visible')
        })

        it('The section has correct color displayed', () => {
          cy.xpath('/html/body/section[8]').should('be.visible').should('have.css', 'background-color', 'rgb(255, 251, 251)')
        })

        it('The heading text is visible', () => {
          cy.xpath('/html/body/section[8]/div/div[1]/h1').should('exist')
        })

        it('The heading text is correct', () => {
          cy.xpath('/html/body/section[8]/div/div[1]/h1').should('exist')
          .should('have.text', 'Why does Nitrogen Use Efficiency matter?')
        })

        context('Cards', () => {
          context('Card 1', () => {
            it('The card 1 is visible', () => {
              cy.xpath('/html/body/section[8]/div/div[2]/div/div[1]/div[2]').should('exist')
            })

            context('Content', () => {
              context('Text', () => {
                it('The text is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[1]/p').should('exist')
                })

                it('The text is correct', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[1]/p').should('exist')
                  .should('have.text', 'It reduces economic losses from low yields and poor quality.')
                })

                it('The icon is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[1]/div[1]/img[2]').should('exist')
                })
              })
            })
          })

          context('Card 2', () => {
            it('The card 2 is visible', () => {
              cy.xpath('/html/body/section[8]/div/div[2]/div/div[2]/div[2]').should('exist')
            })

            context('Content', () => {
              context('Text', () => {
                it('The text is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[2]/p').should('exist')
                })

                it('The text is correct', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[2]/p').should('exist')
                  .should('have.text', 'It improves the sustainable use of natural resources.')
                })

                it('The icon is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[2]/div[1]/img[2]').should('exist')
                })
              })
            })
          })

          context('Card 3', () => {
            it('The card 3 is visible', () => {
              cy.xpath('/html/body/section[8]/div/div[2]/div/div[3]/div[2]').should('exist')
            })

            context('Content', () => {
              context('Text', () => {
                it('The text is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[3]/p').should('exist')
                })

                it('The text is correct', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[3]/p').should('exist')
                  .should('have.text', 'It reduces pollution from nitrogen fertilizer.')
                })

                it('The icon is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[2]/div/div[3]/div[1]/img[2]').should('exist')
                })
              })
            })
          })

          context('Card 4', () => {
            it('The card 4 is visible', () => {
              cy.xpath('/html/body/section[8]/div/div[3]/div/div[1]/div[2]').should('exist')
            })

            context('Content', () => {
              context('Text', () => {
                it('The text is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[1]/p').should('exist')
                })

                it('The text is correct', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[1]/p').should('exist')
                  .should('have.text', 'Lower costs are made available by applying a lower amount of nitrogen fertilizer while maintaining crop yield and quality..')
                })

                it('The icon is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[1]/div[1]/img[2]').should('exist')
                })
              })
            })
          })

          context('Card 5', () => {
            it('The card 5 is visible', () => {
              cy.xpath('/html/body/section[8]/div/div[3]/div/div[2]/div[2]').should('exist')
            })

            context('Content', () => {
              context('Text', () => {
                it('The text is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[2]/p').should('exist')
                })

                it('The text is correct', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[2]/p').should('exist')
                  .should('have.text', 'Lower environmental impacts, particularly on water quality, result from reduced leaching and less volatilization losses of nitrogen.')
                })

                it('The icon is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[2]/div[1]/img[2]').should('exist')
                })
              })
            })
          })

          context('Card 6', () => {
            it('The card 6 is visible', () => {
              cy.xpath('/html/body/section[8]/div/div[3]/div/div[3]/div[2]').should('exist')
            })

            context('Content', () => {
              context('Text', () => {
                it('The text is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[3]/p').should('exist')
                })

                it('The text is correct', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[3]/p').should('exist')
                  .should('have.text', 'Higher protein content in grain boosts the crop value and enhances the conversion of animal feed to consumable meat or milk.')
                })

                it('The icon is visible', () => {
                  cy.xpath('/html/body/section[8]/div/div[3]/div/div[3]/div[1]/img[2]').should('exist')
                })
              })
            })
          })
        })

        context('Image above footer', () => {
          context('Image', () => {
            it('The image is visible', () => {
              cy.xpath('//*[@id="w-node-_640e2fde-d09d-26b6-a1a5-29ef0e9034b2-bb4d16b1"]').should('exist')
            })
          })

          context('Text Image', () => {
            it('The container is visible', () => {
              cy.xpath('//*[@id="w-node-_6a41227b-3bcc-7fad-0d90-22ffe7292c68-bb4d16b1"]').should('exist')
            })

            it('The container color is correct', () => {
              cy.xpath('//*[@id="w-node-_6a41227b-3bcc-7fad-0d90-22ffe7292c68-bb4d16b1"]').should('exist')
              .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            })

            it('The heading text is visible', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/h1').should('exist')
            })

            it('The heading text is correct', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/h1', { timeout: 10000 }) 
              .should('exist')
              .invoke('text') 
              .then((actualText) => {
                const expectedText = 'We redefine plant nutrition through coffee byproducts.'
                expect(actualText.replace(/\s/g, '')).to.equal(expectedText.replace(/\s/g, ''))
              })
            })

            it('The text is visible', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/p').should('exist')
            })

            it('The text is correct', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/p').should('exist')
              .should('have.text', 'Our mission is to elevate existing agricultural practices with a focus on nitrogen use efficiency, circular economies and climate impact.')
            })

            it('The color of the text is correct', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/p').should('exist').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            })

            it('The learn more button is visible', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/a').should('exist')
            })

            it('The learn more button is clickable and directs me to Learn More page', () => {
              cy.xpath('/html/body/section[10]/div/div[1]/div/div/a').should('exist').click()
              cy.url('eq', 'https://www.husky.ag/learn-more')
            })
          })
        })

        context('Footer', () => {
          it('The footer container is viisble', () => {
            cy.xpath('/html/body/section[10]').should('exist')
          })

          it('The color of the container is correct', () => {
            cy.xpath('/html/body/section[10]').should('exist').should('have.css', 'background-color', 'rgb(5, 5, 5)')
          })

          it('The husky logo is visible', () => {
            cy.xpath('/html/body/section[10]/div/div[3]/img').should('exist')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/section[10]/div/div[3]/p').should('be.visible')
          })

          context('Below footer', () => {
            it('The last section is visible', () => {
              cy.xpath('/html/body/section[10]/div/div[5]').should('exist')
            })
  
            it('The text is visible', () => {
              cy.xpath('/html/body/section[10]/div/div[5]/div').should('exist')
            })

            it('The text is correct', () => {
              cy.xpath('/html/body/section[10]/div/div[5]/div').should('exist')
              .should('have.text', '© 2023 Husky AG. All rights reserved.')
            })

            it('The text is white in color', () => {
              cy.xpath('/html/body/section[10]/div/div[5]/div').should('exist')
              .should('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
            })
          })

          context('Footer elements', () => {
            context('Home', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[1]').should('exist')
              })

              it('The Home button when clicked takes me to home page', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[1]').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/')
              })
            })

            context('Products', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[2]').should('exist')
              })

              it('The Product button when clicked takes me to products page', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[2]').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/products')
              })
            })

            context('Solution', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[3]').should('exist')
              })

              it('The Solution button when clicked takes me to solutions page', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[3]').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/solutions')
              })
            })

            context('About Us', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[4]').should('exist')
              })

              it('The About Us button when clicked takes me to about us page', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[4]').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/about-us')
              })
            })

            context('Sustainability', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[5]').should('exist')
              })

              it('The Sustainability button when clicked takes me to Sustainability page', () => {
                cy.xpath('/html/body/section[10]/div/div[4]/a[5]').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/sustainability')
              })
            })
          })

          context('Our Newsletter', () => {
            it('The text is visible', () => {
              cy.xpath('/html/body/section[10]/div/div[2]/h1').should('exist')
            })

            it('The text is correct', () => {
              cy.xpath('/html/body/section[10]/div/div[2]/h1').should('exist')
              .should('have.text', 'Our Newsletter')
            })

            context('Email Field', () => {
              it('The field is visible', () => {
                cy.xpath('//*[@id="email"]').should('exist')
              })

              it('The placeholder text is visible', () => {
                cy.xpath('//*[@id="email"]').should('exist').should('have.attr', 'placeholder', 'Enter your Email')
              })
            })

            context('Submit button', () => {
              it('The submit button is visible', () => {
                cy.xpath('/html/body/section[10]/div/div[2]/div/form/input[2]').should('exist')
              })

              it('The submit button has correct background', () => {
                cy.xpath('/html/body/section[10]/div/div[2]/div/form/input[2]').should('exist')
                .should('have.css', 'background-color', 'rgb(122, 166, 108)')
              })

              it('The submit button is clickable', () => {
                cy.xpath('/html/body/section[10]/div/div[2]/div/form/input[2]').should('exist').click()
              })

              it('The submit button when clicked after entering email, it should display a success message', () => {
                cy.xpath('//*[@id="email"]').should('exist').click().type('abc123@gmail.com')
                cy.xpath('/html/body/section[10]/div/div[2]/div/form/input[2]').should('exist').click()
                cy.wait(5)
                cy.xpath('/html/body/section[10]/div/div[2]/div/div[1]/div').should('exist')
              })
            })
          })
        })
      })
    })
  })
})
