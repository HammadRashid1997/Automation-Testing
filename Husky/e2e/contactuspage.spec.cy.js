// Conatct us Page
describe('Contact us Page', () => {
    beforeEach(() => {
        cy.visit('https://www.husky.ag/contact-us')
    })

    it('Opens the contact us page', () => {

    })

    it('The body is visible', () => {
        cy.get('body').should('be.visible')
    })

    context('Body', () => {
        context('Background', () => {
            it('The background is visible', () => {
                cy.get('body').should('be.visible')
            })

            context('Hero Section', () => {
                it('The hero section is visible', () => {
                    cy.get('.contact-hero-section').should('exist')
                })

                context('Image Container', () => {
                    it('The image is visible', () => {
                        cy.xpath('/html/body/section[2]/div[2]/img').should('exist')
                    })
                })

                context('Text Container', () => {
                    it('The text container is visible', () => {
                        cy.xpath('/html/body/section[2]/div[1]').should('exist')
                    })

                    context('Heading Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[2]/div[1]/h1').should('exist')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[2]/div[1]/h1').should('exist')
                                .should('have.text', 'Contact Us')
                        })
                    })

                    context('Body Text', () => {
                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[2]/div[1]/p').should('exist')
                        })

                        it('The body text is correct', () => {
                            cy.xpath('/html/body/section[2]/div[1]/p').should('exist')
                                .should('have.text', 'Our connected team is working from locations in California, New York and Colombia. We are available to answer any questions you may have in both English and Spanish. Please email us at info@husky.ag.')
                        })

                        it('The body text has correct color', () => {
                            cy.xpath('/html/body/section[2]/div[1]/p').should('exist')
                                .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                        })

                        context('Mail Link Text', () => {
                            it('Should have a mailto link with the correct email address', () => {
                                cy.get('a.contact-email-inner-link').should('have.attr', 'href', 'mailto:info@husky.ag')
                                    .and('contain', 'info@husky.ag')
                            })
                        })
                    })
                })
            })

            context('Get in Touch with Our Team Section', () => {
                it('The Get in Touch with Our Team section is visible', () => {
                    cy.xpath('/html/body/section[3]').should('be.visible')
                })

                context('Text Section', () => {
                    it('The section is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[1]').should('be.visible')
                    })

                    context('Heading Text', () => {
                        it('The heading text is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/h1[1]').should('be.visible')
                        })

                        it('The heading text is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/h1[1]').should('be.visible')
                                .should('have.text', 'Get In Touch With Our Team')
                        })
                    })

                    context('Body Text', () => {
                        it('The body text is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/p').should('be.visible')
                        })
                    })

                    context('Email Section', () => {
                        it('The email section heading E,ail is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/h1[2]').should('be.visible')
                        })

                        it('The email section heading Email has correct text', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/h1[2]').should('be.visible')
                                .should('have.text', 'Email')
                        })

                        it('The email section heading Email has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/h1[2]').should('be.visible')
                                .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        it('The email id is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/a').should('be.visible')
                        })

                        it('The email id is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/a').should('be.visible')
                                .should('have.text', 'info@husky.ag')
                        })

                        it('The email id has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/a').should('be.visible')
                                .should('have.css', 'color', 'rgb(122, 166, 108)')
                        })

                        it('Should have a mailto link with the correct email address', () => {
                            cy.get('a.contact-email-inner-link').should('have.attr', 'href', 'mailto:info@husky.ag')
                                .and('contain', 'info@husky.ag')
                        })
                    })

                    context('Social Media Section', () => {
                        it('The social media section is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]').should('be.visible')
                        })

                        it('The text social media is visible', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h1').should('be.visible')
                        })

                        it('The text social media is correct', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h1').should('be.visible')
                                .should('have.text', 'Social Media:')
                        })

                        it('The text social media has correct color', () => {
                            cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/h1').should('be.visible')
                                .should('have.css', 'color', 'rgb(18, 36, 35)')
                        })

                        context('Icons', () => {
                            context('Facebook', () => {
                                it('The facebook icon is visible', () => {
                                    cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/div/a[1]/img').should('exist')
                                })
                            })

                            context('Instagram', () => {
                                it('The instagram icon is visible', () => {
                                    cy.xpath('/html/body/section[3]/div/div/div[1]/div[2]/div/a[2]/img').should('exist')
                                })
                            })
                        })
                    })
                })

                context('Request a Quote Section', () => {
                    it('The section is visible', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]').should('exist')
                    })

                    it('The section has correct background color', () => {
                        cy.xpath('/html/body/section[3]/div/div/div[2]').should('exist')
                            .should('have.css', 'background-color', 'rgb(122, 166, 108)')
                    })

                    context('Text', () => {
                        context('Heading Text', () => {
                            it('The heading text is visible', () => {
                                cy.xpath('/html/body/section[3]/div/div/div[2]/h1').should('exist')
                            })

                            it('The heading text is correct', () => {
                                cy.xpath('/html/body/section[3]/div/div/div[2]/h1').should('exist')
                                    .should('have.text', 'Request A Quote')
                            })

                            it('The heading text has correct color', () => {
                                cy.xpath('/html/body/section[3]/div/div/div[2]/h1').should('exist')
                                    .should('have.css', 'color', 'rgb(255, 255, 255)')
                            })
                        })

                        context('Email Form', () => {
                            it('The email form is visible', () => {
                                cy.xpath('//*[@id="email-form-2"]').should('exist')
                            })

                            context('Name field', () => {
                                it('The name field is visible', () => {
                                    cy.xpath('//*[@id="name"]').should('exist')
                                })

                                it('The name field has correct placeholder text', () => {
                                    cy.xpath('//*[@id="name"]').should('exist')
                                        .should('have.attr', 'placeholder', 'Your Name')
                                })

                                it('The name field is clickable', () => {
                                    cy.xpath('//*[@id="name"]').should('exist').click()
                                })

                                it('The name field takes in input value', () => {
                                    cy.xpath('//*[@id="name"]').should('exist').click().type('Ben Marcus')
                                })
                            })

                            context('Email field', () => {
                                it('The email field is visible', () => {
                                    cy.xpath('//*[@id="Email-4"]').should('exist')
                                })

                                it('The email field has correct placeholder text', () => {
                                    cy.xpath('//*[@id="Email-4"]').should('exist')
                                        .should('have.attr', 'placeholder', 'Your Email')
                                })

                                it('The email field is clickable', () => {
                                    cy.xpath('//*[@id="Email-4"]').should('exist').click()
                                })

                                it('The email field takes in input value', () => {
                                    cy.xpath('//*[@id="Email-4"]').should('exist').click().type('temp123@gmail.com')
                                })
                            })

                            context('Message field', () => {
                                it('The message field is visible', () => {
                                    cy.xpath('//*[@id="field"]').should('exist')
                                })

                                it('The message field has correct placeholder text', () => {
                                    cy.xpath('//*[@id="field"]').should('exist')
                                        .should('have.attr', 'placeholder', 'Text')
                                })

                                it('The message field is clickable', () => {
                                    cy.xpath('//*[@id="field"]').should('exist').click()
                                })

                                it('The message field takes in input value', () => {
                                    cy.xpath('//*[@id="field"]').should('exist').click().type('Hi, this is a dummy text and I am also a dummy user')
                                })
                            })

                            context('Submit Button', () => {
                                it('The submit button is visible', () => {
                                    cy.xpath('/html/body/section[3]/div/div/div[2]/div/form/input[3]').should('exist')
                                })

                                it('The submit button has correct background color', () => {
                                    cy.xpath('/html/body/section[3]/div/div/div[2]/div/form/input[3]').should('exist')
                                        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
                                })

                                it('The submit button has correct text in it', () => {
                                    cy.xpath('/html/body/section[3]/div/div/div[2]/div/form/input[3]').should('exist')
                                        .should('have.value', 'Submit')
                                })

                                it('The submit button has correct text color', () => {
                                    cy.xpath('/html/body/section[3]/div/div/div[2]/div/form/input[3]').should('exist')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Request a Quote functionality', () => {
                                it('Functionality Working', () => {
                                    cy.xpath('//*[@id="name"]').should('exist').click().type('Ben Marcus')
                                    cy.xpath('//*[@id="Email-4"]').should('exist').click().type('temp123@gmail.com')
                                    cy.xpath('//*[@id="field"]').should('exist').click().type('Hi, this is a dummy text and I am also a dummy user')
                                    cy.xpath('/html/body/section[3]/div/div/div[2]/div/form/input[3]').should('exist').click()
                                    cy.wait(5)
                                    cy.xpath('/html/body/section[3]/div/div/div[2]/div/div[1]').should('be.visible')
                                })
                            })
                        })
                    })
                })
            })

            context('FAQs Section', () => {
                it('The FAQs section is visible', () => {
                    cy.xpath('/html/body/section[4]').should('be.visible')
                })

                context('Heading Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/h1').should('be.visible')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[4]/div/div[1]/h1', { timeout: 10000 }) // Increase the timeout if needed
                            .should('be.visible')
                            .invoke('text')
                            .then((actualText) => {
                                const expectedTextWithoutSpaces = 'FrequentlyAskedQuestions'
                                expect(actualText.replace(/\s/g, '')).to.equal(expectedTextWithoutSpaces)
                            })
                    })
                })

                context('FAQ Cards', () => {

                    // Card 1
                    context('Card 1', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-0"]').should('exist')
                        })

                        it('The background color od the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-0"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-0"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-0"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What is Husky made of and how does it benefit crop yields?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/nav/div/p').should('exist')
                                        .should('have.text', 'Husky\'s biofertilizers are derived from coffee byproducts, and they enhance crop yields by providing natural nutrients to plants, augmenting more efficient use of traditional fertilizers and promoting sustainable agriculture practices.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/div/div[2]/img[1]')
                                            .should('be.visible').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[1]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 2
                    context('Card 2', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-1"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-1"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-1"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-1"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What crops has Husky been tested on besides tomatoes?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/nav/div/p').should('exist')
                                        .should('have.text', 'Husky\'s biofertilizer has demonstrated its effectiveness in trials on various crops, including corn, with different application methods (seed, soil, foliar) and rates, showcasing its adaptability and potential for broader agricultural applications.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[2]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 3
                    context('Card 3', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-2"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-2"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-2"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-2"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[1]').should('be.visible')
                                        .should('have.text', 'How does Husky align its practices with the 4Rs of nutrient management?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/nav/div/p').should('exist')
                                        .should('have.text', 'Husky adheres to the 4Rs of nutrient management by ensuring the right nutrient source, rate, timing, and placement, which are crucial principles in sustainable agriculture and contribute to improved environmental and economic outcomes.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 4
                    context('Card 4', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-3"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-3"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-3"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-3"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What is a biostimulant?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/nav/div/p').should('exist')
                                        .should('have.text', 'A biostimulant is a substance or microorganism applied to plants or soil to enhance plant growth, crop quality, and stress tolerance. Biostimulants do not provide nutrients directly but stimulate physiological processes in plants, improving their overall performance. Husky utilizes the a biostimulant derived from the coffee fruit as a core ingredient in the platform of plant nutrition products.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[3]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[4]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 5
                    context('Card 5', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-4"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-4"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-4"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-4"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/div/div[1]').should('be.visible')
                                        .should('have.text', 'How is coffee produced, and where do the pulp and mucilage appear in the process?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/nav/div/p').should('exist')
                                        .should('have.text', 'Coffee is produced from the beans of the coffee cherry that grow on trees in regions near the equator. During coffee processing, the pulp and mucilage appear as layers surrounding the coffee beans. After harvesting, the coffee cherries are pulped to remove the outer skin (pulp), revealing the mucilage layer, which is a sticky substance that surrounds the coffee beans. The beans are then further processed to remove the mucilage before roasting.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[5]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 6
                    context('Card 6', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-5"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-5"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-5"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-5"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What is Chlorella vulgaris?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/nav/div/p').should('exist')
                                        .should('have.text', 'Chlorella vulgaris is a species of green algae that is commonly used as a dietary supplement and in various industrial applications. It is known for its high nutritional value, containing proteins, vitamins, minerals, and other nutrients. Chlorella vulgaris is also used in biotechnology and research for its potential in biofuel production and environmental applications. Chlorella vulgaris, a species of green algae, can have beneficial effects on plant growth and nutrition when used as a fertilizer or soil amendment.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[1]/div[6]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // -----------------------------------------------------------------------------------------------------------------------------------
                    // Card 7
                    context('Card 7', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-6"]').should('exist')
                        })

                        it('The background color od the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-6"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-6"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-6"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/div/div[1]').should('be.visible')
                                        .should('have.text', 'How did Husky perform in validation trials on tomato crops in Northern California?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/nav/div/p')
                                        .should('exist')
                                })

                                // it('The text is correct', () => {
                                //     cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/nav/div/p').should('exist')
                                //         .should('have.text', 'In recent tomato validation trials, Husky-treated plants showed a remarkable 38.5% increase in yield over the control group, along with a significant 14.4% rise in Brix, indicating improved tomato quality compared to the control group.')
                                // })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/div/div[2]/img[1]')
                                            .should('be.visible').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[1]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 8
                    context('Card 8', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-7"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-7"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-7"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-7"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What specific aspects of nutrient management does Husky target?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/nav/div/p').should('exist')
                                        .should('have.text', 'Husky is primarily concentrating on nutrient uptake and fertilizer use efficiency (NUE) to optimize its biofertilizer formulations, aiming to enhance nutrient utilization, crop performance, yield, quality, profitability, and reduce greenhouse gas emissions tied to fertilization.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[2]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 9
                    context('Card 9', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-8"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-8"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-8"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-8"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What potential environmental benefits can be expected from Husky\'s approach to nutrient management?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/nav/div/p')
                                        .should('exist')
                                })

                                // it('The text is correct', () => {
                                //     cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/nav/div/p').should('exist')
                                //         .should('have.text', 'By promoting balanced fertilization and biofertilizer usage, Husky anticipates reduced greenhouse gas emissions associated with fertilization, higher carbon capture potential, and a positive impact on the environment.')
                                // })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[3]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 10
                    context('Card 10', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-9"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-9"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-9"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-9"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What is a biofertilizer?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/nav/div/p').should('exist')
                                        .should('have.text', 'A biofertilizer is a natural or microbial product that contains beneficial microorganisms or substances derived from living organisms. Biofertilizers improve soil fertility, enhance nutrient uptake by plants, and promote sustainable agriculture by reducing the need for chemical fertilizers.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[4]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })

                    // Card 11
                    context('Card 11', () => {
                        it('The card is visible', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-10"]').should('exist')
                        })

                        it('The background color of the card is correct', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-10"]').should('exist')
                                .should('have.css', 'color', 'rgb(255, 255, 255)')
                        })

                        it('The card is clickable', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-10"]').should('exist').click()
                        })

                        it('The card when clicked opens the card', () => {
                            cy.xpath('//*[@id="w-dropdown-toggle-10"]').should('exist').click()
                            cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/nav/div/p')
                                .should('be.visible')
                        })

                        context('Text', () => {
                            context('Heading Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/div/div[1]')
                                        .should('be.visible')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/div/div[1]').should('be.visible')
                                        .should('have.text', 'What is a microbe?')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/div/div[1]').should('be.visible')
                                        .should('have.css', 'color', 'rgb(18, 36, 35)')
                                })
                            })

                            context('Body Text', () => {
                                it('The text is visible', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/nav/div/p')
                                        .should('exist')
                                })

                                it('The text is correct', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/nav/div/p').should('exist')
                                        .should('have.text', 'A microbe, short for microorganism, is a tiny living organism that is too small to be seen with the naked eye. Microbes include bacteria, fungi, viruses, and protozoa. They play essential roles in various biological processes, such as decomposition, nutrient cycling, and fermentation, and can be beneficial or harmful to plants, animals, and humans.')
                                })

                                it('The text has correct color', () => {
                                    cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/nav/div/p').should('exist')
                                        .should('have.css', 'color', 'rgba(0, 0, 0, 0.5)')
                                })

                                context('Icon', () => {
                                    it('The icon is visible', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/div/div[2]/img[1]')
                                            .should('be.visible')
                                    })

                                    it('The icon is clickable and then turns to the minus icon', () => {
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/div/div[2]/img[1]')
                                            .should('exist').click()
                                        cy.xpath('/html/body/section[4]/div/div[2]/div[2]/div[5]/div/div[2]/img[2]').should('exist')
                                    })
                                })
                            })
                        })
                    })
                })
            })

            context('Team Gallery Section', () => {
                it('The section is visible', () => {
                    cy.xpath('/html/body/section[5]').should('be.visible')
                })

                context('Text', () => {
                    it('The heading text is visible', () => {
                        cy.xpath('/html/body/section[5]/div[1]/h1').should('exist')
                    })

                    it('The heading text is correct', () => {
                        cy.xpath('/html/body/section[5]/div[1]/h1').should('exist')
                        .should('have.text', 'Team Gallery')
                    })
                })

                context('Images', () => {
                    it('The images section is visible', () => {
                        cy.xpath('/html/body/section[5]/div[3]/div/div/div/div').should('exist')
                    })

                    it('The images are visible', () => {
                        cy.xpath('/html/body/section[5]/div[3]/div/div/div/div/div[5]').should('exist')
                        cy.xpath('/html/body/section[5]/div[3]/div/div/div/div/div[4]').should('exist')
                        cy.xpath('/html/body/section[5]/div[3]/div/div/div/div/div[6]').should('exist')
                    })

                    context('Arrow buttons', () => {
                        context('Right Arrow', () => {
                            it('The arrow is visible', () => {
                                cy.xpath('/html/body/section[5]/div[3]/div/div/button[2]').should('exist')
                            })

                            it('The arrow is clickable', () => {
                                cy.xpath('/html/body/section[5]/div[3]/div/div/button[2]').should('exist').click()
                            })
                        })

                        context('Left Arrow', () => {
                            it('The arrow is visible', () => {
                                cy.xpath('/html/body/section[5]/div[3]/div/div/button[1]').should('exist')
                            })

                            it('The arrow is clickable', () => {
                                cy.xpath('/html/body/section[5]/div[3]/div/div/button[1]').should('exist').click()
                            })
                        })
                    })
                })
            })

            context('Image above footer', () => {
                context('Image', () => {
                  it('The image is visible', () => {
                    cy.xpath('//*[@id="w-node-_8ee63275-43bc-9feb-8d8c-148f1a58ebe3-a53d15f4"]').should('exist')
                  })
                })
      
                context('Text Image', () => {
                  it('The container is visible', () => {
                    cy.xpath('//*[@id="w-node-_8ee63275-43bc-9feb-8d8c-148f1a58ebda-a53d15f4"]').should('exist')
                  })
      
                  it('The container color is correct', () => {
                    cy.xpath('//*[@id="w-node-_8ee63275-43bc-9feb-8d8c-148f1a58ebda-a53d15f4"]').should('exist')
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
})
