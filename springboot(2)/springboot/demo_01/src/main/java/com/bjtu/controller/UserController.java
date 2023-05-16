package com.bjtu.controller;

import com.bjtu.domain.User;
import com.bjtu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Objects;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/login1")
    public String login(Model model){
        return  "login1";
    }
    @GetMapping("/register")
    public String register(Model model){
        return  "register";
    }


    @RequestMapping("/registerSub")
    public String register(User user, Model model){
        if(user.getUsername()==null){
            model.addAttribute("message","用户名不能为空");
            return "register"; //注册失败回到注册
        }
        if(user.getPassword()==null) {
            model.addAttribute("message","密码不能为空");
            return "register"; //注册失败回到注册
        }
        if(userService.getByName(user.getUsername())!=null)
        {
            model.addAttribute("message","用户名已存在");
            return "register"; //注册失败回到注册
        }
        else{
            //注册成功
            userService.save(user);
            model.addAttribute("message","注册成功");
            return "login1";  //注册成功跳转到登录
        }
    }

    @RequestMapping("/loginCheck")
    public String login(User user, HttpSession session,Model model){
        String username=user.getUsername();
        String password=user.getPassword();
        if(username==null){
            model.addAttribute("message","用户名不能为空");
            return "login1";//登录失败回到登录界面
        }
        if(password==null) {
            model.addAttribute("message","密码不能为空");
            return "login1";//登录失败回到登录界面
        }
        if(userService.getByName(username)==null)
        {
            model.addAttribute("message","用户名或密码错误");
            return "login1";//登录失败回到登录界面
        }
        if(Objects.equals(userService.getByName(username).getPassword(), password))
        {
            session.setAttribute("username",username);
            model.addAttribute("message","登陆成功");
            return "redirect:/";//登录成功之后,跳转到查询信息路径
        }
        else
        {
            model.addAttribute("message","用户名或密码错误");
            return "login1";//登录失败回到登录界面
        }
    }
}
