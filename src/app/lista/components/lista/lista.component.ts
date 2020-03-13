import { DialogService } from './../../dialog.service';
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
    private dialogService: DialogService
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

  onConfirm() {
    this.dialogService.openConfirmDialog('Deseja adicionar este item na lista?').afterClosed()
      .subscribe(res => {
        if (res === true)
          this.insereItem();
      });
  }
}
