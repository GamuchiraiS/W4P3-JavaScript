// JavaScript source code
const chai = window.chai;
const expect = chai.expect;

//Prime Nums Test 1
describe("Is prime number", function () {
    it("should return false", function () {
        isPrimeNum(10);
        expect(false, chai.isPrime);
    });
});

//Prime Nums Test 1
describe("Is prime number", function () {
    it("should return true", function () {
        isPrimeNum(101);
        expect(true, chai.isPrime);
    });
});

//Prime Nums Test 1
describe("Is prime number", function () {
    it("should return false", function () {
        isPrimeNum(0);
        expect(false, chai.isPrime);
    });
});

