package com.example.server.service;
import com.example.server.model.Assassin;
import com.example.server.repository.AssassinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AssassinServiceImpl implements AssassinService {
    @Autowired
    AssassinRepository assassinRepository;
    @Override
    public Iterable<Assassin> getAssassins() {
        return assassinRepository.findAll();
    }

    @Override
    public Assassin createAssassin(Assassin assassin) {
        return assassinRepository.save(assassin);
    }
}