let $links = $(".itemLinks");

$links.click(function (e) {
     $links.removeClass("active");
     let ClickedLink = e.target;
     ClickedLink = $(ClickedLink);
     let position = ClickedLink.attr("data-pos");
     let translateValue = "translateX(" + position * 25 + "%)";
     $("#wrapper").css({
          transform: translateValue
     });

     ClickedLink.addClass("active");
});

$($links[0]).addClass("active");




let footer = document.getElementById("copyright");
footer.innerHTML = new Date().getFullYear();