package com.example.server.service;

import com.example.server.model.Assassin;

public interface AssassinService {

    Iterable<Assassin> getAssassins();
    Assassin createAssassin(Assassin assassin);
}
