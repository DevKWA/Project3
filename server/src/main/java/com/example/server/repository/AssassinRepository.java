package com.example.server.repository;

import com.example.server.model.Assassin;
import org.springframework.data.repository.CrudRepository;

public interface AssassinRepository extends CrudRepository<Assassin, Long> {
}
