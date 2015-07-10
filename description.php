<?php ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="This app is a baby name app that we created for our CIT 261 class." >
        <title>Baby Name Finder</title>
        <link type="text/css" media="screen" href="css/styles.css" rel="stylesheet">
        <script>
        </script>
    </head>
    <body>
        <div class="container">
            <header>
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
            </header>
            <main>
                <h1>
                    Baby Name Finder
                </h1>

                <div class="btn_container aligncenter">
                    <div class="favorites" onclick="viewNames()"><p class="txt">List</p></div>
                    <div class="description">
                        <p>Name:<br>Meaning<br>Origin<br></p></div>
                    <div class="button2 caption" onclick="deleteName()">Delete Name</div>
                    <div class="button4 caption" onclick="addName()">Add Name</div>
                    <div class="clearfloat"></div>
                </div>

            </main>

            <footer>
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
            </footer>
        </div>

        <script src="namearray.js"></script>
    </body>

</html>