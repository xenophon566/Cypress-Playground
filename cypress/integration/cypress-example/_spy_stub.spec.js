const hello = {
    add(a, b) {
        return a + b;
    },
    global: () => {
        return "Mall";
    },
    world: () => {
        return "Hello";
    },
    testReturn: () => {
        return "testReturn";
    },
    greet(name) {
        return `Hello, ${name}!`;
    },
};

context("Spy與Stub的自動測試", () => {
    beforeEach(() => {});

    it("最普通的執行方式", () => {
        expect(hello.world()).to.equal("Hello");
    });

    it("spy - 包裝一個方法記錄對該函數的調用和參數", () => {
        const spy = cy.spy(hello, "add");

        expect(hello.add(2, 3)).to.equal(5);

        expect(spy).to.be.calledWith(2, 3);

        expect(spy).to.be.calledWith(Cypress.sinon.match.number, Cypress.sinon.match.number);

        expect(spy).to.be.calledWith(Cypress.sinon.match(2), Cypress.sinon.match(3));

        expect(spy).to.be.calledWith(Cypress.sinon.match.any, 3);

        expect(spy).to.be.calledWith(Cypress.sinon.match.in([1, 2, 3]), 3);
    });

    it("stub - 創建一個存根並手動替換一個函數", () => {
        hello.global = cy.stub();
        hello.global();
        expect(hello.global).to.be.calledOnce;
    });

    it("stub - 用存根代替方法", () => {
        cy.stub(hello, "world");
        hello.world();
        expect(hello.world).to.be.calledOnce;
    });

    it("stub - 指定一個存根方法的返回值", () => {
        cy.stub(hello, "testReturn").returns("this is a return");
        const resp = hello.testReturn();
        console.log(resp);

        expect(hello.testReturn).to.be.calledOnce;
        expect(hello.testReturn()).to.equal("this is a return");
    });

    it("stub - 用存根帶入參數", () => {
        cy.stub(hello, "greet")
            .callThrough()
            .withArgs(Cypress.sinon.match.string)
            .returns("Hi")
            .withArgs(Cypress.sinon.match.number)
            .throws(new Error("Invalid name"));

        // input string
        expect(hello.greet("World")).to.equal("Hi");

        // input number
        expect(() => hello.greet(42)).to.throw("Invalid name");

        expect(hello.greet).to.have.been.calledTwice;

        // when no input equal (Hello, undefined!)
        expect(hello.greet()).to.equal("Hello, undefined!");
    });
});
