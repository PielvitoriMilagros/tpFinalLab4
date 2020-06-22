import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';

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

  ngOnInit(): void {
  }

}
