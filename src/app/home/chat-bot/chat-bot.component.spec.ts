import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatBotComponent } from './chat-bot.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

describe('Componente ChatBot', () => {
    let component: ChatBotComponent;
    let fixture: ComponentFixture<ChatBotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChatBotComponent],
            imports: [
                MatMenuModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatBotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Crea el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Alterna la visibilidad del chat al hacer clic en el botón de toggle', () => {
        const button = fixture.debugElement.nativeElement.querySelector('.chatbot-toggler');
        button.click();
        fixture.detectChanges();
        expect(component.isActive).toBeTrue();

        button.click();
        fixture.detectChanges();
        expect(component.isActive).toBeFalse();
    });

    it('Cierra el chat cuando está activo', () => {
        component.isActive = true;
        component.closeChat();
        expect(component.isActive).toBeFalse();
    });
});
