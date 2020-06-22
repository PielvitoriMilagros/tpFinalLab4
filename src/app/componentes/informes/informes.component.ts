import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  listaLog;

  constructor(private logServ:LogService) { 

    logServ.getLogs().subscribe(resp => {
      this.listaLog = resp;
    });

  }

  ExportTOExcel() {
    let exportar=[];
    this.listaLog.forEach(element => {
      let prof = element.profesional.apellido + ', ' + element.profesional.nombre;
      exportar.push({Profesional:prof,Dia:element.dia,Horario:element.hora});      
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportar);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'logProfesionales.xlsx');  
  }

  ngOnInit(): void {
  }

}
