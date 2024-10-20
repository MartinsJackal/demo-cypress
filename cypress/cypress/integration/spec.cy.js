describe('Teste End-to-End', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:5000/');
    });

    it('Teste 1: Verifica item na página', () => {
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns');
    });

    it('Teste 2: Calcula Frete', () => {
        cy.get('[data-id=3]').within(() => {
            cy.get('input').type('10000-000');
            cy.contains('Calcular Frete').click();
        });

        cy.get('.swal-text').should('contain.text', 'O frete é: R$');
        cy.get('.swal-button').click();
    });

    it('Teste 3: Realizar compra do livro', () => {
        // Clica no botão "Comprar"
        cy.contains('Comprar').click();

        // Aguarda o pop-up de sucesso usando espera dinâmica
        cy.get('.swal-text', { timeout: 5000 })
            .should('contain.text', 'Sua compra foi realizada com sucesso');

        // Fecha o pop-up clicando no botão
        cy.get('.swal-button').click();
    });
});
