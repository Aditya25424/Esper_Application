package com.project.esperApp.repository;

import com.project.esperApp.entity.Follow;
import com.project.esperApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FollowRepository extends JpaRepository<Follow, Long> {


}
