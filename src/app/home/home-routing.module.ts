import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

// localhost:4200/home/
const routes: Routes = [
    {
        path: '',
        component: PageComponent,
    }
];

// localhost:4200/home/
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
