import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { AuthService } from './auth.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
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

@Component({
  selector: 'app-riesgos',
  templateUrl: './riesgos.component.html',
  styleUrls: ['./riesgos.component.scss']
})
export class RiesgosComponent implements OnInit {
  displayedColumns: string[] = [
    'headerData',
    'codigoId',
    'moneda',
    'documento',
    'aPaterno',
    'aMaterno',
    'nombres',
    'fechaNacimiento',
    'direccion',
    'ubigeo',
    'departamento',
    'provincia',
    'distrito',
    'inmueble',
    'cuotasAtrasada',
    'estado',
    'cuota',
    'fechaDesembolso',
    'nValorizacion',
    'vEdificacion',
    'vPropiedad',
    'vComercial',
    'vRealizacionSol',
    'vRealizacionDol',
    'fechaValorizacion',
    'idDistrito',
    'nCuotas',
    'cuotasAtrasadas',
  ];
  selectedDate: Date = new Date();
  dataSource: PeriodicElement[] = [];
  headerData: (index: number) => string = (index: number) => (index + 1).toString(); // Inicialización de headerData
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadApiData(); // Cargar los datos desde la API al inicializar el componente
  }
  getRowNumber(index: number): string {
    return (index + 1).toString();
  }

  onSubmit() {
    if (this.selectedDate) {
      const formattedDate = this.formatDate(this.selectedDate);
      console.log('Fecha seleccionada:', formattedDate);

      // Aquí puedes usar la variable formattedDate como string y enviarla donde necesites
      // Por ejemplo, puedes asignarla a una variable de tipo string y enviarla a través de una API
      // let fechaEnString: string = formattedDate;
      // Luego puedes usar "fechaEnString" donde lo necesites.
    }
  }

  onDateChange(event: any) {
    // Aquí puedes realizar alguna acción con el valor de la fecha seleccionada
    // Por ejemplo, puedes asignarla a la propiedad selectedDate
    this.selectedDate = event.value;
  }

  exportToExcel() {
    // Convertir los datos en formato de hoja de cálculo de Excel
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource);

    // Crear un libro de Excel y añadir la hoja de cálculo
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // Generar el archivo Excel
    const excelBuffer: any = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });
    const excelFileName = 'datos.xlsx'; // Nombre del archivo Excel
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, excelFileName); // Descargar el archivo usando file-saver
  }
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`; // Formato dd-mm-yyyy
  }
  loadApiData() {
    this.authService.getTablaData().subscribe((data: any[]) => {
      this.dataSource = data; // Asignar los datos obtenidos desde la API a la variable dataSource
    });
  }
}
