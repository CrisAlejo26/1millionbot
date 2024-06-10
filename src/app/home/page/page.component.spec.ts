// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageComponent } from './page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Componente page', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permite el uso de elementos no reconocidos como 'app-nav-bar', etc.
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Crea el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Incluye un componente nav-bar', () => {
        const navBar = fixture.debugElement.nativeElement.querySelector('app-nav-bar');
        expect(navBar).toBeTruthy();
    });

    it('Incluye un componente seccion-demo', () => {
        const seccionDemo = fixture.debugElement.nativeElement.querySelector('app-seccion-demo');
        expect(seccionDemo).toBeTruthy();
    });

    it('Incluye un componente chat-bot', () => {
        const chatBot = fixture.debugElement.nativeElement.querySelector('app-chat-bot');
        expect(chatBot).toBeTruthy();
    });

});
