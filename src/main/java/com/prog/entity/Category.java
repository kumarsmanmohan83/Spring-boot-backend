package com.prog.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
@Entity
@Table(name="Category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   private int Id;
   private int category_id;
   private String category_name;
public int getId() {
	return Id;
}
public void setId(int id) {
	Id = id;
}
public int getCategory_id() {
	return category_id;
}
public void setCategory_id(int category_id) {
	this.category_id = category_id;
}
public String getCategory_name() {
	return category_name;
}
public void setCategory_name(String category_name) {
	this.category_name = category_name;
}
@Override
public String toString() {
	return "Category [Id=" + Id + ", category_id=" + category_id + ", category_name=" + category_name + "]";
}
   
}
