import "cypress-iframe";
import "cypress-wait-until";
require("cypress-xpath");

const ecpUrl = `https://rdqa.chainsea.com.tw:42122/ecp/`;

describe("Open ECP", () => {
    context("ECP Login", () => {
        beforeEach(() => {
            cy.visit(ecpUrl);
            cy.get("#LoginNameCell > .JuiInputBox > input").type("administrator");
            cy.get("#PasswordCell > .JuiInputBox > input").type("111111");
            cy.get("#LoginButton").click();
        });

        it("進入ECP頁面", () => {
            cy.get(".QsContent").should("be.visible");

            // 移除Dialog - JuiDialog
            cy.get(".JuiDialog").then(($elem) => {
                $elem.remove();
            });

            // 移除Mask - JuiDialogMask
            cy.get(".JuiDialogMask").then(($elem) => {
                $elem.remove();
            });

            // 檢查是否有聯絡人按鈕並點擊按鈕
            cy.get("#PageSwitch > :nth-child(2)").should("be.visible").click();

            // 點擊登入文字客服群組按鈕
            cy.wait(2000);
            cy.get("iframe#SecondaryHomepage").then((iframe) => {
                const body = iframe.contents().find("body");
                cy.wait(2000);
                cy.wrap(body)
                    .find(".JuiToolBarRight")
                    .within((elem) => {
                        cy.wrap(elem)
                            .find(".JuiToolBarControlCell")
                            .eq(2)
                            .find(".JuiToolButton")
                            .should("length", 1)
                            .click();
                    });

                // OK登入文字客服群組
                cy.wait(2000);
                cy.get("iframe[src='Ecp.ChatWorkGroup.LoginList.page']").then((iframe) => {
                    const body = iframe.contents().find("body");
                    cy.wait(2000);
                    cy.wrap(body).find(".JuiListCheckCell").eq(1).click();

                    cy.wait(2000);
                    cy.wrap(body)
                        .find(".JuiToolBarRight")
                        .within((el) => {
                            cy.wrap(el)
                                .find(".JuiToolBarControlCell")
                                .eq(0)
                                .find(".JuiToolButton")
                                .should("length", 1)
                                .click();
                        });
                });
            });
        });
    });

    // it("打開WebChat頁面", () => {
    //     cy.waitUntil(() =>
    //         getIframeBody("#ifMain").within((el) => {
    //             // Cypress.$($el[0]).find("#ChangeEditorButton").click();
    //             cy.frameLoaded('[id="ifMain"]');
    //             cy.wait(2000);
    //             // console.log(cy.iframe().find("div"));
    //             cy.iframe().find("div").click();
    //             console.log(Cypress.$(el).find("div"));
    //         })
    //     );
    // });
});
