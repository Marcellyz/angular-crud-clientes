import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { Cliente } from '../../model/Cliente';
import { CommonModule, NgIf } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-clientes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss'], // Correção: "styleUrl" para "styleUrls"
})
export class CadastrarClientesComponent {
  clienteForm: FormGroup; // Declarando o FormGroup para o formulário

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    // Inicializando o FormGroup com campos e validações
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(1)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  cadastrarNovoCliente() {
    if (this.clienteForm.valid) {
      const cliente: Cliente = this.clienteForm.value;
      this.clienteService.cadastrarCliente(cliente).subscribe({
        next: () => {
          alert('Cliente cadastrado com sucesso!');
          this.clienteForm.reset();
        },
        error: (error) => {
          console.error('Erro ao cadastrar cliente:', error);
        },
      });
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
