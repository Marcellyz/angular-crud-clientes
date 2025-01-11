import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../model/Cliente';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-deletar-clientes',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './deletar-clientes.component.html',
  styleUrl: './deletar-clientes.component.scss',
})
export class DeletarClientesComponent implements OnInit {
  idCliente!: number;
  clienteForm: FormGroup = new FormGroup({});
  clientes!: Cliente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clienteService: ClienteService,
  ) {

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

  deletar() {
    if (this.clienteForm.valid) {
      this.clienteService.deletarCliente(this.idCliente).subscribe(() => {
        alert('Cliente deletado com sucesso!');
      });
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }

  onCancel(){
    this.router.navigate(['/listar-clientes']);
  }
}
