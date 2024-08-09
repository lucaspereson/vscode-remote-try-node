import { expect } from 'chai';
import { square } from '../server.js'; 

describe('square function', () => {
    it('Debe devolver el cuadrado de un número positivo', () => {
        const result = square(5);
        expect(result).to.equal(25);
    });

    it('Debe devolver el cuadrado de un número negativo', () => {
        const result = square(-3);
        expect(result).to.equal(9);
    });

    it('Debe devolver 0 para una entrada de 0', () => {
        const result = square(0);
        expect(result).to.equal(0);
    });

    it('Debe manejar números decimales', () => {
        const result = square(2.5);
        expect(result).to.equal(6.25);
    });
});
//npx mocha