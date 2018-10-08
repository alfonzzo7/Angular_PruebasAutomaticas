import { usuarioIngresado } from './booelan';

describe('Pruebas de boolean', () => {
    it('Debe de retornar true', () => {
        const resp = usuarioIngresado();
        expect(resp).toBeTruthy();
    });
});
