import { mensaje } from './string';

describe('Pruebas de string', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Pedro');
        expect(typeof resp).toBe('string');
    });
    it('Debe contener el nombre enviado', () => {
        const nombre = 'Pedro';
        const resp = mensaje(nombre);
        expect(resp).toContain(resp);
    });
});
