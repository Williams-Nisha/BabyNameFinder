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
        </script>
    </head>
    <body>
        <div class="lngcontainer">
            <main class="cntpd">
                <p class="lngh1">
                    Baby Name Finder
                </p>
                <h3 class="pulseMain">Click to Start</h3>
                <img class="logobtn" src="/images/logo.png" alt="baby name logo" width="250" height="250"  onclick="getIndex()">
                <div id="button" align="center"></div>
            </main>

        </div>
        <script src="namearray.js"></script>
    </body>

</html>
