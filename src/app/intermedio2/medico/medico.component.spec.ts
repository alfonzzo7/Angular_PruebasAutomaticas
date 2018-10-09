import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {
    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        componente = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect(componente).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        const nombre = 'Juan';
        const resp = componente.saludarMedico(nombre);
        expect(resp).toContain(nombre);
    });

});
