// Function to check if body is visible
function isVisible() {
    it('The body is visible', () => {
        cy.get('body').should('be.visible')
    })
}

describe('Solutions Page', () => {
    beforeEach(() => {
        cy.visit('https://www.husky.ag/')
        cy.visit('https://www.husky.ag/solution')
    })

    it('Opens the homepage', () => {

    })

    it('The body is visible', () => {
        isVisible()
    })

    context('Body', () => {
        context('Background', () => {
            it('The background is visible', () => {
                isVisible()
            })
        })

        context('Navbar', () => {
            it('The navbar is visible', () => {
                cy.xpath('/html/body/section[1]').should('exist')
            })
        })

        context('Hero section', () => {
            it('The hero container is visible', () => {
                cy.xpath('/html/body/section[2]').should('exist')
            })

            it('The hero section container has correct background image', () => {
                cy.xpath('/html/body/section[2]').should('exist')
                    .should('have.css', 'background-image')
            })

            context('Heading text', () => {
                it('The heading text is visible', () => {
                    cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                })

                it('The heading text is correct', () => {
                    cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                        .should('have.text', 'Solution')
                })

                it('The heading text is correct', () => {
                    cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                })
            })

            context('Body Text', () => {
                it('The body text is visible', () => {
                    cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                })

                it('The body text is correct', () => {
                    cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                        .should('have.text', 'Aiming to reduce environmental contamination and repurpose coffee byproducts, we developed a biofertilizer from coffee pulp and mucilage that enhances productivity by promoting crop growt h and metabolism.')
                })

                it('The body text is correct', () => {
                    cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                })
            })
        })

        context('Cards', () => {
            it('The cards section is visible', () => {
                cy.xpath('/html/body/section[3]').should('exist')
            })

            // Card 1
            context('Card 1', () => {
                it('The card 1 is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]').should('exist')
                })

                context('Heading', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
                            .should('have.text', 'Plant Growth Regulators')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })
                })

                context('Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
                            .should('have.text', 'We discovered unique microorganisms in the coffee fruit that have a powerful effect onplant metabolism & growth receptors.')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })
                })
            })

            // Card 2
            context('Card 2', () => {
                it('The card 2 is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]').should('exist')
                })

                context('Heading', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
                            .should('have.text', 'Byproduct Innovation')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })
                })

                context('Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
                            .should('have.text', 'We developed a process to capture discarded pulp & mucilage in the coffee milling processas a foundation for our natural biofertilizer')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })
                })
            })

            // Card 3
            context('Card 3', () => {
                it('The card 3 is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]').should('exist')
                })

                context('Heading', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
                            .should('have.text', 'Nitrogen Use Efficiency')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })
                })

                context('Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
                            .should('have.text', 'Our biofertilizer enhances yields, improves stress adaptation and enhances crop qualitywhile reducing chemical fertilizer usage.')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })
                })
            })
        })

        context('Why does Nitrogen Use Efficiency Matter?', () => {
            it('The section is visible', () => {
                cy.xpath('/html/body/section[4]').should('be.visible')
            })

            it('The section has correct color displayed', () => {
                cy.xpath('/html/body/section[4]').should('be.visible').should('have.css', 'background-color', 'rgb(255, 251, 251)')
            })

            it('The heading text is visible', () => {
                cy.xpath('/html/body/section[4]/div/div[1]/h1').should('exist')
            })

            it('The heading text is correct', () => {
                cy.xpath('/html/body/section[4]/div/div[1]/h1').should('exist')
                    .should('have.text', 'Why does Nitrogen Use Efficiency matter?')
            })

            context('Cards', () => {
                context('Card 1', () => {
                    it('The card 1 is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/div[2]').should('exist')
                    })

                    context('Content', () => {
                        context('Text', () => {
                            it('The text is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/p').should('exist')
                            })

                            it('The text is correct', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/p').should('exist')
                                    .should('have.text', 'It reduces economic losses from low yields and poor quality.')
                            })

                            it('The icon is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/div[1]/img[2]').should('exist')
                            })
                        })
                    })
                })

                context('Card 2', () => {
                    it('The card 2 is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/div[2]').should('exist')
                    })

                    context('Content', () => {
                        context('Text', () => {
                            it('The text is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/p').should('exist')
                            })

                            it('The text is correct', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/p').should('exist')
                                    .should('have.text', 'It improves the sustainable use of natural resources.')
                            })

                            it('The icon is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/div[1]/img[2]').should('exist')
                            })
                        })
                    })
                })

                context('Card 3', () => {
                    it('The card 3 is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/div[2]').should('exist')
                    })

                    context('Content', () => {
                        context('Text', () => {
                            it('The text is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/p').should('exist')
                            })

                            it('The text is correct', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/p').should('exist')
                                    .should('have.text', 'It reduces pollution from nitrogen fertilizer.')
                            })

                            it('The icon is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/div[1]/img[2]').should('exist')
                            })
                        })
                    })
                })

                context('Card 4', () => {
                    it('The card 4 is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/div[2]').should('exist')
                    })

                    context('Content', () => {
                        context('Text', () => {
                            it('The text is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/p').should('exist')
                            })

                            it('The text is correct', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/p').should('exist')
                                    .should('have.text', 'Lower costs are made available by applying a lower amount of nitrogen fertilizer while maintaining crop yield and quality..')
                            })

                            it('The icon is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/div[1]/img[2]').should('exist')
                            })
                        })
                    })
                })

                context('Card 5', () => {
                    it('The card 5 is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/div[2]').should('exist')
                    })

                    context('Content', () => {
                        context('Text', () => {
                            it('The text is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/p').should('exist')
                            })

                            it('The text is correct', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/p').should('exist')
                                    .should('have.text', 'Lower environmental impacts, particularly on water quality, result from reduced leaching and less volatilization losses of nitrogen.')
                            })

                            it('The icon is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/div[1]/img[2]').should('exist')
                            })
                        })
                    })
                })

                context('Card 6', () => {
                    it('The card 6 is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/div[2]').should('exist')
                    })

                    context('Content', () => {
                        context('Text', () => {
                            it('The text is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/p').should('exist')
                            })

                            it('The text is correct', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/p').should('exist')
                                    .should('have.text', 'Higher protein content in grain boosts the crop value and enhances the conversion of animal feed to consumable meat or milk.')
                            })

                            it('The icon is visible', () => {
                                cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/div[1]/img[2]').should('exist')
                            })
                        })
                    })
                })
            })
        })

        context('Person Section', () => {
            it('The section is visible', () => {
              cy.xpath('/html/body/section[5]').should('be.visible')
            })
    
            it('The background color is green', () => {
              cy.xpath('/html/body/section[5]').should('be.visible').should('have.css', 'background-color', 'rgb(122, 166, 108)')
            })
    
            it('The image of the person is visible', () => {
              cy.xpath('//*[@id="w-node-da4785d6-a8d3-2951-af6b-0e7a13224a76-b08f1656"]').should('exist')
            })
    
            it('The text is visible', () => {
              cy.xpath('/html/body/section[5]/div/div/div/p').should('exist')
            })
    
            it('The text is correct displayed on the screen', () => {
              cy.xpath('/html/body/section[5]/div/div/div/p').should('exist')
              .should('have.text', '“It’s about balance. When we work together to understand the science and the constraints, we can design a system that maximizes nitrogen efficiency and minimizes impact on the environment.”')
            })
    
            it('The text is white in color', () => {
              cy.xpath('/html/body/section[5]/div/div/div/p').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
    
            it('The heading Dr.Patrick Brown is visible', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/div/h5').should('exist')
            })
    
            it('The heading is white in color', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/div/h5').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
    
            it('The heading has correct text', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/div/h5').should('exist').should('have.text', 'Dr. Patrick Brown')
            })
    
            it('The text below the heading Dr.Patrick Brown is visible', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/div/div').should('exist')
            })
    
            it('The text below the heading Dr.Patrick Brown is correct', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/div/div').should('exist').should('have.text', 'Husky Advisor, Professor of Plant Nutrition, UC Davis Department of Plant Sciences')
            })
    
            it('The text below the heading Dr.Patrick Brown is white in color', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/div/div').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
    
            it('The linkedin icon is visible', () => {
              cy.xpath('/html/body/section[5]/div/div/div/div/div/a/img').should('exist')
            })
    
            it('The linkedin is clickable', () => {
              cy.wait(5)
              cy.xpath('/html/body/section[5]/div/div/div/div/div/a/img').should('exist').click({force: true})
            })
    
            it('The linkedin icon when clicked takes me to the LinkedIn Page of Dr.Patrick Brown', () => {
              cy.wait(5)
              cy.xpath('/html/body/section[5]/div/div/div/div/div/a/img').should('exist').click({ force: true })
              cy.url('eq', 'https://www.linkedin.com/checkpoint/challengesV2/AQFHd-eJosWn3wAAAY0cr38uxOMeJndaN86D3TejvXuwq_CYssX7CSZhmlKS9J4DGpoAZSjkw8IX0hK0EFlcbuCNgVYNnNd4Aw?original_referer=https%3A%2F%2Fwww.husky.ag%2F')
            })
        })

        context('Image above footer', () => {
            context('Image', () => {
              it('The image is visible', () => {
                cy.xpath('//*[@id="w-node-_146554d9-7110-0e3b-9e07-0ba643883ad3-43883ac6"]').should('exist')
              })
            })
  
            context('Text Image', () => {
              it('The container is visible', () => {
                cy.xpath('//*[@id="w-node-_146554d9-7110-0e3b-9e07-0ba643883aca-43883ac6"]').should('exist')
              })
  
              it('The container color is correct', () => {
                cy.xpath('//*[@id="w-node-_146554d9-7110-0e3b-9e07-0ba643883aca-43883ac6"]').should('exist')
                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
              })
  
              it('The heading text is visible', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/h1').should('exist')
              })
  
              it('The heading text is correct', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/h1', { timeout: 10000 }) 
                .should('exist')
                .invoke('text') 
                .then((actualText) => {
                  const expectedText = 'We redefine plant nutrition through coffee byproducts.'
                  expect(actualText.replace(/\s/g, '')).to.equal(expectedText.replace(/\s/g, ''))
                })
              })
  
              it('The text is visible', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/p').should('exist')
              })
  
              it('The text is correct', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/p').should('exist')
                .should('have.text', 'Our mission is to elevate existing agricultural practices with a focus on nitrogen use efficiency, circular economies and climate impact.')
              })
  
              it('The color of the text is correct', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/p').should('exist').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
              })
  
              it('The learn more button is visible', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/a').should('exist')
              })
  
              it('The learn more button is clickable and directs me to Learn More page', () => {
                cy.xpath('/html/body/section[7]/div/div[1]/div/div/a').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/learn-more')
              })
            })
        })
    })
})
