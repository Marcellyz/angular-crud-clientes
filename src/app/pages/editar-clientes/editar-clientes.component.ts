import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

import { Cliente } from '../../model/Cliente';
import { ClienteService } from '../../service/cliente.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editar-clientes',
  imports: [
    HeaderComponent,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.scss',
})
export class EditarClientesComponent {
  clienteForm: FormGroup; // Declarando o FormGroup para o formulário

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    // Inicializando o FormGroup com campos e validações
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(1)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  editarCliente() {
    if (this.clienteForm.valid) {
      const cliente: Cliente = this.clienteForm.value;
      this.clienteService.editarCliente(cliente).subscribe({
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
