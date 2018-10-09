import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {
        const leyenda = 'Progreso de carga';
        component.leyenda = leyenda;
        fixture.detectChanges(); // disparar detección de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain(leyenda);
    });

    it('Debe mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges(); // disparar detección de cambios
        fixture.whenStable().then( () => {
            const elem = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(elem.value).toBe('55');
        });
    });

    it('Debe incrementar/decrementar en 5 con un click en el boton', () => {
        const elem = fixture.debugElement.queryAll(By.css('.btn'));
        elem[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        elem[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('En el titulo del componente el progreso debe ser 45', () => {
        const button = fixture.debugElement.queryAll(By.css('.btn'));
        button[0].triggerEventHandler('click', null);

        fixture.detectChanges(); // disparar detección de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('45');
    });

});
