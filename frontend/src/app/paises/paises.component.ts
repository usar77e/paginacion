import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  page = 0;
  size = 4;
  order = 'id';
  asc = true;

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises(){
    this.paisesService.paises(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err.error);
        )
      }
    );
  }

}
