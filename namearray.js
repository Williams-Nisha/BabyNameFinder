/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var baby_names = [];
    baby_names[0] = {name: "Emma", sex: "F", url: "landingpage.php", popularity: 20799},
    baby_names[1] = {name: "Olivia", sex: "F", url: "landingpage.php", popularity: 19674},
    baby_names[2] = {name: "Sophia", sex: "F", url: "landingpage.php", popularity: 18490},
    baby_names[3] = {name: "Noah", sex: "M", url: "landingpage.php", popularity: 19144},
    baby_names[4] = {name: "Liam", sex: "M", url: "landingpage.php", popularity: 18342};
    console.log("This works!");
    function getBoyNames() {
        var sortBoyNames = boy_names(baby_names);
        document.querySelector(".btn_container").innerHTML = sortBoyNames;

    }
    function boy_names() {
        var boy_names="";
        var list = "<ul>";
        for (var i = 0; i < baby_names.length; i++) {
            if ((baby_names[i].sex) === "M") {
                boy_names += '<li><a href="' + baby_names[i].url + '">' +
                        baby_names[i].name + '</a></li><br>';
            } else {
                console.log("There are no boy names available.");
            }
            list = "</ul>";
        }
                    return boy_names;
    }
       function getGirlNames() {
        var sortGirlNames = girl_names(baby_names);
        document.querySelector(".btn_container").innerHTML = sortGirlNames;

    }
    function girl_names() {
        var girl_names="";
        var list = "<ul>";
        for (var i = 0; i < baby_names.length; i++) {
            if ((baby_names[i].sex) === "F") {
                girl_names += '<li><a href="' + baby_names[i].url + '">' +
                        baby_names[i].name + '</a></li><br>';
            } else {
                console.log("There are no girl names available.");
            }
            list = "</ul>";
        }
                    return girl_names;
    }
