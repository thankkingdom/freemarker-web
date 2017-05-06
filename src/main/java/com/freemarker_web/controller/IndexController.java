package com.freemarker_web.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

	@RequestMapping("index")
	public ModelAndView index() {
		
		Map<String, Object> modelMap = new HashMap<String, Object>();
		modelMap.put("name", "<Sharlock Homes>");
		modelMap.put("date", new Date());
		
		ModelAndView mav = new ModelAndView();
		mav.addAllObjects(modelMap);
		return mav;
	}
	
	@RequestMapping("gos")
	public ModelAndView gocart() {
		ModelAndView mav = new ModelAndView();
		return mav;
	}
}
