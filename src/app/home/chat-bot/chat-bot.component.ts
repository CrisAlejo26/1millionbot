import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-chat-bot',
    templateUrl: './chat-bot.component.html',
    styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
    @ViewChild('chatbox') public chatboxElement!: ElementRef;
    @ViewChild('chatInput') public chatInputElement!: ElementRef;
    @ViewChild('buttonContainer') public buttonContainer!: ElementRef;
    userMessage: string = '';
    inputInitHeight: number = 0;
    isActive: boolean = false;

    toggleChatbot(): void {
        this.isActive = !this.isActive;
    }

    closeChat(): void {
        if (this.isActive) {
            this.isActive = false;
            return;
        }
    }

    scrollRight() {
        this.buttonContainer.nativeElement.scrollLeft += 100;
    }
    scrollLeft() {
        this.buttonContainer.nativeElement.scrollLeft -= 100;
    }
}
