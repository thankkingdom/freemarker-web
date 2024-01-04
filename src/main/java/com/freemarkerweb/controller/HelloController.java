package com.freemarkerweb.controller;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("hello")
public class HelloController {

	@RequestMapping("index")
	public ModelAndView index() {
		ModelAndView mav = new ModelAndView();
		mav.addObject("name", "Mike");
		mav.addObject("date", new Date());
		mav.setViewName("index");
		return mav;
	}
}
