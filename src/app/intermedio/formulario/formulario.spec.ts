import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
    let form: FormularioRegister;

    beforeEach(() => {
        form = new FormularioRegister(new FormBuilder());
    });

    it('Debe de crear un formulario con dos campos', () => {
        expect(form.form.contains('email')).toBeTruthy();
        expect(form.form.contains('password')).toBeTruthy();
    });
    it('Email debe de ser obligatorio', () => {
        const control = form.form.get('email');
        control.setValue('');

        expect(control.valid).toBeFalsy();
    });
    it('Email debe de ser un correo valido', () => {
        const control = form.form.get('email');
        control.setValue('test@test.com');

        expect(control.valid).toBeTruthy();
    });
});
