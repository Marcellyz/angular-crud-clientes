package br.com.crud.api.repositorio;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.crud.api.modelo.Cliente;

@Repository
public interface Repositorio extends CrudRepository<Cliente, Long> {}
