import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
export const routes: Routes = [

    {
        path:'',
        component:First,
    },
    {
        path:'app-second',
        component:Second
    }
];
