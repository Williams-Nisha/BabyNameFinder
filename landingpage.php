<?php ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="This app is a baby name app that we created for our CIT 261 class." >
        <title>Baby Name Finder</title>
        <link type="text/css" media="screen" href="css/styles.css" rel="stylesheet">
        <script>
            function getIndex() {
                var xmlhttp;
                if (window.XMLHttpRequest)
                {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                }
                else
                {// code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function ()
                {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    {
                        document.getElementsByTagName("BODY")[0].innerHTML =  xmlhttp.responseText;
                    }
                }


                xmlhttp.open("GET", "index.php", true);
                xmlhttp.send();
            }
            var baby_names = [];
            baby_names[0] = {name: "Emma", sex: "F", url: "landing.php", popularity: 20799};
            baby_names[1] = {name: "Olivia", sex: "F", url: "landing.php", popularity: 19674};
            baby_names[2] = {name: "Sophia", sex: "F",url: "landing.php", popularity: 18490};
            baby_names[3] = {name: "Noah", sex: "M", url: "landing.php", popularity: 19144};
            baby_names[4] = {name: "Liam", sex: "M",url: "landing.php", popularity: 18342};

            function getBoyNames() {
            var sortBoyNames = boy_names(baby_names);
            JSON.parse(document.getElementById("button").innerHTML= sortBoyNames);
    
            }
                function boy_names() {
                var boy_names;
                var i;
                var list = "<ul>";
                for (i = 0; i < baby_names.length; i++) {
                    if ((baby_names[i].sex) == "M") {
                boy_names += '<li><a href="' + baby_names[i].url + '">' +
                        baby_names[i].name + '</a></li><br>';
                } else {
                console.log("There are no boy names available.");
                }
                list = "</ul>";
                return boy_names;
            }
        }
        </script>
    </head>
    <body>
        <div class="lngcontainer">
            <main class="cntpd">
                <p class="lngh1">
                    Baby Name Finder
                </p>
                <h3>Click to Start</h3>
                <img class="logobtn" src="/images/logo.png" alt="baby name logo" onclick="getIndex()">
                <div id="button" align="center"></div>
            </main>

        </div>
    </body>

</html>