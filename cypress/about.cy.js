import About from '../app/(pages)/about/page'

describe('<About />', () => {
    it('should render and display expected content', () => {
        cy.mount(<About />)
        cy.get('h1').contains('About')
    })
})