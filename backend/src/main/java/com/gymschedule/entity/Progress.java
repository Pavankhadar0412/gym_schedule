package com.gymschedule.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "progress")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    private Integer currentStreak;
    private Integer longestStreak;
    private Integer weeklyCompletion;
    private Integer monthlyCompletion;
    
    @Column(length = 2000)
    private String weightHistory; // JSON array
    
    @Column(length = 2000)
    private String workoutHistory; // JSON array
    
    @Column(length = 2000)
    private String calorieHistory; // JSON array
    
    @Column(length = 2000)
    private String proteinHistory; // JSON array
    
    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    
    private LocalDateTime updatedAt;
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
