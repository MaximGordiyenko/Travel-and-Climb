//TODO: Event listener wait when event handler start implementing
$(document).ready(function () {
    $('p').each(function () {                        //TODO: Method .each execute likes a loop 'for' action apply for all <p> elements in html
        if ($(this).css('marginLeft') === '15px'){  //TODO: Comparison two values by type and if it true execute code below
            $(this).css({                          //TODO: Execute stylesheet code after comparison
                borderLeftStyle: "solid",         //TODO: Inside of Jquery function css realize likes: CamelCase
                borderLeftColor: "#31b897",
                borderLeftWidth: "15px",
                marginLeft: '0',
                paddingLeft: '10px'
            })
        }
    });
});

window.onscroll = function () {
  scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        document.getElementById("topBTN").style.display = 'block';
    }else{
        document.getElementById('topBTN').style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}