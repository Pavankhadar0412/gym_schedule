package com.gymschedule.dto;

import lombok.Data;

@Data
public class UserProfileUpdateRequest {
    private String name;
    private Integer age;
    private String gender;
    private Integer height;
    private Integer weight;
    private String goal;
    private String experience;
    private Integer workoutFrequency;
    private String workoutDays;
    private String equipment;
    private String diet;
    private Integer mealsPerDay;
    private String allergies;
    private String dislikedFoods;
    private String proteinPreference;
    private String creatinePreference;
}
