import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
import { error } from 'node:console';

@Component({
  selector: 'app-editar-clientes',
  imports: [
    HeaderComponent,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.scss',
})
export class EditarClientesComponent implements OnInit {
  clienteForm: FormGroup = new FormGroup({});
  idCliente!: number;
  clientes: Cliente[];

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientes = [{ id: 0, nome: '', idade: 0, cidade: '' }];
  }

  ngOnInit(): void {
    this.initializeForm();

    this.route.params.subscribe((params) => {
      this.idCliente = +params['id'];
      if (this.idCliente) {
        this.clienteService
          .buscarClientePorId(this.idCliente)
          .subscribe((cliente) => {
            this.clienteForm.patchValue(cliente);
          });
      }
    });
  }

  initializeForm() {
    this.clienteForm = this.fb.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: [null, [Validators.required, Validators.min(1)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  editarCliente(): void {
    if (this.clienteForm.valid) {
      const cliente: Cliente = {
        ...this.clienteForm.value,
        id: this.idCliente,
      };

      this.clienteService.editarCliente(cliente).subscribe(() => {
        alert('Cliente atualizado com sucesso!');
        this.router.navigate(['/listar-clientes']);
      });
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
