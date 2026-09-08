package com.gymschedule.repository;

import com.gymschedule.entity.NutritionPlan;
import com.gymschedule.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NutritionPlanRepository extends JpaRepository<NutritionPlan, Long> {
    Optional<NutritionPlan> findByUser(User user);
}
