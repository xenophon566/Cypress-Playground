import "cypress-iframe";
import "cypress-wait-until";
require("cypress-xpath");
import { recurse } from "cypress-recurse";

const webchatUrl = `https://rdqa.chainsea.com.tw:42122/gateway/webchat/chat.html?tenantCode=84459043-142`;

context("Open WebChat", () => {
    beforeEach(() => {
        cy.visit(webchatUrl);
        cy.xpath('//*[@id="imgICON"]').click();
    });

    it("打開WebChat", () => {
        cy.wait(2000);
        cy.get("iframe#ifMain").then((iframe) => {
            const body = iframe.contents().find("body");
            cy.wrap(body).find("#ChangeEditorButton").click();
            cy.wrap(body).find("#ApplyAgentButton").click();
            cy.wrap(body).find("#60b1cf29-667f-444e-95b0-66c946caede4").click();

            // Type message then send
            cy.wrap(body).find("#Editor").should("be.visible").type("Hello World", { force: true });
            cy.wrap(body).find("#SendButton").click({ force: true });
        });
    });

    // it("獲得ECP回傳的訊息", () => {
    //     recurse(
    //         () => cy.task("randomNumber"),
    //         (n) => n === 7,
    //         {
    //             limit: 50,
    //             delay: 1000,
    //         }
    //     );
    // });
});
