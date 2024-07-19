describe('Sustainability Page', () => {
    beforeEach(() => {
        cy.visit('https://www.husky.ag/learn-more')
    })

    it('Opens the contact us page', () => {

    })

    it('The body is visible', () => {
        cy.get('body').should('be.visible')
    })

    context('Body', () => {
        it('The body is visible', () => {
            cy.get('body').should('be.visible')
        })
        context('Background', () => {
            it('The background is visible', () => {
                cy.get('body').should('be.visible')
            })
            it('The background image is visible', () => {
                cy.xpath('/html/body/section').should('exist')
                .should('have.css', 'background-image')
            })
        })

        context('Learn More Form', () => {
            it('The form is visible', () => {
                cy.xpath('/html/body/section/div').should('exist')
            })

            it('The form section has correct background color', () => {
                cy.xpath('/html/body/section/div').should('exist')
                .should('have.css', 'background-color', 'rgba(122, 166, 108, 0.9)')
            })

            it('The husky logo is visible', () => {
                cy.xpath('/html/body/section/div/img').should('exist')
            })

            it('The heading is visible', () => {
                cy.xpath('/html/body/section/div/h1').should('be.visible')
            })

            it('The heading is correct', () => {
                cy.xpath('/html/body/section/div/h1').should('be.visible')
                .should('have.text', 'Contact us to learn more about Husky!')
            })

            it('The heading has correct color', () => {
                cy.xpath('/html/body/section/div/h1').should('be.visible')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            })

            it('The body text is visible', () => {
                cy.xpath('/html/body/section/div/p').should('exist')
            })

            it('The body text is correct', () => {
                cy.xpath('/html/body/section/div/p').should('exist')
                .should('have.text', 'Discover the power of coffee byproducts to transform global agriculture and food systems.')
            })

            it('The body text has correct color', () => {
                cy.xpath('/html/body/section/div/p').should('exist')
                .should('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
            })

            context('Form', () => {
                it('The form is visible', () => {
                    cy.xpath('//*[@id="email-form-3"]').should('exist')
                })

                context('Name', () => {
                    it('The name text field is visible', () => {
                        cy.xpath('//*[@id="name-2"]').should('exist')
                    })

                    it('The name text field has correct placeholder text', () => {
                        cy.xpath('//*[@id="name-2"]').should('exist')
                        .should('have.attr', 'placeholder', 'Your Name')
                    })

                    it('The name text field takes input', () => {
                        cy.xpath('//*[@id="name-2"]').should('exist').type('Marcus Benjamin')
                    })

                })

                context('Email', () => {
                    it('The email text field is visible', () => {
                        cy.xpath('//*[@id="email-2"]').should('exist')
                    })

                    it('The email text field has correct placeholder text', () => {
                        cy.xpath('//*[@id="email-2"]').should('exist')
                        .should('have.attr', 'placeholder', 'Your Email')
                    })

                    it('The email text field takes input', () => {
                        cy.xpath('//*[@id="email-2"]').should('exist').type('temp123@gmail.com')
                    })

                })

                context('Text', () => {
                    it('The text field is visible', () => {
                        cy.xpath('//*[@id="field-2"]').should('exist')
                    })

                    it('The text field has correct placeholder text', () => {
                        cy.xpath('//*[@id="field-2"]').should('exist')
                        .should('have.attr', 'placeholder', 'Example Text')
                    })

                    it('The text field takes input', () => {
                        cy.xpath('//*[@id="field-2"]').should('exist').type('This is a dummy text')
                    })
                })

                context('Submit', () => {
                    it('The button is visible', () => {
                        cy.xpath('/html/body/section/div/div/form/input[3]').should('be.visible')
                    })

                    it('The button has correct background', () => {
                        cy.xpath('/html/body/section/div/div/form/input[3]').should('be.visible')
                        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
                    })

                    it('The button is clickable', () => {
                        cy.xpath('/html/body/section/div/div/form/input[3]').should('be.visible').click()
                    })
                })

                context('Functionality', () => {
                    it('The complete flow', () => {
                        cy.xpath('//*[@id="name-2"]').should('exist').type('Marcus Benjamin')
                        cy.xpath('//*[@id="email-2"]').should('exist').type('temp123@gmail.com')
                        cy.xpath('//*[@id="field-2"]').should('exist').type('This is a dummy text')
                        cy.xpath('/html/body/section/div/div/form/input[3]').should('be.visible').click()
                        cy.wait(3)
                        cy.xpath('/html/body/section/div/div/div[1]/div').should('exist')
                    })
                })
            })
        })
    })
})

