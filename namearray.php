<?php ?>
<script>
//Create Object Array
    var baby_names = [];
    baby_names[0] = {name: "Emma", sex: "F", url: "landing.php", popularity: 20799};
    baby_names[1] = {name: "Olivia", sex: "F", url: "landing.php", popularity: 19674};
    baby_names[2] = {name: "Sophia", sex: "F",url: "landing.php", popularity: 18490};
    baby_names[3] = {name: "Noah", sex: "M", url: "landing.php", popularity: 19144};
    baby_names[4] = {name: "Liam", sex: "M",url: "landing.php", popularity: 18342};

var sortBoyNames = boy_names();
document.getElementByClass("button").innerHTML= sortBoyNames;
//Sort to get Boy Names
    function boy_names() {
        var boy_names = "";
        var i;
        var list = "<ul>";
        for (i = 0; i < baby_names.length; i++) {
            if (baby_names[i][sex] == "M") {
                boy_names += '<li><a href="' + baby_names[i].url + '">' +
                        baby_names[i].name + '</a></li><br>';
            } else {
                console.log("There are no boy names available.");
            }
            return boy_names;
        }
    }
</script>