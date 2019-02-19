package org.vanhouse.van.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HomeController{

    @GetMapping(value = "/api/hello-world", produces = MediaType.TEXT_PLAIN_VALUE)
    public String helloWorld(){
        return "Hello World";
    }

}