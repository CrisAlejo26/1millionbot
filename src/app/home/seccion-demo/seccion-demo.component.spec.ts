import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDemoComponent } from './seccion-demo.component';

describe('Componente sección demo', () => {
    let component: SeccionDemoComponent;
    let fixture: ComponentFixture<SeccionDemoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SeccionDemoComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SeccionDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Crear el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Muestra los textos correctamente', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const h3Elements = compiled.querySelectorAll('h3');
        expect(h3Elements.length).toBe(4);
        expect(h3Elements[0].textContent).toContain(' +10 millones de interacciones ');
        expect(h3Elements[1].textContent).toContain(' +90% de respuestas acertadas ');
        expect(h3Elements[2].textContent).toContain(' Personalizado para tu empresa ');
        expect(h3Elements[3].textContent).toContain(' Generacion de prospectos ');
    });

    it('Boton con solícitud de demo', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const button = compiled.querySelector('button.btn-demo');
        expect(button).toBeTruthy();
        expect(button!.textContent).toContain('Solicitar una demo');
    });

    // Este test asume que has implementado un método `requestDemo` en tu componente.
    it('Funcion de click en el boton', () => {
        spyOn(component, 'requestDemo');
        const button = fixture.nativeElement.querySelector('button.btn-demo');
        button.click();
        fixture.detectChanges(); // Asegura que todos los ciclos de detección de cambios se completen
        expect(component.requestDemo).toHaveBeenCalled();
    });
});
