package com.freemarker_web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * References:
 * http://qiita.com/kazuki43zoo/items/e12a72d4ac4de418ee37
 */
//@Configuration
//@EnableWebMvc // 注意：Spring Bootの場合は、@EnableWebMvcはつけちゃダメ！！
public class WebMvcConfig extends WebMvcConfigurerAdapter {
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		//configurer.enable();
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		//registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
	}
}
