import { Component } from '@angular/core';

@Component({
    selector: 'app-seccion-demo',
    templateUrl: './seccion-demo.component.html',
    styleUrl: './seccion-demo.component.css'
})
export class SeccionDemoComponent {
    requestDemo(): void {
        console.log('Demo requested');
    }
}
