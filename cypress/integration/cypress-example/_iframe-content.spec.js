import "cypress-iframe";

context("iframe-content", () => {
    beforeEach(() => {
        cy.visit("https://qbi.chainsea.com.tw:39722/cbe/login.html");
        cy.get("#username").type("administrator");
        cy.get("#pwd").type("111111");
        cy.get("#captcha").type("1234");
        cy.get("#submit").click();
        cy.wait(1000);

        cy.frameLoaded('[id="dashboardIFrame"]');
    });

    it("取得iframe裡的Dashboard內容", () => {
        // 判斷是否有3個圓盤圖
        cy.iframe()
            .find(".chart")
            .should(($html) => {
                expect($html).to.have.length(3);
            });

        // 判斷是否有趨勢圖
        cy.iframe().find(".usage-trend").should("be.visible");
    });
});
