describe("Search cep Address", () => {
    it("Tries to search for a cep", () =>{
        cy.visit("http://localhost:3000/")
        cy.viewport(1440, 900)

        cy.get("input").type("17067640");

        cy.get('button').click();
        
        cy.contains("Logradouro");
        cy.get('input[value="Alameda Edson"]');

        cy.contains("Cidade");
        cy.get('input[value="Bauru"]');
    
    })
})