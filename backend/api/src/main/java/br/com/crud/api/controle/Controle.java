package br.com.crud.api.controle;

import org.springframework.web.bind.annotation.RestController;

import br.com.crud.api.modelo.Cliente;
import br.com.crud.api.repositorio.Repositorio;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/clientes/")
@CrossOrigin(origins = "*")
public class Controle {

    @Autowired
    private Repositorio acao;

    // Endpoint para cadastrar um cliente
    @PostMapping
    public Cliente cadastrar(@RequestBody Cliente cliente) {
        return acao.save(cliente);
    }

    // Endpoint para listar todos os clientes
    @GetMapping
    public Iterable<Cliente> selecionar() {
        return acao.findAll();
    }

    // Endpoint para buscar um cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        Optional<Cliente> clienteOptional = acao.findById(id);
        if (clienteOptional.isPresent()) {
            return ResponseEntity.ok(clienteOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Endpoint para editar um cliente
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> editarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        Optional<Cliente> clienteExistente = acao.findById(id);
        if (clienteExistente.isPresent()) {
            cliente.setId(id);
            Cliente atualizado = acao.save(cliente);
            return ResponseEntity.ok(atualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para deletar um cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (acao.existsById(id)) {
            acao.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
