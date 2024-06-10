import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSliderComponent } from './card-slider.component';

describe('Componente CardSlider', () => {
    let component: CardSliderComponent;
    let fixture: ComponentFixture<CardSliderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardSliderComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Crear el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Muestra tres imágenes con sus descripciones', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const images = compiled.querySelectorAll('img');
        const headers = compiled.querySelectorAll('h2');
        const paragraphs = compiled.querySelectorAll('p');

        expect(images.length).toBe(3);
        expect(headers.length).toBe(3);
        expect(paragraphs.length).toBe(3);
        expect(images[0].src).toContain('assets/img1.jpg');
        expect(headers[0].textContent).toContain('+10 millones de interacciones');
        expect(paragraphs[0].textContent).toContain('Lorem ipsum dolor sit amet');
    });

    it('Cambia la imagen visible cuando se selecciona un punto diferente', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const dot2 = compiled.querySelector('label[for="img2"]') as HTMLElement;
        dot2.click();
        fixture.detectChanges();

        const input2 = fixture.nativeElement.querySelector('#img2') as HTMLInputElement;
        expect(input2.checked).toBeTruthy();
    });

    it('Tener un botón para leer más', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const readMoreButton = compiled.querySelector('button');
        expect(readMoreButton).toBeTruthy();
        expect(readMoreButton!.textContent).toContain('Leer más');
    });
});
