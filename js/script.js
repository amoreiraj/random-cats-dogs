/*When cllick for cat's photo*/
$("#cat_click_btn").click(function (e) {
    $(".loader-wrapper").fadeIn("slow");
    e.preventDefault();
    
    /*Use Ajax call to fetch the data uaing API*/
    $.ajax({
        type: "GET",
        url: "https://aws.random.cat/meow",
        dataType: "json",
        success: function (response) {
            console.log(response.file)
            $("#random_animal").attr("src", response.file);
        },
         /*Handle Error*/
        error: function (jqXHR, textStatus, errorThrown) {
            if (!jqXHR.status) {
                alert("Please Check Your Internet or use Proxy");
                /*Hide Screen Loader*/
                $(".loader-wrapper").fadeOut("slow");

            }
        }
    });
});

/*When cllick for dog photo*/
$("#dog_click_btn").click(function (e) {
    /*ZSAAhooqw Loading Screen*/
    $(".loader-wrapper").fadeIn("slow");
    e.preventDefault();
    /*Use Ajax call to fetch the data uaing API*/
    $.ajax({
        type: "GET",
        url: "https://random.dog/woof.json",
        dataType: "json",
        success: function (response) {
            console.log(response.url)
            /*Change the image in the home screen*/
            $("#random_animal").attr("src", response.url);
        },
        /*Handle Error*/
        error: function (jqXHR, textStatus, errorThrown) {
            if (!jqXHR.status) {
                alert("Please Check Your Internet or use Proxy");
                /*Hide Screen Loader*/
                $(".loader-wrapper").fadeOut("slow");

            }

        }
    });
});

/*When Load new image, disabe screen loader*/
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});
$("#random_animal").on("load", function () {

    $(".loader-wrapper").fadeOut("slow");
});
