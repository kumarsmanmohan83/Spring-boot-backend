package com.prog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prog.entity.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

}
