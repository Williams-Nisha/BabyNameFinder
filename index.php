<?php ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="This app is a baby name app that we created for our CIT 261 class." >
        <title>Baby Name Finder</title>
        <link type="text/css" media="screen" href="css/styles.css" rel="stylesheet">

    </head>
    <body>
        <div class="container">
            <header>
                <?php
                        include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
            </header>
            <main>
                <h1>
                    Baby Name Finder
                </h1>

                <div class="btn_container aligncenter">
                    <div class="button caption" onclick="getBoyNames()">Boy Names</div>
                    <div class="button1 caption" onclick="getGirlNames()">Girl Names</div>
                    <div class="clearfloat"></div>
                    <div class="button2 caption" onclick="getTop50()">Top 50 Names</div>
                    <div class="button3 caption" onclick="getGenderNeutral()">Gender Neutral</div>
                    <div class="clearfloat"></div>
                </div>

            </main>

            <footer>
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
            </footer>
        </div>
    </body>

</html>



