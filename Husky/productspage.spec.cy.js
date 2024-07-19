// Function to show body is visible
function isVisible() {
    it('The body is visible', () => {
        cy.get('body').should('be.visible')
    })
}

describe('Products Page', () => {
    beforeEach(() => {
        cy.visit('https://www.husky.ag/')
        cy.visit('https://www.husky.ag/products')
    })

    it('Opens the homepage', () => {

    })

    it('The screen is visible', () => {
        isVisible()
    })

    context('Body', () => {
        context('Background', () => {
            it('The screen is visible', () => {
                isVisible()
            })
        })

        context('Navbar', () => {
            // Just checking if navbar is present, the remaining has been checked in landing page
            it('The navbar is present and visible', () => {
                cy.xpath('/html/body/section[1]').should('be.visible')
            })
        })

        context('Image section', () => {
            context('Text section', () => {
                it('The text section is visible', () => {
                    cy.xpath('//*[@id="w-node-fbbaaf57-e6c7-30d2-fb17-90ede7bbec81-bb4d16b2"]').should('exist')
                })

                context('Heading', () => {
                    it('The text heading is visible', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/h1').should('exist')
                    })
    
                    it('The text heading is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/h1').should('exist')
                        .should('have.text', 'Increase fertilizer efficiency without sacrificing crop yield & quality.')
                    })

                    it('The heading text color is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/h1').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })
                })

                context('Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/p').should('exist')
                    })
    
                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/p').should('exist')
                        .should('have.text', 'Introducing a biofertilizer from repurposed coffee byproducts that harnesses the benefits of metabolites, microorganisms & amino acids in the coffee fruit.')
                    })

                    it('The text color is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/p').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })
                })

                context('Learn More', () => {
                    it('The button is visible', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/a').should('exist')
                    })
    
                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/a').should('exist')
                        .should('have.text', 'Learn More')
                    })

                    it('The text color is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/a').should('exist')
                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })

                    it('The button is clickable', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/a').should('exist').click({force: true})
                    })

                    it('The button when clicked takes me to learn more page', () => {
                        cy.xpath('/html/body/section[2]/div/div[1]/a').should('exist').click({force: true})
                        cy.url('eq', 'https://www.husky.ag/learn-more')
                    })
                })
            })

            context('Image', () => {
                it('The image is visible', () => {
                    cy.xpath('/html/body/section[2]/div/div[2]/img').should('exist')
                })
            })
        })

        context('Cards', () => {
            it('The cards section is visible', () => {
                cy.xpath('/html/body/section[3]').should('exist')
            })

            it('The background color is correct', () => {
                cy.xpath('/html/body/section[3]').should('exist')
                .should('have.css', 'background-color', 'rgb(255, 251, 251)')
            })

            context('Card 1', () => {
                it('The card 1 is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]').should('exist')
                })

                context('Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
                        .should('have.text', 'Coffee Byproducts')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h3').should('exist')
                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })

                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/p').should('exist')
                        .should('have.text', 'We discovered unique microorganisms in the coffee fruit that enhance bioactive compounds and have a powerful effect on plant metabolism & growth regulation.')
                    })

                    it('The heading text has correct color', () => {
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

                context('Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
                        .should('have.text', 'Patented Process')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/h3').should('exist')
                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })

                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]/div[2]/p').should('exist')
                        .should('have.text', 'We developed a process to capture discarded pulp & mucilage in the coffee milling process as a foundation for our natural biofertilizer.')
                    })

                    it('The heading text has correct color', () => {
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

                context('Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
                        .should('have.text', 'Unparalleled Results')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/h3').should('exist')
                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })

                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
                        .should('have.text', 'Our biofertilizer improves stress adaptation and enhances both crop yield and quality while reducing chemical fertilizer inputs.')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[3]/div[2]/p').should('exist')
                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })
                })
            })
        })

        context('Image container', () => {
            context('Image', () => {
                it('The image is visible', () => {
                    cy.xpath('/html/body/section[4]/div/div[1]/img').should('exist')
                })
            })

            context('Text', () => {
                it('The text container is visible', () => {
                    cy.xpath('//*[@id="w-node-_8b024bb1-ceda-51bd-27b1-57ce9cb82c17-bb4d16b2"]').should('exist')
                })

                context('Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/h1').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/h1').should('exist')
                        .should('have.text', 'Harnessing plant nutrients in one of the world’s most important crops')
                    })

                    it('The heading text has correct color', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/h1').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })

                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/p').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/p').should('exist')
                        .should('have.text', 'Husky delivers consistent nutrition throughout the most critical growth stages, regardless of weather and soil. Farmers can reduce their reliance on synthetic nitrogen and deliver better nutrition.')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/p').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })
                })

                context('Learn More', () => {
                    it('The button is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/a').should('exist')
                    })
    
                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/a').should('exist')
                        .should('have.text', 'Learn More')
                    })

                    it('The text color is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/a').should('exist')
                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                    })

                    it('The button is clickable', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/a').should('exist').click({force: true})
                    })

                    it('The button when clicked takes me to learn more page', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/a').should('exist').click({force: true})
                        cy.url('eq', 'https://www.husky.ag/learn-more')
                    })
                })
            })
        })

        context('We discovered a Natural way Section', () => {
            it('The section is visible', () => {
                cy.xpath('/html/body/section[5]').should('exist')
            })

            context('Text', () => {
                context('Heading text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[5]/div/div[1]/h1').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[5]/div/div[1]/h1').should('exist')
                        .should('have.text', 'We discovered a natural way to get more out of our plants')
                    })
                })

                context('Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[5]/div/div[1]/p').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[5]/div/div[1]/p').should('exist')
                        .should('have.text', 'Our formulations are simple, easy-to-use and yield unprecedented results for the world’s most important crops while reducing chemical fertilizer runoff and waste.')
                    })

                    it('The text color is correct', () => {
                        cy.xpath('/html/body/section[5]/div/div[1]/p').should('exist')
                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })
                })

                context('Image', () => {
                    it('The image is visible', () => {
                        cy.xpath('/html/body/section[5]/div/img').should('exist')
                    })
                })
            })

            context('Cards', () => {
                context('Card 1', () => {
                    it('The card 1 is visible', () => {
                        cy.xpath('/html/body/section[5]/div/div[2]/div[1]/div[2]').should('exist')
                    })

                    context('Icon', () => {
                        it('The icon is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/div[1]/div/img[2]').should('exist')
                        })
                    })

                    context('Heading', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/div[1]/h3').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/div[1]/h3').should('exist')
                            .should('have.text', 'Natural')
                        })

                        it('The heading text color is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/div[1]/h3').should('exist')
                            .should('have.css', 'color', 'rgb(51, 51, 51)')
                        })
                    })

                    context('Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/p').should('exist')
                        })

                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/p').should('exist')
                            .should('have.text', 'Naturally derived micronutrients free from synthetic ingredients.')
                        })

                        it('The text color is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[1]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 2
                context('Card 2', () => {
                    it('The card 2 is visible', () => {
                        cy.xpath('/html/body/section[5]/div/div[2]/div[2]/div[2]').should('exist')
                    })

                    context('Icon', () => {
                        it('The icon is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/div[1]/div/img[2]').should('exist')
                        })
                    })

                    context('Heading', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/div[1]/h3').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/div[1]/h3').should('exist')
                            .should('have.text', 'Efficient')
                        })

                        it('The heading text color is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/div[1]/h3').should('exist')
                            .should('have.css', 'color', 'rgb(51, 51, 51)')
                        })
                    })

                    context('Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/p').should('exist')
                        })

                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/p').should('exist')
                            .should('have.text', 'Scientifically proven to boost yield, quality and stress resistance.')
                        })

                        it('The text color is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[2]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 3
                context('Card 3', () => {
                    it('The card 3 is visible', () => {
                        cy.xpath('/html/body/section[5]/div/div[2]/div[3]/div[2]').should('exist')
                    })

                    context('Icon', () => {
                        it('The icon is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/div[1]/div/img[2]').should('exist')
                        })
                    })

                    context('Heading', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/div[1]/h3').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/div[1]/h3').should('exist')
                            .should('have.text', 'Sustainable')
                        })

                        it('The heading text color is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/div[1]/h3').should('exist')
                            .should('have.css', 'color', 'rgb(51, 51, 51)')
                        })
                    })

                    context('Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/p').should('exist')
                        })

                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/p').should('exist')
                            .should('have.text', 'Utilizing coffee byproducts to minimize waste and carbon footprint.')
                        })

                        it('The text color is correct', () => {
                            cy.xpath('/html/body/section[5]/div/div[2]/div[3]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })
            })
        })

        context('Crawford Hawkins Container', () => {
            it('The container is visible', () => {
                cy.xpath('/html/body/section[6]').should('exist')
            })

            it('The color of the container is correct', () => {
                cy.xpath('/html/body/section[6]').should('exist')
                .should('have.css', 'background-color', 'rgb(122, 166, 108)')
            })

            context('Image of the person', () => {
                it('The image is visible', () => {
                    cy.xpath('//*[@id="w-node-_7518b418-edba-5484-fb73-1b84a62da76d-bb4d16b2"]').should('exist')
                })
            })

            context('Text', () => {

                context('Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/p').should('exist')
                    })
    
                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/p').should('exist')
                        .should('have.text', '“We capture discarded coffee byproducts to produce a revolutionary biofertilizer that has shown remarkable results on many crops, improving plant nutrition, yield and nitrogen use efficiency. Our mission is to build circular economies in which we harness coffee byproducts to provide more income to farmers and better food for consumers”')
                    })
    
                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/p').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })
                })
                
                context('Crawford Hawkins text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/div/div/div/h5').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/div/div/div/h5').should('exist')
                        .should('have.text', 'Crawford Hawkins')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/div/div/div/h5').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })

                    context('Small text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[6]/div/div/div/div/div/div/div').should('exist')
                        })

                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[6]/div/div/div/div/div/div/div').should('exist')
                            .should('have.text', 'Co-Founder, Husky Ag Inc.')
                        })

                        it('The text has correct color', () => {
                            cy.xpath('/html/body/section[6]/div/div/div/div/div/div/div').should('exist')
                            .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })
                    })
                })

                context('LinkedIn Icon', () => {
                    it('The icon is visible', () => {
                        cy.xpath('/html/body/section[6]/div/div/div/div/div/a/img').should('exist')
                    })
                })
            })
        })

        context('Our Results Section', () => {
            it('The container is visible', () => {
                cy.xpath('/html/body/section[7]').should('exist')
            })

            it('The container has correct background color', () => {
                cy.xpath('/html/body/section[7]').should('exist').should('have.css', 'background-color', 'rgb(255, 251, 251)')
            })

            context('Text', () => {
                context('Heading text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[7]/div/div[1]/h1').should('exist')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[7]/div/div[1]/h1', { timeout: 10000 }) 
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Our Results'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                      })
                      
                })

                // Result 1
                context('Result 1', () => {
                    context('Image', () => {
                        it('The image is visible', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[1]/img').should('exist')
                        })
                    })

                    context('Text', () => {
                        context('Heading Text', () => {
                            it('The heading text is visible', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/h1').should('exist')
                            })

                            it('The heading text is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/h1').should('exist')
                                .should('have.text', 'Husky increased tomato yields by almost 40%.')
                            })

                            it('The heading text color is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/h1').should('exist')
                                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                            })
                        })

                        context('Body Text', () => {
                            it('The body text is visible', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/p').should('exist')
                            })

                            it('The body text is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/p').should('exist')
                                .should('have.text', 'In addition, crop quality in terms of the Brix of the marketable fruits increased by 15%, showing the potential for reaching higher premium fruits and prices.')
                            })

                            it('The body text color is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/p').should('exist')
                                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                            })
                        })
                    })

                    context('Learn More', () => {
                        it('The learn more button is visible', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/a').should('exist')
                        })

                        it('The learn more button has correct background', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/a').should('exist')
                            .should('have.css', 'background-color', 'rgb(122, 166, 108)')
                        })

                        it('The learn more button has text visible', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/a').should('exist')
                            .should('have.text', 'learn more')
                        })

                        it('The learn more button has correct text color', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/a').should('exist')
                            .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The learn more button when clicked takes me to learn more page', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[1]/div[2]/a').should('exist')
                            cy.url('eq', 'https://www.husky.ag/learn-more')
                        })
                    })
                })

                // Result 2
                context('Result 2', () => {
                    context('Image', () => {
                        it('The image is visible', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[1]/img').should('exist')
                        })
                    })

                    context('Text', () => {
                        context('Heading Text', () => {
                            it('The heading text is visible', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/h1').should('exist')
                            })

                            it('The heading text is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/h1').should('exist')
                                .should('have.text', 'Husky increased tomato yields by almost 40%.')
                            })

                            it('The heading text color is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/h1').should('exist')
                                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                            })
                        })

                        context('Body Text', () => {
                            it('The body text is visible', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/p').should('exist')
                            })

                            it('The body text is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/p').should('exist')
                                .should('have.text', 'The breakthrough highlights the potential for coffee byproducts and the Husky innovation to revolutionize one of the world’s most important crops.')
                            })

                            it('The body text color is correct', () => {
                                cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/p').should('exist')
                                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                            })
                        })
                    })

                    context('Learn More', () => {
                        it('The learn more button is visible', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/a').should('exist')
                        })

                        it('The learn more button has correct background', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/a').should('exist')
                            .should('have.css', 'background-color', 'rgb(122, 166, 108)')
                        })

                        it('The learn more button has text visible', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/a').should('exist')
                            .should('have.text', 'learn more')
                        })

                        it('The learn more button has correct text color', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/a').should('exist')
                            .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The learn more button when clicked takes me to learn more page', () => {
                            cy.xpath('/html/body/section[7]/div/div[2]/div[2]/div[2]/a').should('exist')
                            cy.url('eq', 'https://www.husky.ag/learn-more')
                        })
                    })
                })

            })
        })

        context('Image above footer', () => {
            context('Image', () => {
              it('The image is visible', () => {
                cy.xpath('//*[@id="w-node-_97ccbc51-a3c2-6e1c-a03a-c3297043d35b-bb4d16b2"]').should('exist')
              })
            })
  
            context('Text Image', () => {
              it('The container is visible', () => {
                cy.xpath('//*[@id="w-node-_97ccbc51-a3c2-6e1c-a03a-c3297043d352-bb4d16b2"]').should('exist')
              })
  
              it('The container color is correct', () => {
                cy.xpath('//*[@id="w-node-_97ccbc51-a3c2-6e1c-a03a-c3297043d352-bb4d16b2"]').should('exist')
                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
              })
  
              it('The heading text is visible', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/h1').should('exist')
              })
  
              it('The heading text is correct', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/h1', { timeout: 10000 }) 
                .should('exist')
                .invoke('text') 
                .then((actualText) => {
                  const expectedText = 'We redefine plant nutrition through coffee byproducts.'
                  expect(actualText.replace(/\s/g, '')).to.equal(expectedText.replace(/\s/g, ''))
                })
              })
  
              it('The text is visible', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/p').should('exist')
              })
  
              it('The text is correct', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/p').should('exist')
                .should('have.text', 'Our mission is to elevate existing agricultural practices with a focus on nitrogen use efficiency, circular economies and climate impact.')
              })
  
              it('The color of the text is correct', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/p').should('exist').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
              })
  
              it('The learn more button is visible', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/a').should('exist')
              })
  
              it('The learn more button is clickable and directs me to Learn More page', () => {
                cy.xpath('/html/body/section[8]/div/div[1]/div/div/a').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/learn-more')
              })
            })
        })
    })
})
