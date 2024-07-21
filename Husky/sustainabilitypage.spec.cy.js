describe('Sustainability Page', () => {
    beforeEach(() => {
        cy.visit('https://www.husky.ag/sustainability')
    })

    it('Opens the contact us page', () => {

    })

    it('The body is visible', () => {
        cy.get('body').should('be.visible')
    })

    context('Body', () => {
        context('Background', () => {
            it('The body is visible', () => {
                cy.get('body').should('be.visible')
            })
        })

        context('Hero Section', () => {
            it('The hero section is visible', () => {
                cy.xpath('/html/body/section[2]').should('exist')
            })

            it('The background image is visible', () => {
                cy.xpath('/html/body/section[2]').should('exist')
                .should('have.css', 'background-image')
            })

            context('Text', () => {
                context('Heading Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                        .should('have.text', 'We Build CircularEconomies')
                    })
                })

                context('Body Text', () => {
                    it('The body text is visible', () => {
                        cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                    })

                    it('The body text is correct', () => {
                        cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                        .should('have.text', 'We repurpose coffee byproducts into a suite of innovative biofertilizers, effectively transforming waste into valuable agricultural resources. We not only enhance crop yields but also reduce the dependency on chemical fertilizers. In the future, coffee byproducts will be the cornerstone of the sustainable agriculture system that feeds our world.')
                    })

                    it('The body text is white in color', () => {
                        cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                    })
                })
            })
        })

        context('Husky is a mission driven section', () => {
            it('The section is visible', () => {
                cy.xpath('/html/body/section[4]').should('exist')
            })

            it('The section has correct color', () => {
                cy.xpath('/html/body/section[4]').should('exist')
                .should('have.css', 'background-color', 'rgb(255, 251, 251)')
            })

            context('Text', () => {
                context('Heading Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/h1').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/h1').should('exist')
                        .should('have.text', 'Husky is a mission-driven agricultural technology business')
                    })
                })

                context('Body Text', () => {
                    it('The body text is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/p').should('exist')
                    })

                    it('The body text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/p').should('exist')
                        .should('have.text', 'The cornerstone of Husky’s work is our pioneering effort to redefine sustainability in the agricultural industry through our innovative approach to repurposing coffee byproducts. We recognize the environmental impact of traditional waste disposal methods and have developed a comprehensive strategy to harness the potential of the pulp and mucilage from the discarded coffee fruit.')
                    })

                    it('The body text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/p').should('exist')
                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })
                })
            })

            context('Cards', () => {
                context('Card 1', () => {
                    it('The card is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/div[2]').should('exist')
                    })

                    it('The card has image visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/div[1]/img[2]').should('exist')
                    })

                    context('Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/h1').should('exist')
                            .should('have.text', 'Local Impact')
                        })

                        it('The heading text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/h1').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/p').should('exist')
                            .should('have.text', 'We collaborate with local coffee farmers and processing facilities, processing coffee byproducts that would otherwise contribute to environmental degradation.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[1]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 2
                context('Card 2', () => {
                    it('The card is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/div[2]').should('exist')
                    })

                    it('The card has image visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/div[1]/img[2]').should('exist')
                    })

                    context('Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/h1').should('exist')
                            .should('have.text', 'Agricultural Innovation')
                        })

                        it('The heading text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/h1').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/p').should('exist')
                            .should('have.text', 'Through a patented process, we transform these byproducts into the base for our biofertilizer and biostimulant products.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[2]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 3
                context('Card 3', () => {
                    it('The card is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/div[2]').should('exist')
                    })

                    it('The card has image visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/div[1]/img[2]').should('exist')
                    })

                    context('Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/h1').should('exist')
                            .should('have.text', 'Waste Reduction')
                        })

                        it('The heading text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/h1').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/p').should('exist')
                            .should('have.text', 'Our approach to sustainability is underpinned by commitments to reduce byproduct waste and strive for net-zero emissions in the coffee supply chain.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[2]/div/div[3]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 4
                context('Card 4', () => {
                    it('The card is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/div[2]').should('exist')
                    })

                    it('The card has image visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/div[1]/img[2]').should('exist')
                    })

                    context('Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/h1').should('exist')
                            .should('have.text', 'Shared Value')
                        })

                        it('The heading text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/h1').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/p').should('exist')
                            .should('have.text', 'We strive to unlock the power of regenerative agriculture to enhance quality of life for smallholder farmers around the world through circular economies.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[1]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 5
                context('Card 5', () => {
                    it('The card is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/div[2]').should('exist')
                    })

                    it('The card has image visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/div[1]/img[2]').should('exist')
                    })

                    context('Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/h1').should('exist')
                            .should('have.text', 'Food Quality')
                        })

                        it('The heading text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/h1').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/p').should('exist')
                            .should('have.text', 'We promote nutritious and sustainable food systems while protecting natural resources, reducing carbon emissions and strengthening farming communities.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[2]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })

                // Card 6
                context('Card 6', () => {
                    it('The card is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/div[2]').should('exist')
                    })

                    it('The card has image visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/div[1]/img[2]').should('exist')
                    })

                    context('Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/h1').should('exist')
                            .should('have.text', 'Climate Action')
                        })

                        it('The heading text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/h1').should('exist')
                            .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/p').should('exist')
                            .should('have.text', 'We aim to reduce carbon emissions in the coffee supply chain and promote nitrogen use efficiency across a broad range of agricultural.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[4]/div/div[3]/div/div[3]/p').should('exist')
                            .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })
                    })
                })
            })
        })

        context('Cards', () => {
            it('The cards section is visible', () => {
                cy.xpath('/html/body/section[5]').should('exist')
            })

            context('Card Images', () => {
                it('The images are visible', () => {
                    cy.xpath('/html/body/section[5]/div/div/div[2]/img').should('exist')
                    cy.xpath('/html/body/section[6]/div/div/div[1]/img').should('exist')
                    cy.xpath('/html/body/section[7]/div/div/div[2]/img').should('exist')
                    cy.xpath('/html/body/section[8]/div/div/div[1]/img').should('exist')
                    cy.xpath('/html/body/section[9]/div/div/div[2]/img').should('exist')
                    cy.xpath('/html/body/section[10]/div/div/div[1]/img').should('exist')
                })
            })

            context('Heading Text', () => {
                it('The heading text for all cards is visible', () => {
                    cy.xpath('/html/body/section[5]/div/div/div[1]/h1').should('exist')
                    cy.xpath('/html/body/section[6]/div/div/div[2]/h1').should('exist')
                    cy.xpath('/html/body/section[7]/div/div/div[1]/h1').should('exist')
                    cy.xpath('/html/body/section[8]/div/div/div[2]/h1').should('exist')
                    cy.xpath('/html/body/section[9]/div/div/div[1]/h1').should('exist')
                    cy.xpath('/html/body/section[10]/div/div/div[2]/h1').should('exist')
                })

                it('The heading text is correct', () => {
                    cy.xpath('/html/body/section[5]/div/div/div[1]/h1').should('exist').should('have.text', 'Local Impact')
                    cy.xpath('/html/body/section[6]/div/div/div[2]/h1').should('exist').should('have.text', 'Agricultural Innovation')
                    cy.xpath('/html/body/section[7]/div/div/div[1]/h1').should('exist').should('have.text', 'Waste Reduction')
                    cy.xpath('/html/body/section[8]/div/div/div[2]/h1').should('exist').should('have.text', 'Shared Value')
                    cy.xpath('/html/body/section[9]/div/div/div[1]/h1').should('exist').should('have.text', 'Food Quality')
                    cy.xpath('/html/body/section[10]/div/div/div[2]/h1').should('exist').should('have.text', 'Climate Action')
                })
            })

            context('Body Text', () => {
                it('The body text for all cards is visible', () => {
                    cy.xpath('/html/body/section[5]/div/div/div[1]/p').should('exist')
                    cy.xpath('/html/body/section[6]/div/div/div[2]/p').should('exist')
                    cy.xpath('/html/body/section[7]/div/div/div[1]/p').should('exist')
                    cy.xpath('/html/body/section[8]/div/div/div[2]/p').should('exist')
                    cy.xpath('/html/body/section[9]/div/div/div[1]/p').should('exist')
                    cy.xpath('/html/body/section[10]/div/div/div[2]/p').should('exist')
                })

                it('The body text is correct', () => {
                    cy.xpath('/html/body/section[5]/div/div/div[1]/p').should('exist').should('have.text', 'We collaborate with local coffee farmers and processing facilities, processing coffee byproducts that would otherwise contribute to environmental degradation.')
                    cy.xpath('/html/body/section[6]/div/div/div[2]/p').should('exist').should('have.text', 'Through a patented process, we transform these byproducts into the base for our biofertilizer and biostimulant products.')
                    cy.xpath('/html/body/section[7]/div/div/div[1]/p').should('exist').should('have.text', 'Our approach to sustainability is underpinned by commitments to reduce byproduct waste and strive for net-zero emissions in the coffee supply chain.')
                    cy.xpath('/html/body/section[8]/div/div/div[2]/p').should('exist').should('have.text', 'We strive to unlock the power of regenerative agriculture to enhance quality of life for smallholder farmers around the world through circular economies.')
                    cy.xpath('/html/body/section[9]/div/div/div[1]/p').should('exist').should('have.text', 'We strive to unlock the power of regenerative agriculture to enhance quality of life for smallholder farmers around the world through circular economies.')
                    cy.xpath('/html/body/section[10]/div/div/div[2]/p').should('exist').should('have.text', 'We aim to reduce carbon emissions in the coffee supply chain and global agriculture market by promoting nitrogen use efficiency.')
                })

                it('The body text has correct color', () => {
                    cy.xpath('/html/body/section[5]/div/div/div[1]/p').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    cy.xpath('/html/body/section[6]/div/div/div[2]/p').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    cy.xpath('/html/body/section[7]/div/div/div[1]/p').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    cy.xpath('/html/body/section[8]/div/div/div[2]/p').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    cy.xpath('/html/body/section[9]/div/div/div[1]/p').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    cy.xpath('/html/body/section[10]/div/div/div[2]/p').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                })
            })
        })

        context('Person Section', () => {
            it('The section is visible', () => {
              cy.xpath('/html/body/section[11]').should('be.visible')
            })
    
            it('The background color is green', () => {
              cy.xpath('/html/body/section[11]').should('be.visible').should('have.css', 'background-color', 'rgb(122, 166, 108)')
            })
    
            it('The image of the person is visible', () => {
              cy.xpath('//*[@id="w-node-_74ef0f16-9a30-36ee-5438-bb580cd894a1-d629ba17"]').should('exist')
            })
    
            it('The text is visible', () => {
              cy.xpath('/html/body/section[11]/div/div/div/p').should('exist')
            })
    
            it('The text is correct displayed on the screen', () => {
              cy.xpath('/html/body/section[11]/div/div/div/p').should('exist')
              .should('have.text', '“We work in coffee producing regions where smallholder farmers can be disproportionately affected by rising fertilizer costs, changing weather patterns, and commodity market fluctuations. Our mission is to empower and build more resilient and economically viable smallholder farming communities.')
            })
    
            it('The text is white in color', () => {
              cy.xpath('/html/body/section[11]/div/div/div/p').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
    
            it('The heading Taylor Love is visible', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/div/h5').should('exist')
            })
    
            it('The heading is white in color', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/div/h5').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
    
            it('The heading has correct text', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/div/h5').should('exist').should('have.text', 'Taylor Love')
            })
    
            it('The text below the heading Taylor Love is visible', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/div/div').should('exist')
            })
    
            it('The text below the heading Taylor Love is correct', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/div/div').should('exist').should('have.text', 'Co-Founder, Husky Ag Inc.')
            })
    
            it('The text below the heading Taylor Love is white in color', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/div/div').should('exist').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
    
            it('The linkedin icon is visible', () => {
              cy.xpath('/html/body/section[11]/div/div/div/div/div/a/img').should('exist')
            })
    
            it('The linkedin is clickable', () => {
              cy.wait(5)
              cy.xpath('/html/body/section[11]/div/div/div/div/div/a/img').should('exist').click({force: true})
            })
    
            it('The linkedin icon when clicked takes me to the LinkedIn Page of Taylor Love', () => {
              cy.wait(5)
              cy.xpath('/html/body/section[11]/div/div/div/div/div/a/img').should('exist').click({ force: true })
              cy.url('eq', 'https://www.linkedin.com/in/taylor-a-love-7599507/%20ccc')
            })
          })
    })
})
