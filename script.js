document.addEventListener('DOMContentLoaded', function() {


    // QUOTATION BOX FUNCTIONALITY--------------------------------------------------------
    const get_quote = document.querySelector("#quote_button");
    const close_quote = document.querySelector("#quote-close");
    get_quote.addEventListener("click",function(){
        document.querySelector(".quote-pop").style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
    close_quote.addEventListener("click",function(){
        document.querySelector(".quote-pop").style.display = "none";
        document.body.style.overflow = 'scroll';
        document.getElementById("form").reset();
    });

    // CALL FUNCTIONALITY-----------------------------
    const cal_button = document.querySelector("#cal_button");
    cal_button.addEventListener("click",function(){
        const callnumber = 'tel:8240185169';
        window.open(callnumber, '_blank');
    });

    const cal_button_2 = document.querySelector("#cal_button_2");
    cal_button_2.addEventListener("click",function(){
        const callnumber = 'tel:8240185169';
        window.open(callnumber, '_blank');
    });

    // QUOTATION CONTENT FORM SUBMIT VIA EMAIL-------------------------------------
    // const quosubBtn = document.getElementById('quotation-submit');
    // quosubBtn.addEventListener('click', function() {
    //     const emailAddress = 'gunjanautomobiles@gmail.com'; // Replace with your actual email address
    //     const subject = 'Subject of the email'; // Replace with your desired subject
    //     const body = 'Body of the email'; // Replace with your desired body
    //     const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //     // const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //     window.open(mailtoLink, '_blank');
    // });


    // EMAIL US BUTTON FUNCTIONALITY---------------------------------------------------
    const emailUsBtn = document.getElementById('emailUsBtn');
    emailUsBtn.addEventListener('click', function() {
        const linkUrl = "mailto:gunjanautomobiles@gmail.com"; // Replace with your desired link URL
        window.open(linkUrl, '_blank');
    });
    
    // UNDERNAV HIDE AND APPEAR ON SCROLL FUNCTIONALITY---------------------------------------
    {
        const nav = document.querySelector(".under-nav");
        let lastScrollY = window.scrollY;
      
        window.addEventListener("scroll", () => {
            if (window.innerWidth > 1000){
          if (lastScrollY < window.scrollY) {
            nav.classList.add("nav--hidden");
          } else {
            nav.classList.remove("nav--hidden");
          }
      
          lastScrollY = window.scrollY;
        }
        });
      }


    //   HORNET HEADING QUOTE FADE IN ANIMATION-----------------------------------------
      setTimeout(function() {
        document.querySelector('.quote-box').classList.add('.quote-box');
        }, 1000); // 1000 milliseconds delay (adjust as needed)



    
    const menu = document.querySelector("#ham-menu");
    const menulist = document.querySelector("#nav-opts");

    const h3undertabs1 = document.querySelector("#quote")
    const h3undertabs2 = document.querySelector("#call")
    const h3undertabs3 = document.querySelector("#direction")

    // SIDE MENU VIEW FUNCTIONALITY FOR MOBILE DEVICES --------------------------------------------
    menu.addEventListener('click', function(){
        if(menu.className == "fa-solid fa-bars"){
            menu.className = "fa-solid fa-xmark";
            menulist.style.transition = 'transform 0.5s ease';
            menulist.style.transform = 'translateX(-100vw)';
            document.body.style.overflow = 'hidden';

        }
        else{
            menu.className = "fa-solid fa-bars";
            menulist.style.transform = 'translateX(100vw)';
            document.body.style.overflow = 'scroll';
        }

    })
    // ONCE CLICKED ON AN OPTION ON SIDE MENU , IT CLOSES AND TAKES TO THAT PAGE SECTION -------------------------
    const menu_opts = document.querySelectorAll(".nav-tabs a");
    menu_opts.forEach(function(link) {
    link.addEventListener('click', function(){
        if (window.innerWidth < 550){
            menu.className = "fa-solid fa-bars";
            menulist.style.transform = 'translateX(100vw)';
            document.body.style.overflow = 'scroll';
            }
        });
    });

    // TEXT CONTENT REDUCTION OF UNDERNAV OPTIONS FOR MOBILE DEVICES--------------------------------------
    function updateHeaderText() {
        // Check if the screen width is less than 550 pixels
        if (window.innerWidth < 550) {
            // Change the text content when the screen width is less than 550 pixels
            h3undertabs1.textContent = 'Quote';
            h3undertabs2.textContent = 'Call';
            h3undertabs3.textContent = 'Directions';
        } else {
            // Reset the text content for larger screens
            h3undertabs1.textContent = 'Get Quote';
            h3undertabs2.textContent = 'Call Now';
            h3undertabs3.textContent = 'Get Directions';
        }
    }

    // Initial call to set the text content based on the screen width
    updateHeaderText();
    // Add a resize event listener to update the text content on screen resize
    window.addEventListener('resize', updateHeaderText);





});


