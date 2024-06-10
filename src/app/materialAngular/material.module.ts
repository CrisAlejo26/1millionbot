import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        MatButtonModule, MatDividerModule, MatIconModule, MatButtonModule, MatMenuModule
    ]
})
export class MaterialModule { }
