import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import * as XLSX from 'xlsx';
import { TurnosService } from 'src/app/servicios/turnos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Especialidad } from 'src/app/clases/especialidad';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  listaLog;
  listaTurnos;
  listaProfesionales;
  listaEspecialidades;

  grTwoListo=false;
  grThreeListo=false;
  grFourListo=false;
  grFiveListo=false;

  // Turnos por Especialidad
  grTwoOptions:ChartOptions;
  grTwoLabels:Label[];
  grTwoType:ChartType;
  grTwoLegend;
  grTwoPlugins;
  grTwoData:ChartDataSets[];
  // Turnos por Día
  grThreeOptions:ChartOptions;
  grThreeLabels:Label[];
  grThreeType:ChartType;
  grThreeLegend;
  grThreePlugins;
  grThreeData:ChartDataSets[];
  // Médicos por Turnos
  grFourLabels:Label[];
  grFourData:MultiDataSet;
  grFourType:ChartType;
  // Médicos por Día
  grFiveLabels:Label[];
  grFiveData:MultiDataSet;
  grFiveType:ChartType;
  // grFiveOptions:ChartOptions;
  // grFiveLabels:Label[];
  // grFiveType:ChartType;
  // grFiveLegend;
  // grFivePlugins;
  // grFiveData:ChartDataSets[];

  // doughnutChartLabels: Label[] = ['PUBG', 'Call of Duty', 'Fortnite'];
  // doughnutChartData: MultiDataSet = [
  //   [53, 30, 17]
  // ];
  // doughnutChartType: ChartType = 'doughnut';


  // barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: { xAxes: [{}], yAxes: [{}] },
  // };
  // barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   // { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Company A' },
  //   { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Company B' }
  // ];

  
  constructor(private logServ:LogService,private turnoServ:TurnosService,private userServ:UsuariosService, private espServ:EspecialidadesService) { 

    logServ.getLogs().subscribe(resp => {
      this.listaLog = resp;
    });

    turnoServ.getTurnos().subscribe(resp => {
      this.listaTurnos=resp;

      userServ.getUsuarioByTipo('Profesional').subscribe(res =>{
        this.listaProfesionales=res;

        espServ.getEspecialidades().subscribe(re =>{
          this.listaEspecialidades=re;
          
          
          this.getTurnosPorEspecialidad();
          this.getMedicosPorDia();
          this.getMedicosPorTurnos();
          this.getTurnosPorDia();
        });

      });
    });    


  }
  
  
  getTurnosPorEspecialidad(){
    
    let labels:string[]=[];
    let cantidades=[];

     this.grTwoOptions={
     responsive: true,
     scales: { xAxes: [{}], yAxes: [{}] },
   };
   this.grTwoType = 'bar'
   this.grTwoLegend=true;
   this.grTwoPlugins=[];

   this.listaEspecialidades.forEach(element => {
    labels.push(element.descripcion);     
   });
    
   this.grTwoLabels=labels;

   labels.forEach(especialidad => {
     let cantidad=0;
     this.listaTurnos.forEach(turno => {
       if(especialidad == turno.especialidad.descripcion){
         cantidad++;
       }
     });
     cantidades.push(cantidad);

   });

   this.grTwoData=[{data:cantidades,label:'Turnos'}];

   this.grTwoListo=true;
  }


  getTurnosPorDia(){
  //   let labels:string[]=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  //   let lblAux:number[]=[0,1,2,3,4,5,6];
  //   let cantidades=[];
  //   let d:Date;
  //   let diaSemana;

  //    this.grThreeOptions={
  //    responsive: true,
  //    scales: { xAxes: [{}], yAxes: [{}] },
  //  };
  //  this.grThreeType = 'bar'
  //  this.grThreeLegend=true;
  //  this.grThreePlugins=[];


  //  lblAux.forEach(element => {
  //    let cantidad=0;
  //    this.listaTurnos.forEach(turno => {
  //      console.log(d);
  //      d = turno.dia;
  //      console.log(d);
  //      diaSemana=d.getDay();
  //      if(element == diaSemana){
  //        cantidad++;
  //      }
  //    });
  //    cantidades.push(cantidad);
  //  });

  //  this.grThreeLabels=labels;
  //  this.grThreeData=[{data:cantidades,label:'Cantidad de Turnos'}];

  }

  
  getMedicosPorTurnos(){
    
    let labels:string[]=[];
    let profID:string[]=[];
    let cantidades=[];

    let profesional;

     this.grFourType= 'doughnut';
    
  this.listaProfesionales.forEach(element => {
    profesional = element.apellido + ', '+element.nombre;
    labels.push(profesional);
    profID.push(element.id);

  });
  

  profID.forEach(element => {
    let cantidad=0;
    this.listaTurnos.forEach(turno => {
      if(element == turno.profesional.id)
      cantidad++;
    });
    cantidades.push(cantidad);
  });

  this.grFourLabels=labels;
  
  this.grFourData=[cantidades];
  
  this.grFourListo=true;

  }
  
  
  getMedicosPorDia(){
    let labels:string[]=[];
    let cantidades=[];
    let cantidad;

    let profesional;

     this.grFiveType= 'doughnut';
    
  this.listaProfesionales.forEach(element => {
    cantidad=0;
    profesional = element.apellido + ', '+element.nombre;
    labels.push(profesional);
    cantidad=element.dias.length;
    cantidades.push(cantidad);
  });
  

  this.grFiveLabels=labels;
  
  this.grFiveData=[cantidades];
  
  this.grFiveListo=true;


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
