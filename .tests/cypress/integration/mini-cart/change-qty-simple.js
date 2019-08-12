describe('Simple product', function () {

  before(() => {
    // Hide premissions popup
    cy.setCookie('permission-cookies', 'true')
    cy.setCookie('permission-profiling', 'true')
    cy.setCookie('mage-cache-sessid', 'true')
    // Keep cookies beween tests
    Cypress.Cookies.defaults({
      whitelist: [
        'frontend',
        'X-Magento-Vary',
        'permission-cookies',
        'permission-profiling',
        'PHPSESSID',
        'form_key'
      ]
    })
  })

  it('Visits product', () => {
    cy.visit('https://alpaca-ce-solr-demo.snowdog.pro/joust-duffle-bag')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('#product-price-1').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Details').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Reviews').should('be.visible')
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').first().click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.wait('@getTotals')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
  })

  it('Change product qty in cart', () => {

    cy.get('.cart-item-qty').clear().type('4')
    cy.get('.minicart-product__info').contains('Update').focus().click()
    //cy.server({ whitelist: () => false })
    // cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    //cy.route('/static/*/frontend/Snowdog/alpaca/*/Magento_Checkout/template/minicart/subtotal.html').as('getSubtotal')
    //cy.route('/static/*/frontend/Snowdog/alpaca/*/Magento_Tax/template/checkout/minicart/subtotal/totals.html').as('getTotals')
    // cy.wait('@getSubtotal')
    //cy.wait('@getTotals')
    // cy.wait('@updateItemQty')
  })

  after(() => {
    // Clear cookie after tests to enable running test several times
    cy.clearCookie('frontend')
    cy.clearCookie('permission-cookies')
    cy.clearCookie('permission-profiling')
    cy.clearCookie('form_key')
    cy.clearCookie('PHPSESSID')
    cy.clearCookie('mage-cache-sessid')
  })
})
