import { Component, OnInit } from '@angular/core';
import { Material } from '../material';
import { XptoAPService } from '../service/xpto-ap.service';

@Component({
  selector: 'has-lista-material',
  templateUrl: './lista-material.component.html',
  styleUrls: ['./lista-material.component.css']
})
export class ListaMaterialComponent implements OnInit {

  constructor(private service:XptoAPService) { }

  ngOnInit() {
    this.service
    .getClientes()
    .subscribe((data: Material[]) => this.Material = data,
    error => console.log(error));
  }

  Material: Material[];
  

}
