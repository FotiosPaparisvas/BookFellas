describe('Swagger /docs Page Test endpoint GET /chat/{id}', () => {
  beforeEach(() => {
    // Visit the Swagger Docs page
    cy.visit('http://localhost:8080/docs');
  });

  it('should load the Swagger docs page successfully', () => {
    // Verify that the Swagger docs page loads correctly
    cy.contains('BookFellas').should('be.visible'); // Check application title
    cy.contains('Chat').should('be.visible'); // Check if the Chat model is visible
  });

  it('should open the GET /chat/{id} endpoint and try to execute with a valid ID', () => {
    cy.get('#operations-chat-getChatById').click(); // Click on the GET /chat/{id} endpoint
    cy.contains('Parameters').should('be.visible'); // Verify that the parameters section is visible
    cy.get('.btn.try-out__btn').should('be.visible').click(); // Click on the "Try it out" button
    cy.get('input[placeholder="id - ID of the chat"]').type('486525632586'); // Input valid chat ID
    cy.get('.btn.execute.opblock-control__btn').click(); // Execute the request

    // Verify the response
    cy.contains('"id": 486525632586').should('be.visible'); // Verify that the chat ID matches
    cy.contains('200').should('be.visible'); // Verify that the response status code is 200
    cy.contains('"messages"').should('be.visible'); // Verify that the response contains messages
  });

  it('should return 404 when trying to get a non-existent chat ID', () => {
    cy.get('#operations-chat-getChatById').click(); // Click on the GET /chat/{id} endpoint
    cy.contains('Parameters').should('be.visible'); // Verify that the parameters section is visible
    cy.get('.btn.try-out__btn').should('be.visible').click(); // Click on the "Try it out" button
    cy.get('input[placeholder="id - ID of the chat"]').type('999999'); // Input a non-existent chat ID
    cy.get('.btn.execute.opblock-control__btn').click(); // Execute the request

    // Verify the 404 response
    cy.contains('"message": "Chat not found"').should('be.visible'); // Verify the error message
    cy.contains('404').should('be.visible'); // Verify that the response status code is 404
  });

  it('should return 400 when the chat ID is empty', () => {
    cy.get('#operations-chat-getChatById').click(); // Click on the GET /chat/{id} endpoint
    cy.contains('Parameters').should('be.visible'); // Verify that the parameters section is visible
    cy.get('.btn.try-out__btn').should('be.visible').click(); // Click on the "Try it out" button
    cy.get('input[placeholder="id - ID of the chat"]').clear(); // Leave the chat ID empty
    cy.get('.btn.execute.opblock-control__btn').click(); // Execute the request


