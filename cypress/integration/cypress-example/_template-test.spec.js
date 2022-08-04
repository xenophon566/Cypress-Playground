context("Image RWD Test", () => {
    beforeEach(() => {
        cy.visit("https://qbi.chainsea.com.tw:39833/template-test.html");
    });

    it("測試螢幕 macbook-15", () => {
        cy.viewport("macbook-15");
        cy.wait(200);

        // 測試圖片是否可見
        cy.get("img").should("be.visible");

        // 測試macbook-15圖片寬度是否為 1400
        cy.get("img").invoke("width").should("be.eq", 1400);
    });

    it("測試螢幕 iphone-6 portrait", () => {
        cy.viewport("iphone-6", "portrait");
        cy.wait(200);

        // 測試圖片是否隱藏
        cy.get("img").should("not.be.visible");
    });

    it("測試螢幕 iphone-6 landscape", () => {
        cy.viewport("iphone-6", "landscape");
        cy.wait(200);

        // 測試圖片是否可見
        cy.get("img").should("be.visible");

        // 測試macbook-15圖片寬度是否為 640
        cy.get("img").invoke("width").should("be.eq", 640);
    });
});
