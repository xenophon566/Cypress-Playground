import "cypress-iframe";

context("iframe-one", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/iframeNested");
        cy.frameLoaded('[id="iframeNested"]');
    });

    it("取得iframe Nested中的iframe-one內容", () => {
        // 判斷是否有iframe-one
        cy.iframe().find(".iframe-one").should("be.visible");
    });
});

context("iframe-two", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/iframe-one");
        cy.frameLoaded('[id="iframeTwo"]');
    });

    it("取得iframe-one中的iframe-two內容", () => {
        // 判斷是否有iframe-two
        cy.iframe().find(".inner-iframeTwo").should("be.visible");
    });
});
