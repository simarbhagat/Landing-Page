$('.apps').owlCarousel({
     loop:true,
     margin:10,
     responsiveClass:true,
     responsive:{        
        0:{
            items:1,
             nav:false
         },
         600:{
            items:1,           
            nav:false
         },
         1000:{
             items:3,
             nav:false,
            loop:true,
            autoplay:true        
        }
    }
 });

 $('.nexever1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{        
       0:{
           items:1,
            nav:false
        },
        600:{
           items:1,           
           nav:false
        },
        1000:{
            items:5,
            nav:false,
           loop:true,
           autoplay:true        
       }
   }
});