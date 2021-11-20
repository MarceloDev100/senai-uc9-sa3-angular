import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
     //Using JQuery into responsive menu => active
     $(document).ready(function(){
      $('#menu-bar').click(function(){
          if(!$('#menu').hasClass('active-menu')){
             $('#menu').addClass('active-menu')
             $('#menu').animate({
                 'right': '0px'
             },1200)
          }
       })
  
       $('#close-menu').click(function(){
          if($('#menu').hasClass('active-menu')){
            $('#menu').animate({
               'right': '-500px'
            }, 1200)
       }
  
         setTimeout(() => {
           $('#menu').removeClass('active-menu')
         },1200)
       })
    })
  }

}
