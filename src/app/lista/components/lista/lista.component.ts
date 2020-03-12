import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  protected item: FormControl;
  protected lista: string[] = [];

  constructor() { }

  ngOnInit() {
    this.initForm();
    this.initLista();
  }

  insereItem() {
    this.lista.push(this.item.value);
    this.item.reset();
  }

  private initForm() {
    this.item = new FormControl();
  }

  private initLista() {
    this.lista = [
      'Item A',
      'Item B'
    ];
  }
}
