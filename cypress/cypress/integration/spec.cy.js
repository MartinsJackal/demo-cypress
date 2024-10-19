describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        cy.visit('http://localhost:5000/');
    });

    it('Teste 2: Verifica item na página', () => {
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns');
    });    

    it('Teste 3: Calcula Frete', () => {
        cy.get('[data-id=3]').within(() => {
            cy.get('input').type('10000-000');
            cy.contains('Calcular Frete').click();
            cy.wait(2000);
        });
        cy.get('.swal-text').contains('O frete é: R$');
        cy.get('.swal-button').click();
    });

    it('Teste 4: Realizar compra do livro', () => {
        // Seleciona e clica no botão Comprar
        cy.contains('Comprar').click();

        // Espera que o pop-up apareça
        cy.wait(2000); // Ajuste o tempo de espera conforme necessário

        // Verifica a mensagem de confirmação
        cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso');

        // Fecha o pop-up clicando no botão
        cy.get('.swal-button').click();
    });
});
