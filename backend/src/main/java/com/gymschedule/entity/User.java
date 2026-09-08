package com.gymschedule.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String name;
    
    private Integer age;
    private String gender;
    private Integer height; // in cm
    private Integer weight; // in kg
    
    private String goal;
    private String experience;
    private Integer workoutFrequency;
    
    @Column(length = 1000)
    private String workoutDays; // JSON array
    
    private String equipment;
    private String diet;
    private Integer mealsPerDay;
    
    @Column(length = 500)
    private String allergies;
    
    @Column(length = 500)
    private String dislikedFoods;
    
    private String proteinPreference;
    private String creatinePreference;
    
    @Column(nullable = false)
    private Boolean hasCompletedOnboarding = false;
    
    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    
    private LocalDateTime updatedAt;
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
