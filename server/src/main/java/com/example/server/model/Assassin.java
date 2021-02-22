package com.example.server.model;
import javax.persistence.*;
// table in sql assassin_characters
// record/entry
// id, assassinName, quote, birth, death, country
// { id: 11, assassinName: "Bayek of Siwa", quote: "", birth: "", death: "", country: "" }
@Entity
@Table(name = "assassin_characters")
public class Assassin {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String assassinName;
    // can nullable = to an empty string ???
    @Column
    private String quote;
    @Column
    private String birth;
    @Column
    private String death;
    @Column
    private String country;

    public Assassin (){}
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getAssassinName() {
        return assassinName;
    }
    public void setAssassinName(String assassinName) {
        this.assassinName = assassinName;
    }
    public String getQuote() {
        return quote;
    }
    public void setQuote(String quote) {
        this.quote = quote;
    }
    public String getBirth() {
        return birth;
    }
    public void setBirth(String birth) {
        this.birth = birth;
    }
    public String getDeath() {
        return death;
    }
    public void setDeath(String death) {
        this.death = death;
    }
    public String getCountry(){
        return country;
    }
}

