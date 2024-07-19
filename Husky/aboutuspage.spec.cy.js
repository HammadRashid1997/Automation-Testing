// Function to check if body is visible
function isVisible() {
    it('The body is visible', () => {
        cy.get('body').should('be.visible')
    })
}

describe('About Us Page', () => {
    beforeEach(() => {
        cy.visit('https://www.husky.ag/')
        cy.visit('https://www.husky.ag/our-mission')
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

            it('The hero section container has background image', () => {
                cy.xpath('/html/body/section[2]').should('exist')
                    .should('have.css', 'background-image')
            })

            context('Heading text', () => {
                it('The heading text is visible', () => {
                    cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                })

                it('The heading text is correct', () => {
                    cy.xpath('/html/body/section[2]/div/div/h1').should('exist')
                        .should('have.text', 'Our Mission')
                })

                it('The heading text has correct color', () => {
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
                        .should('have.text', 'Husky Ag Inc. is dedicated to pioneering sustainable agricultural solutions, leveraging innovative technologies like our suite of natural biofertilizers made from coffee byproducts. We aim to optimize crop nutrition, enhance soil health, foster eco-friendly farming practices and build circular economies for a resilient and sustainable future.')
                })

                it('The body text has correct color', () => {
                    cy.xpath('/html/body/section[2]/div/div/p').should('exist')
                        .should('have.css', 'color', 'rgb(255, 255, 255)')
                })
            })
        })

        context('Animation Slider', () => {
            it('The animation slider is visible', () => {
                cy.xpath('/html/body/div[1]').should('exist')
            })

            context('Different Logos', () => {
                it('The logo SYSMA Agriculture Research should exist', () => {
                    cy.xpath('/html/body/div[1]/section/div/div/div/div/img[9]').should('exist')
                })

                it('The logo Local partners should exist', () => {
                    cy.xpath('/html/body/div[1]/section/div/div/div/div/img[10]').should('exist')
                })

                it('The logo AGNEXUS Solutions should exist', () => {
                    cy.xpath('/html/body/div[1]/section/div/div/div/div/img[8]').should('exist')
                })
            })
        })

        context('Meet Our Team Section', () => {
            it('The section is visible', () => {
                cy.xpath('/html/body/section[3]').should('exist')
            })

            it('The color of the section is correct', () => {
                cy.xpath('/html/body/section[3]').should('exist')
                .should('have.css', 'background-color', 'rgb(255, 251, 251)')
            })

            context('Heading Text', () => {
                it('The heading text is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[1]/h1').should('exist')
                })

                it('The heading text is correct', () => {
                    cy.xpath('/html/body/section[3]/div/div[1]/h1').should('exist')
                    .should('have.text', 'Meet Our Team')
                })
            })

            context('Body Text', () => {
                it('The body text is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[1]/p').should('exist')
                })

                it('The body text is correct', () => {
                    cy.xpath('/html/body/section[3]/div/div[1]/p').should('exist')
                    .should('have.text', 'Meet the talented individuals who embody excellence, making Husky shine!')
                })

                it('The text color is correct', () => {
                    cy.xpath('/html/body/section[3]/div/div[1]/p').should('exist')
                    .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                })
            })

            context('Taylor Love', () => {
                it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-_82c7d9b5-a466-8c1c-e291-5290a0ec24b9-9d22a185"]').should('exist')
                })

                it('The image is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[2]/div[1]/div/img').should('exist')
                })

                context('Heading Text', () => {
                    it('Heading is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/div/div/h1').should('exist')
                    })

                    it('Heading is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/div/div/h1').should('exist')
                        .should('have.text', 'Taylor Love')
                    })

                    it('The body is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/div/div/div').should('exist')
                    })

                    it('The body is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Co-Founder,President & COO'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                      })
                })

                context('Body Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/ul/li').should('exist')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/ul/li').should('exist').should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/ul/li[1]').should('exist').should('have.text', 'Manager the day-to-day operation of Husky.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/ul/li[2]').should('exist').should('have.text', 'Former VP at Green Coffee Company, Largest coffee producer in colombia.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[1]/ul/li[3]').should('exist').should('have.text', 'Extensive experience in agricultural production, globe supply chain Management, international trade and business development')
                    })
                })
            })

            context('Dr. Alveiro Salamanca', () => {
                it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-c083e82b-b0c9-daec-bd0f-00d75295332f-9d22a185"]').should('exist')
                })

                it('The image is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[2]/div[2]/div/img').should('exist')
                })

                context('Heading Text', () => {
                    it('Heading is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/div/div/h1').should('exist')
                    })

                    it('Heading is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/div/div/h1').should('exist')
                        .should('have.text', 'Dr. Alveiro Salamanca')
                    })

                    it('The body is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/div/div/div').should('exist')
                    })

                    it('The body is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Co-Founder,Director of Research'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                    })
                })

                context('Body Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/ul/li').should('exist')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/ul/li').should('exist')
                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/ul/li[1]').should('exist').should('have.text', 'Based in Colombia, manages Husky Latam R&D.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/ul/li[2]').should('exist').should('have.text', 'M.S. and Ph.D. in soil fertility & plant nutrition from UC Davis.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[2]/ul/li[3]').should('exist').should('have.text', 'Led development of efficient fertilizers & balanced nutrition for ICL Group, one of the world’s largest fertilizer companies.')
                    })
                })
            })

            context('Crawford Hawkins', () => {
                it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-_1fd225dc-4260-ef16-515d-833d0fc2948b-9d22a185"]').should('exist')
                })

                it('The image is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[2]/div[3]/div/img').should('exist')
                })

                context('Heading Text', () => {
                    it('Heading is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/div/div/h1').should('exist')
                    })

                    it('Heading is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/div/div/h1').should('exist')
                        .should('have.text', 'Crawford Hawkins')
                    })

                    it('The body is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/div/div/div').should('exist')
                    })

                    it('The body is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Co-Founder,Chairman'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                      })
                })

                context('Body Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/ul/li').should('exist')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/ul/li').should('exist')
                        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/ul/li[1]').should('exist').should('have.text', 'Entrepreneur & investor in multiple software & coffee-related businesse.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/ul/li[2]').should('exist').should('have.text', 'Former hedge fund manager at Tiger & Elliott.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[3]/ul/li[3]').should('exist').should('have.text', 'Bachelor of Science (B.S.) from the University of Virginia & Master of Business Administration (M.B.A.) from Columbia University.')
                    })
                })
            })

            context('Joy Youwakim', () => {
                it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-_3bbbff53-e2d6-bfa2-926f-be7c7d8d69c4-9d22a185"]').should('exist')
                })

                it('The image is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[2]/div[5]/div/img').should('exist')
                })

                context('Heading Text', () => {
                    it('Heading is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/div/div/h1').should('exist')
                    })

                    it('Heading is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/div/div/h1').should('exist')
                        .should('have.text', 'Joy Youwakim')
                    })

                    it('The body is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/div/div/div').should('exist')
                    })

                    it('The body is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Senior ScientistFormulation and R&D'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                      })
                })

                context('Body Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/ul/li').should('exist')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/ul/li').should('exist')
                        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/ul/li[1]').should('exist').should('have.text', 'Soil scientist and agroecologist with a background in product development and formulation optimization.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[5]/ul/li[2]').should('exist').should('have.text', 'Interdisciplinary research scientist with experience conducting research projects with social science variables in mind.')
                    })
                })
            })

            context('Marcela Urueña', () => {
                it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-_1b571e54-d3de-eb10-6519-85441c09115c-9d22a185"]').should('exist')
                })

                it('The image is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[2]/div[4]/div/img').should('exist')
                })

                context('Heading Text', () => {
                    it('Heading is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/div/div/h1').should('exist')
                    })

                    it('Heading is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/div/div/h1').should('exist')
                        .should('have.text', 'Marcela Urueña')
                    })

                    it('The body is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/div/div/div').should('exist')
                    })

                    it('The body is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Senior AdvisorColombia Partnerships'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                      })
                })

                context('Body Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/ul/li').should('exist')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/ul/li').should('exist')
                        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/ul/li[1]').should('exist').should('have.text', 'Former Deputy Minister of Agriculture in Colombia.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[4]/ul/li[2]').should('exist').should('have.text', 'Held leadership positions in the National Federation of Coffee Growers and International Coffee Organization.')
                    })
                })
            })

            context('Dr. Janneth Escudero', () => {
                it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-c27050fb-1447-56ad-e5e2-cccbfe19515c-9d22a185"]').should('exist')
                })

                it('The image is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[2]/div[6]/div/img').should('exist')
                })

                context('Heading Text', () => {
                    it('Heading is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/div/div/h1').should('exist')
                    })

                    it('Heading is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/div/div/h1').should('exist')
                        .should('have.text', 'Dr. Janneth Escudero')
                    })

                    it('The body is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/div/div/div').should('exist')
                    })

                    it('The body is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                          .should('exist')
                          .invoke('text')
                          .then((actualText) => {
                            const expectedText = 'Senior ScientistMicrobiology and R&D'
                            expect(actualText.trim()).to.equal(expectedText)
                          })
                      })
                })

                context('Body Text', () => {
                    it('The text is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/ul/li').should('exist')
                    })

                    it('The text has correct color', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/ul/li').should('exist')
                        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    })

                    it('The text is correct', () => {
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/ul/li[1]').should('exist').should('have.text', 'Doctor of Philosophy (Ph.D.) in Biotechnology and Industrial-Environmental Microbiology.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/ul/li[2]').should('exist').should('have.text', 'Microbiologist by training and is passionate about exploring microbial diversity.')
                        cy.xpath('/html/body/section[3]/div/div[2]/div[6]/ul/li[3]').should('exist').should('have.text', 'Manages R&D from the Husky lab in Medellin.')
                    })
                })
            })
        })

        context('Advisory Board', () => {
            it('The advisory board section is visible', () => {
                cy.xpath('/html/body/section[3]/div/div[3]/div[1]').should('exist')
            })

            it('The advisory board section has correct color', () => {
                cy.xpath('/html/body/section[3]/div/div[3]/div[1]').should('exist')
                .should('have.css', 'background-color', 'rgb(122, 166, 108)')
            })

            context('Text', () => {
                it('The heading text is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[1]/h1').should('exist')
                })

                it('The heading text is correct', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[1]/h1').should('exist')
                    .should('have.text', 'Advisory Board')
                })

                it('The heading text has correct color', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[1]/h1').should('exist')
                    .should('have.css', 'color', 'rgb(255, 255, 255)')
                })

                it('The text is visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[1]/p').should('exist')
                })

                it('The text is correct', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[1]/p').should('exist')
                    .should('have.text', 'We partnered the world’s foremost experts on plant nutrition, biofertilizers & product development.')
                })

                it('The text has correct color', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[1]/p').should('exist')
                    .should('have.css', 'color', 'rgb(255, 255, 255)')
                })
            })

            context('Logos', () => {
                it('The logos are visible', () => {
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[2]/img[1]').should('exist')
                    cy.xpath('/html/body/section[3]/div/div[3]/div[1]/div[2]/img[2]').should('exist')
                })
            })

            context('Advosory board Team Members', () => {
                context('Dr. Patrick Brown', () => {
                    it('The container is visible', () => {
                        cy.xpath('//*[@id="w-node-_6ab21a05-856c-a4ae-adc2-730e34c66e68-9d22a185"]').should('exist')
                    })
    
                    it('The image is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/div/img').should('exist')
                    })
    
                    context('Heading Text', () => {
                        it('Heading is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/div/div/h1').should('exist')
                        })
    
                        it('Heading is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/div/div/h1').should('exist')
                            .should('have.text', 'Dr. Patrick Brown')
                        })
    
                        it('The body is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/div/div/div').should('exist')
                        })
    
                        it('The body is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                              .should('exist')
                              .invoke('text')
                              .then((actualText) => {
                                const expectedText = 'Chief Scientific Advisor'
                                expect(actualText.trim()).to.equal(expectedText)
                              })
                          })
                    })
    
                    context('Body Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/ul/li').should('exist')
                        })
    
                        it('The text has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/ul/li').should('exist')
                            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                        })
    
                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/ul/li[1]').should('exist').should('have.text', 'Professor of Plant Nutrition at the University of California, Davis.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/ul/li[2]').should('exist').should('have.text', 'Globally recognized leader in both basic & applied plant nutrition.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/ul/li[3]').should('exist').should('have.text', 'Holds leadership positions at the International Fertilizer Association (IFA) & other organizations.')
                        })
                    })
                })

                context('Annalisa Williams', () => {
                    it('The container is visible', () => {
                        cy.xpath('//*[@id="w-node-d492cd89-1118-97a2-b288-6ea82ca3628a-9d22a185"]').should('exist')
                    })
    
                    it('The image is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/div/img').should('exist')
                    })
    
                    context('Heading Text', () => {
                        it('Heading is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/div/div/h1').should('exist')
                        })
    
                        it('Heading is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/div/div/h1').should('exist')
                            .should('have.text', 'Annalisa Williams')
                        })
    
                        it('The body is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[1]/div/div/div').should('exist')
                        })
    
                        it('The body is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                              .should('exist')
                              .invoke('text')
                              .then((actualText) => {
                                const expectedText = 'Go-to-Market Advisor'
                                expect(actualText.trim()).to.equal(expectedText)
                              })
                          })
                    })
    
                    context('Body Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/ul/li').should('exist')
                        })
    
                        it('The text has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/ul/li').should('exist')
                            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                        })
    
                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/ul/li[1]').should('exist').should('have.text', 'Co-founder & owner of AgNexus Consulting.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/ul/li[2]').should('exist').should('have.text', 'Agricultural product go-to-market specialist with a focus on plant nutrition & science.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[2]/ul/li[3]').should('exist').should('have.text', 'Developed & managed specialty crop corporate grower portfolios at Acadian Plant Health.')
                        })
                    })
                })

                context('Dr. Saiful Muhammad', () => {
                    it('The container is visible', () => {
                        cy.xpath('//*[@id="w-node-_5ba1bade-9f7c-0b73-28cd-03c890312f5d-9d22a185"]').should('exist')
                    })
    
                    it('The image is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/div/img').should('exist')
                    })
    
                    context('Heading Text', () => {
                        it('Heading is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/div/div/h1').should('exist')
                        })
    
                        it('Heading is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/div/div/h1').should('exist')
                            .should('have.text', 'Dr. Saiful Muhammad')
                        })
    
                        it('The body is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/div/div/div').should('exist')
                        })
    
                        it('The body is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                              .should('exist')
                              .invoke('text')
                              .then((actualText) => {
                                const expectedText = 'Senior Research Advisor'
                                expect(actualText.trim()).to.equal(expectedText)
                              })
                          })
                    })
    
                    context('Body Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/ul/li').should('exist')
                        })
    
                        it('The text has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/ul/li').should('exist')
                            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                        })
    
                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/ul/li[1]').should('exist').should('have.text', 'President of SYSMA Agriculture Research.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/ul/li[2]').should('exist').should('have.text', 'Holds a Ph.D. focused on Plant Nutrition, Soil Fertility, Soil Chemistry, Plant Physiology & Plant Water Relationship from UC Davis.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[3]/ul/li[3]').should('exist').should('have.text', 'Manages Husky field trials in California.')
                        })
                    })
                })

                context('Robin Ross', () => {
                    it('The container is visible', () => {
                        cy.xpath('//*[@id="w-node-f646f0d6-6ed8-41fb-484b-7f7b2c17c980-9d22a185"]').should('exist')
                    })
    
                    it('The image is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/div/img').should('exist')
                    })
    
                    context('Heading Text', () => {
                        it('Heading is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/div/div/h1').should('exist')
                        })
    
                        it('Heading is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/div/div/h1').should('exist')
                            .should('have.text', 'Robin Ross')
                        })
    
                        it('The body is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/div/div/div').should('exist')
                        })
    
                        it('The body is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/div/div/div', { timeout: 10000 }) // Increase the timeout if needed
                              .should('exist')
                              .invoke('text')
                              .then((actualText) => {
                                const expectedText = 'Agronomy Advisor'
                                expect(actualText.trim()).to.equal(expectedText)
                              })
                          })
                    })
    
                    context('Body Text', () => {
                        it('The text is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/ul/li').should('exist')
                        })
    
                        it('The text has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/ul/li').should('exist')
                            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                        })
    
                        it('The text is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/ul/li[1]').should('exist').should('have.text', 'Co-founder & owner of AgNexus Consulting.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/ul/li[2]').should('exist').should('have.text', 'Expert in sales, technical marketing & product development in agribusiness & bioscience.')
                            cy.xpath('/html/body/section[3]/div/div[3]/div[2]/div[4]/ul/li[3]').should('exist').should('have.text', 'Holds a M.S. in plant pathology from Clemson University.')
                        })
                    })
                })
            })
        })

        context('Image above footer', () => {
            context('Image', () => {
              it('The image is visible', () => {
                cy.xpath('//*[@id="w-node-d248e642-df51-c485-2993-3aeea640e3e4-9d22a185"]').should('exist')
              })
            })
  
            context('Text Image', () => {
              it('The container is visible', () => {
                cy.xpath('//*[@id="w-node-d248e642-df51-c485-2993-3aeea640e3db-9d22a185"]').should('exist')
              })
  
              it('The container color is correct', () => {
                cy.xpath('//*[@id="w-node-d248e642-df51-c485-2993-3aeea640e3db-9d22a185"]').should('exist')
                .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
              })
  
              it('The heading text is visible', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/h1').should('exist')
              })
  
              it('The heading text is correct', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/h1', { timeout: 10000 }) 
                .should('exist')
                .invoke('text') 
                .then((actualText) => {
                  const expectedText = 'We redefine plant nutrition through coffee byproducts.'
                  expect(actualText.replace(/\s/g, '')).to.equal(expectedText.replace(/\s/g, ''))
                })
              })
  
              it('The text is visible', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/p').should('exist')
              })
  
              it('The text is correct', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/p').should('exist')
                .should('have.text', 'Our mission is to elevate existing agricultural practices with a focus on nitrogen use efficiency, circular economies and climate impact.')
              })
  
              it('The color of the text is correct', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/p').should('exist').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
              })
  
              it('The learn more button is visible', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/a').should('exist')
              })
  
              it('The learn more button is clickable and directs me to Learn More page', () => {
                cy.xpath('/html/body/section[5]/div/div[1]/div/div/a').should('exist').click()
                cy.url('eq', 'https://www.husky.ag/learn-more')
              })
            })
        })
    })
})
