import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarCepService } from './../buscar-cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.scss'],
})
export class FormEnderecoComponent implements OnInit {

  private teste: any;

  enderecoForm: FormGroup = this.fb.group({
    'cep': ['', [Validators.required]],
    'logradouro': ['', [Validators.required]],
    'complemento': ['', [Validators.required]],
    'bairro': ['', [Validators.required]],
    'localidade': ['', [Validators.required]],
    'uf': ['', [Validators.required]],
    'unidade': ['', [Validators.required]],
  });

  constructor(
    private cepService: BuscarCepService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  buscarCep() {
    this.cepService.buscarCep(this.enderecoForm.get('cep').value).subscribe(
      (data) => {
        /**
         * Não usei essa linha abaixo por que ela retorna mais campo e
         * da erro ao setar no enderecoForm pois não tem todos os campos
         * retornados
         * this.enderecoForm.setValue(data);
         */
        this.enderecoForm.get('cep').setValue(data['cep'])
        this.enderecoForm.get('logradouro').setValue(data['logradouro'])
        this.enderecoForm.get('complemento').setValue(data['complemento'])
        this.enderecoForm.get('bairro').setValue(data['bairro'])
        this.enderecoForm.get('localidade').setValue(data['localidade'])
        this.enderecoForm.get('uf').setValue(data['uf'])
        this.enderecoForm.get('unidade').setValue(data['unidade'])
      },
      (error) => console.error(error)
    );
  }
}
