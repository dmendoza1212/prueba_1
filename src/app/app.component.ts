import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { AuthService } from './views/riesgos/auth.service';

import { MatPaginatorModule } from '@angular/material/paginator';

export interface PeriodicElement {
  codigoId: string; //;
  moneda: string; //;
  documento: string; //;
  aPaterno: string; //;  ,
  aMaterno: string; //;   ,
  nombres: string; //; ,
  fechaNacimiento: string; //;,
  direccion: string; //;
  ubigeo: string; //;  ,
  departamento: string; //;                                                                                                  ,
  provincia: string; //;                                                                                                  ,
  distrto: string; //;                                                                                            ,
  inmueble: string; //;  ,
  cuotasAtrasada: string; //;  ,
  estado: string; //;  ,
  cuota: string; //;.74  ,
  fechaDesembolso: string; //;-NOV-14  ,
  nValorizacion: string; //;  ,
  vEdificacion: string; //;.36  ,
  vPropiedad: string; //;  ,
  vComercial: string; //;  ,
  vRealizacionSol: string; //;.6  ,
  vRealizacionDol: string; //;  ,
  fechaValorizacion: string; //;-14  ,
  idDistrito: string; //;                                ,
  nCuotas: string; //;  ,
  cuotasAtrasadas: string; //;
}

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
  // imports: [MatPaginatorModule],

})


export class AppComponent {

}
