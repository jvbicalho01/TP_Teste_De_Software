describe("Test ToDo Aplication", () => {
  let input = "Finalizar parte escrita do trabalho";
  beforeEach(() => {
    cy.visit("/");
  });
  it("should create a new task", () => {
    cy.get("[data-cy=todo-form-input]").type(input);
    cy.get("[data-cy=select-category]").select("Estudos");
    cy.get(".color:nth(2)").click();
    cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=todo]").contains(input).should("exist");
  });
  it("should delete a task", () => {
    cy.get(".todo__remove:first").click();
    cy.get("[data-cy=todo]")
      .contains("Criar funcionalidade no sistema")
      .should("not.exist");
  });
  it("should complete a task", () => {
    cy.get(".todo__complete:first").click();
    cy.get(".todo:first").should(
      "have.css",
      "text-decoration",
      "line-through solid rgb(255, 255, 255)"
    );
  });
  it("should check if ascend order is working properly", () => {
    cy.get("[data-cy=asc-button]").click();
    cy.get(".todo__content:first > p:first").should(
      "have.text",
      "Criar funcionalidade no sistema"
    );
  });
  it("should check if descend order is working properly", () => {
    cy.get("[data-cy=desc-button]").click();
    cy.get(".todo__content:last > p:first").should(
      "have.text",
      "Criar funcionalidade no sistema"
    );
  });
  it("should show an alert if no title", () => {
    cy.get("[data-cy=select-category]").select("Estudos");
    cy.get(".color:nth(2)").click();
    cy.get("[data-cy=submit]").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Você esqueceu de digitar o título da tarefa!");
    });
  });
  it("should show an alert if category is not selected", () => {
    cy.get("[data-cy=todo-form-input]").type("Ler artigos sobre Kubernetes");
    cy.get(".color:nth(2)").click();
    cy.get("[data-cy=submit]").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Você esqueceu de selecionar a categoria da tarefa!"
      );
    });
  });
  it("should show an alert if color is not selected", () => {
    cy.get("[data-cy=todo-form-input]").type("Assistir aula de Flask");
    cy.get("[data-cy=select-category]").select("Estudos");
    cy.get("[data-cy=submit]").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Você esqueceu de selecionar a cor!");
    });
  });
  it("should filter completed tasks", () => {
    cy.get(".todo__complete:first").click();

    cy.get("[data-cy=status-select]").select("Completed");

    cy.get(".todo").each(($el) => {
      cy.wrap($el).should(
        "have.css",
        "text-decoration",
        "line-through solid rgb(255, 255, 255)"
      );
    });
  });
  it("should filter uncompleted tasks", () => {
    cy.get(".todo__complete:first").click();

    cy.get("[data-cy=status-select]").select("Incomplete");

    cy.get(".todo").each(($el) => {
      cy.wrap($el).should(
        "not.have.css",
        "text-decoration",
        "line-through solid rgb(255, 255, 255)"
      );
    });
  });
});
