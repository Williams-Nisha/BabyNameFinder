<?php ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="This app is a baby name app that we created for our CIT 261 class." >
        <meta  name="viewport" content="width=device-width, initial-scale=1.0"> 
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
                    <div id="favorites" onclick="viewNames()"><p class="txt">List</p></div>
                    <div class="clearfloat"></div>
                    <div class="babyDetails"><br>
                        <h4>Description:</h4> <span class="description"></span><br>

                        <h4>Meaning:</h4> <span class="meaning"></span> <br>

                        <h4>Origin:</h4> <span class="origin"></span><br>
                    </div>
                    <div class="clearfloat"></div>
                    <h4>Create a list of your favorite names.</h4>

                    <div class="button2 caption" onclick="getBoyNames()">Return to Boy Names</div>
                    <div class="button4 caption" onclick="addName()">Add Name</div>
                    <div class="clearfloat"></div>
                    <div  id="search"><a href="/">Search Again</a></div>                  
                </div>

            </main>

            <footer>
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
            </footer>
        </div>

        <script src="namearray.js"></script>
    </body>

</html>
