import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { By } from '@angular/platform-browser';

describe('Componente de NavBar', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavBarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Crea el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Muestra el logotipo', () => {
        const compiled = fixture.debugElement.nativeElement;
        const img = compiled.querySelector('img');
        expect(img.src).toContain('assets/1millonBot_logo.png');
    });

    it('Lista los elementos del menú', () => {
        const compiled = fixture.debugElement.nativeElement;
        const menuItems = compiled.querySelectorAll('ul > li');
        expect(menuItems.length).toBeGreaterThan(0);
    });

    it('Cambia el estado de visibilidad al hacer clic en el botón del menú', () => {
        const button = fixture.debugElement.nativeElement.querySelector('.open-sidebar-button');
        button.click();
        fixture.detectChanges();
        const sidebar = fixture.debugElement.nativeElement.querySelector('.links-container');
        expect(sidebar).toBeTruthy();
    });

    it('Navega a las secciones correspondientes al hacer clic en los enlaces', () => {
        const anchors = fixture.debugElement.queryAll(By.css('a'));
        expect(anchors.some(a => a.nativeElement.getAttribute('href') === '#')).toBeTrue();
    });
});
