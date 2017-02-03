$(document).ready(function () {
    let data = {
        param: "",
        num: ""
    };

    let parse = function parse(str, char) {
            let leng = str.length;
            data.num = "";
            data.param = "";

            for (let i = 0; i < leng; i++) {
                data.param += str[i];
                if (str[i] == char) {
                    for (let j = i + 1; j < leng; j++) {
                        data.num += str[j];
                    }
                    return data;
                }
            }
        }
        //Скрыть слайдер
    function HideSL() {
        $(".left").show();
        $(".right").show();
        $("#sldr").hide();
    }
    //Показать слайдер
    function ShowSL() {
        $(".left").hide();
        $(".right").hide();
        $("#sldr").show();
    }

    function switchpage(path) {
        let data = parse(path, '/');
        if (data == undefined) {
            data = {
                num: "",
                param: ""
            }
        };

        console.log(data);

        switch (path) {
        case "#links":
            $("#loadcont").load("pages/links.php");
            HideSL();
            break;
        case "#photo":
            $("#loadcont").load("pages/photo.php");
            HideSL();
            break;
        case "#music":
            $("#loadcont").load("pages/music.php");
            HideSL();
            break;
        case "#video":
            $("#loadcont").load("pages/video.php");
            HideSL();
            break;
        case "#news/" + data.num:
            $("#loadcont").load("pages/news.php/?newspage=" + data.num);
            HideSL();
            break;
        case "#art/" + data.num:
            $("#loadcont").load("pages/art.php/?art_id=" + data.num);
            HideSL();
            break;
        case "#catmusic/" + data.num:
            $("#loadcont").load("pages/catmusic.php/?page=" + data.num);
            HideSL();
            break;
        case "#catblog/" + data.num:
            $("#loadcont").load("pages/catblog.php/?page=" + data.num);
            HideSL();
            break;
        case "#catdevelop/" + data.num:
            $("#loadcont").load("pages/catdevelop.php/?page=" + data.num);
            HideSL();
            break;
        case "#cattexts/" + data.num:
            $("#loadcont").load("pages/cattexts.php/?page=" + data.num);
            showHideSL();
            break;
        case "#home":
            $("#sldr").load("pages/home.php");
            ShowSL();
            break;
        default:
            $("#sldr").load("pages/home.php");
            ShowSL();
            break;

        }
        /*
        yaCounter41929334.hit(path, function () {
            console.log(path + ' is send!');
        });*/
    }

    let path = document.location.hash;
    switchpage(path);


    $(window).on("hashchange", function () {
        let path = document.location.hash;
        console.log(path);
        switchpage(path);
    })
})