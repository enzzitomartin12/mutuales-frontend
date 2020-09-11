import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.png',
                label: 'IPCYMER',
                text:
                    'Instituto de Promoción, Cooperativas y Mutuales de Entre Ríos'
            },
            {
                imagePath: 'assets/images/slider2.png',
                label: 'Facultad de Ciencia y Tecnología',
                text: 'Universidad Autónoma de Entre Ríos'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Bienvenido a la pagina de SPU Mutuales`
            },
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
