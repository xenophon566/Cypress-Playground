context("iframe-nested", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/iframeNested");
    });

    it("取得iframe Nested內容", () => {
        cy.get("#iframeNested").then((nested) => {
            cy.wrap(nested).should("be.visible");
            const nestedBody = nested.contents().find("body");
            cy.wrap(nestedBody)
                .find("#iframeTwo")
                .within((iframeTwo) => {
                    cy.get(iframeTwo).then((two) => {
                        cy.wrap(two).should("be.visible");
                        const twoBody = two.contents().find("body");
                        cy.wrap(twoBody)
                            .find(".inner-iframeTwo")
                            .within((inner) => {
                                cy.wrap(inner).find("h2").should("be.visible");
                            });
                    });
                });
        });
    });
});
