package com.prog.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prog.entity.Category;
import com.prog.entity.Expense;
import com.prog.entity.UserDtls;
import com.prog.repository.CategoryRepository;
import com.prog.repository.ExpenseRepository;
import com.prog.repository.UserRepository;

@Controller
@CrossOrigin("*")
@RestController
@RequestMapping("")
public class UserController {
	@Autowired
	private UserRepository repo;
	@Autowired
	private ExpenseRepository repo1;
	@Autowired
	private CategoryRepository repo2;
	/*@GetMapping("/")
     public String home()
     {
    	 return "index";
     }
	@RequestMapping("/register")
	public String after_index_register()
	{
		return "register";
	}
	@RequestMapping("/login")
	public String after_index_login()
	{
		return "login";
	}
	@PostMapping("/Login")
	public String afterlogin()
	{
		return "after_login"; 
	}*/
	@PostMapping("/Register")
	public UserDtls register(@RequestBody UserDtls u)
	{
		System.out.println(u);
		return repo.save(u);
	}
	
	@PostMapping("/Expense_Dtls")
		public Expense expense_add(@RequestBody Expense t)
		{
			System.out.println(t);
			return repo1.save(t);
			
		}
	@PostMapping("/Category_Dtls")
	public Category category_add(@RequestBody Category t)
	{
		System.out.println(t);
		return repo2.save(t);
	}
	@GetMapping("/userExp")
	public List<Expense> listUsers() {
		List<Expense> listUsers = repo1.findAll();
	return listUsers;
	}
	@GetMapping("/userCat")
	public List<Category> listCat() {
		List<Category> listCat = repo2.findAll();
	return listCat;
	}
	@GetMapping("/user")
	public List<UserDtls> getUsers() {
		List<UserDtls> getUsers = repo.findAll();
	return getUsers;
	}
	
	
     
}
