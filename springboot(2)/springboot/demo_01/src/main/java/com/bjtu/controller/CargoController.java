package com.bjtu.controller;

import com.bjtu.domain.Cargo;
import com.bjtu.service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/cargo")
public class CargoController {

    @Autowired
    private CargoService cargoService;
    @GetMapping("/addEmp")
    public String add(Model model){
        return  "addEmp";
    }

    @GetMapping("/emplist1")
    public String index(Model model){
        return  "emplist";
    }

    @PostMapping("/submit")
    public String submit(Cargo cargo, HttpSession session, Model model){
        String cargo_owner=(String) session.getAttribute("username");
        cargo.setCargo_owner(cargo_owner);
        boolean flag=cargoService.save(cargo);
        model.addAttribute("message","提交成功");
        return "redirect:/cargo/emplist";//跳转到列表页面
    }

    @RequestMapping("/delete")
    public String delete(Integer id, Model model){
        System.out.println(id);
        int flag=cargoService.delete(id);
        if(flag==0)
        {
            model.addAttribute("message","没有该货物");
        }
        else {
            model.addAttribute("message","删除成功");
        }
        return "redirect:/";//跳转到列表页面
    }

//    @PostMapping("/edit")
//    public String update(Cargo cargo, Model model){
//        int flag=cargoService.update(cargo);
//        if(flag==0){
//            model.addAttribute("message","没有该货物");
//        }
//        else {
//            model.addAttribute("message","编辑成功");
//        }
//        return "redirect:/cargo/emplist";//跳转到列表页面
//    }


    @RequestMapping ("/emplist")
    public String getAll(Model model,HttpSession session){

        System.out.println(session.getAttribute("username"));
        List<Cargo> list=cargoService.getAll((String) session.getAttribute("username"));
        if(list.isEmpty()){
            model.addAttribute("message","查询失败");
        }
        else {
            model.addAttribute("cargoList",list);
            model.addAttribute("message","查询成功");
        }
        System.out.println(model);
        return "emplist";//跳转到XXX页面?
    }

}
