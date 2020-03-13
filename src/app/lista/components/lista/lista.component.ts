import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  lista: string[] = [];

  itemForm: FormGroup = this.fb.group({
    'item': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initLista();
  }

  insereItem() {
    if (this.itemForm.valid) {
      this.lista.push(this.itemForm.get('item').value);
      this.itemForm.reset();
    }
  }

  private initLista() {
    this.lista = [
      'Item A',
      'Item B'
    ];
  }
}
