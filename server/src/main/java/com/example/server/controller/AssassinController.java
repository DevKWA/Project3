package com.example.server.controller;
import com.example.server.model.Assassin;
import com.example.server.service.AssassinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/assassin")

public class AssassinController {
    @Autowired
    AssassinService assassinService;
    @GetMapping
    public Iterable<Assassin> getAssassins() {
        return assassinService.getAssassins();
    }
    @PostMapping
    public Assassin createAssassin(@RequestBody Assassin assassin) {
        return assassinService.createAssassin(assassin);
    }
}
