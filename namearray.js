/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Gender neutral names source: http://www.babynames1000.com/gender-neutral/
 */
var selectedBabyName = {};
        var baby_names = [];
        baby_names[0] = {name: "Emma", sex: "F", url: "#", popularity: 20799, description: 'An English name derived from the Old German for "whole" or "universal," popular since the 19th century. Well-known Emmas: the title character in Jane Austen' + 's Emma; actresses Emma Thompson, Emma Stone, and Emma Watson', meaning: "Universal", origin: "German", description: "", meaning: "", origin: ""},
        baby_names[1] = {name: "Olivia", sex: "F", url: "#", popularity: 19674, description: "First used by William Shakespeare for a character in Twelfth Night. It's a feminine form of Oliver, meaning " + "olive tree." + "Well-known Olivias: singer Olivia Newton-John; Olivia Pope in Scandal; the pig in the popular children's book series.", meaning: "olive tree", origin: "Greek"},
        baby_names[2] = {name: "Sophia", sex: "F", url: "#", popularity: 18490, description: "From the Greek for " + "wisdom." + " The name was used by European royalty in the Middle Ages. Common variants: Sophie, Sofia. Well-known Sophias: director Sophia Coppola; actresses Sophia Loren and Sofía Vergara.", meaning:"wisdom", origin:"Greek"},
        baby_names[3] = {name: "Isabella", sex: "F", url: "#", popularity: 16950, description: "A variation of Isabel, itself a variation of Elizabeth, meaning " + "devoted to God" + " in Hebrew. England, France, Portugal, and Hungary all had royal Isabellas in their courts. Nicknames: Bella, Izzy, Izzie. Well-known Isabellas: actress Isabella Rossellini.", meaning:"pledged to God", origin:"Hebrew"},
        baby_names[4] = {name: "Ava", sex: "F", url: "#", popularity: 15586, description: "A variation of Eve. May be from the Latin " + '"' + "avis," + " meaning " + "bird." + " It could also be a short form of the name Chava (" + "life" + " or " + "living one" + "), the Hebrew form of Eve. It was popularized as a girls' name by actress Ava Gardner.", meaning:"life", origin:"Latin"},
        baby_names[5] = {name: "Mia", sex: "F", url: "#", popularity: 13442, description: "A short version of Maria popularized by actress Mia Farrow. Its Latin origins mean " + "mine" + "or " + "wished-for child." + " Other well-known Mias: Kate Winslet's daughter." + "", meaning:"", origin:"Latin"},
        baby_names[6] = {name: "Emily", sex: "F", url: "#", popularity: 12562, description: "From the Latin name Aemilia. The name has been popular since the 1970s. Well-known Emilys: Emily Brontë; Emily Dickinson; actresses Emily Blunt and Emily Deschanel.", meaning: "Striving, Eagar", origin: "Teutonic"},
        baby_names[7] = {name: "Abigail", sex: "F", url: "#", popularity: 11985, description: "In the Bible, Abigail is King Davids intelligent and beautiful third wife. Because the biblical Abigail describes herself as King Davids handmaid, it's a name often given to ladies maids in literature.", meaning: "The father's joy", origin: "Hebrew"},
        baby_names[8] = {name: "Madison", sex: "F", url: "#", popularity: 10247, description: "From Madde, a medieval girls name short for Madeleine or Maud. Famous Madisons: President James Madison and his wife, Dolley Madison; Madison Avenue, New York City.", meaning: "", origin: "English"},
        baby_names[9] = {name: "Charlotte", sex: "F", url: "#", popularity: 10048, description: "The feminine form of Charles,  It has been a common name for royalty. Well-known Charlottes: novelist Charlotte Brontë; Wilbur's spider friend in Charlottes Web; character in Sex and the City.", meaning: "Petite or Feminine", origin: "French"},
        baby_names[33] = {name: "Harper", sex: "F", url: "#", popularity: 9564, description: "Originally a last name meaning someone who plays the harp. Well-known Harpers: Harper Lee, author of To Kill a Mockingbird.", meaning: "", origin: ""},
        baby_names[34] = {name: "Sofia", sex: "F", url: "#", popularity: 9542, description: "Form of Sophia", meaning: "Wisdom", origin: "Italian"},
        baby_names[35] = {name: "Elizabeth", sex: "F", url: "#", popularity: 9492, description: "From the Hebrew name Elisheba, biblical wife of Aaron. In the New Testament, Elizabeth is the mother of John the Baptist. Well-known Elizabeths: Queen Elizabeth; actress Elizabeth Taylor.", meaning: "Consecrated to God", origin: "Hebrew"},
        baby_names[36] = {name: "Amelia", sex: "F", url: "#", popularity: 8727, description: "Well-known Amelias: aviator Amelia Earhart; title character in the Amelia Bedelia kids book series.", meaning: "Industrious", origin: "Latin"},
        baby_names[10] = {name: "Noah", sex: "M", url: "#", popularity: 19144, description: "Derived from the Hebrew nōach (rest, comfort). The name is borne in the Bible by the patriarch commanded by God to build the ark, upon which he saved his family and two of each creature from the Great Flood. He is seen as the second progenitor of the human race", meaning: "Rest, Peace", origin: "Hebrew"},
        baby_names[11] = {name: "Liam", sex: "M", url: "#", popularity: 18342, description:"Strong-willed warrior and protector. It's a shorter form of the Irish name Uilliam, which originated from the Frankish Willahelm, meaning " + "helmet of will." + "It's also a shortened version of " + "William." + " Well-known Liams: actors Liam Neeson and Liam Hemsworth", meaning:"resolute protection", origin:"Irish"},
        baby_names[12] = {name: "Mason", sex: "M", url: "#", popularity: 17092, description: "Traditionally a French last name with Germanic influences used in the Middle Ages by stoneworkers.", meaning: "Brick Mason", origin: "French"},
        baby_names[13] = {name: "Jacob", sex: "M", url: "#", popularity: 16712, description: "Jacob is an important biblical patriarch, the father of 12 sons who gave their names to the 12 tribes of Israel. Jacob has long been a popular Jewish name and has been a top 100 U.S. name for 30-plus years. Nickname: Jake.", meaning: "Supplanter", origin: "Hebrew"},
        baby_names[14] = {name: "William", sex: "M", url: "#", popularity: 16687, description: "The name is of Old German origin but became popular in English after the Norman conquest of England in 1066. Well-known Williams: Several kings of England and U.S. presidents; William Shakespeare; Bill Gates; actor Will Smith.", meaning: "Strong-willed warrior", origin: "German"},
        baby_names[15] = {name: "Ethan", sex: "M", url: "#", popularity: 15619, description: "In the Bible, Ethan is a wise man (but not as wise as Solomon). Well-known Ethans: actor Ethan Hawke; director Ethan Coen; revolutionary Ethan Allen; Edith Wharton character Ethan Frome.", meaning: "Strong, safe, firm.", origin: "Hebrew"},
        baby_names[16] = {name: "Michael", sex: "M", url: "#", popularity: 15323, description: "Who is like God", meaning: "", origin: "Hebrew"},
        baby_names[17] = {name: "Alexander", sex: "M", url: "#", popularity: 15293, description: "Countless kings and emperors named Alexander have ruled since the time of the ancient Greeks. Well-known Alexanders: Alexander the Great; Founding Father Alexander Hamilton.", meaning: "Defender of men", origin: "Greek"},
        baby_names[18] = {name: "James", sex: "M", url: "#", popularity: 14301, description: "A classic boys name derived from the Hebrew name Jacob.  In the 17th century the Scottish king James VI inherited the English throne, becoming the first ruler of all Britain, and the name became much more popular.", meaning: "Supplanter, one who follows", origin: "Hebrew"},
        baby_names[19] = {name: "Daniel", sex: "M", url: "#", popularity: 13829, description: "", meaning: "God is my judge", origin: "Hebrew"},
        baby_names[20] = {name: "Elijah", sex: "M", url: "#", popularity: 13694, description: "It's the name of an Israelite prophet in the First and Second Books of Kings in the Bible. Traditionally a popular Jewish boys name, it has rocketed in popularity since the 1990s.", meaning: "Yahweh is God", origin: "Hebrew"},
        baby_names[21] = {name: "Benjamin", sex: "M", url: "#", popularity: 13687, description: "The youngest of the 12 sons of Jacob in the Bible. Well-known Benjamins: Benjamin Franklin; journalist Ben Bradlee; Dustin Hoffman's character in The Graduate.", meaning: "Son of the south and possibly also Son of my old age.", origin: "Hebrew"},
        baby_names[22] = {name: "Logan", sex: "N", url: "#", popularity: 13579, description: "", meaning: "Small hollow", origin: "Scottish"},
        baby_names[23] = {name: "Avery", sex: "N", url: "#", popularity: 9517, description: "A surname that originated during the Middle Ages from Alfred. Animator and cartoon director,Tex Avery, who created the characters Daffy Duck, Droopy, Chilly Willy, and coined the phrase What's up Doc? for Bugs Bunny, is a namesake. Predominantly used as a girl's name.", meaning: "ruler of the elves", origin: "English"},
        baby_names[24] = {name: "Riley", sex: "N", url: "#", popularity: 4761, description: "From the Old English ryge leah. It's also an adaptation of the Irish last name Reilly. Another meaning is valiant.", meaning: "Wood clearing.", origin: "Irish"},
        baby_names[25] = {name: "Skylar", sex: "N", url: "#", popularity: 4732, description: "", meaning: "Scholar", origin: "Dutch"},
        baby_names[26] = {name: "Peyton", sex: "N", url: "#", popularity: 4426, description: "Originally a last name from a place name in Sussex, England. Its a variation on Payton. Well-known Peytons: Peyton Place, a bestselling 1950s novel that became a movie and a 1960s television soap opera; football player Peyton Manning.", meaning: "", origin: "Latin"},
        baby_names[27] = {name: "Alexis", sex: "N", url: "#", popularity: 4188, description: "Form of Alexander", meaning: "Helper and defender of mankind", origin: "Greek"},
        baby_names[28] = {name: "Dallas", sex: "N", url: "#", popularity: 2418, description: "", meaning: "Wise", origin: "Celtic"},
        baby_names[29] = {name: "Remington", sex: "N", url: "#", popularity: 2418, description: "", meaning: "From the raven estate", origin: "English"},
        baby_names[30] = {name: "Kamryn", sex: "N", url: "#", popularity: 2418, description: "Form of Cameron", meaning: "Crooked nose", origin: "Scotish"},
        baby_names[31] = {name: "Elliot", sex: "N", url: "#", popularity: 2418, description: "Form of Elijah, Formerly a Surname", meaning: "Lord is my God.", origin: "Hebrew"},
        baby_names[32] = {name: "Zion", sex: "N", url: "#", popularity: 2418, description: "", meaning: "A sign", origin: "Hebrew"},
        /*
         * TODO: update popularity for baby_names[507] - [535]
         */
        console.log("This works!");
        function getBoyNames() {
        var sortBoyNames = boy_names(baby_names);
                document.querySelector(".btn_container").innerHTML = sortBoyNames;
        }

function boy_names() {
var boy_names = "";
        var list = "<ul>";
        var headline = document.getElementsByTagName("h1")[0].innerHTML = "Boy Names";
        for (var i = 0; i < baby_names.length; i++) {
if ((baby_names[i].sex) === "M" || (baby_names[i].sex) === "N") {
boy_names += '<li><a href="' + baby_names[i].url + '" onclick="getDescription(' + i + ')">' +
        baby_names[i].name + '</a></li><br>';
} else {
console.log("There are no boy names available.");
}
list = "</ul>";
}
var d = document.createElement("div"); // Create a <button> element                               
        d.id = "search"; // Append the text to <button>
        d.className = 'aligncenter';
        newlink = document.createElement('a');
        newlink.setAttribute('href', '/');
        var t = document.createTextNode("Search Again");
        newlink.appendChild(t);
        d.appendChild(newlink);
        var element = document.querySelector("main");
        element.appendChild(d);
        return boy_names;
        }

function getGirlNames() {
var sortGirlNames = girl_names(baby_names);
        document.querySelector(".btn_container").innerHTML = sortGirlNames;
        }
function girl_names() {
var girl_names = "";
        var list = "<ul>";
        var headline = document.getElementsByTagName("h1")[0].innerHTML = "Girl Names";
        for (var i = 0; i < baby_names.length; i++) {
if ((baby_names[i].sex) === "F" || (baby_names[i].sex) === "N") {
girl_names += '<li><a href="' + baby_names[i].url + '" onclick="getDescription(' + i + ')">' +
        baby_names[i].name + '</a></li><br>';
} else {
console.log("There are no girl names available.");
}
list = "</ul>";
}
var d = document.createElement("div"); // Create a <button> element                               // Append the text to <button>
        d.id = "search";
        d.setAttribute = ('class', 'aligncenter');
        newlink = document.createElement('a');
        newlink.setAttribute('href', '/');
        var t = document.createTextNode("Search Again");
        newlink.appendChild(t);
        d.appendChild(newlink);
        var element = document.querySelector("main");
        element.appendChild(d);
        return girl_names;
        }

function getTop15() {
var sortTop15 = top_15_names(baby_names);
        document.querySelector(".btn_container").innerHTML = sortTop15;
}

function top_15_names() {
var top_15_names = "";
        var list = "<ul>";
        var headline = document.getElementsByTagName("h1")[0].innerHTML = "Top 15 Baby Names";
        for (var i = 0; i < baby_names.length; i++) {
if ((baby_names[i].popularity) <= 15000) {
top_15_names += '<li><a href="' + baby_names[i].url + '" onclick="getDescription(' + i + ')">' +
        baby_names[i].name + '</a></li><br>';
} else {
console.log("There are no names available.");
}
list = "</ul>";
}
var d = document.createElement("div"); // Create a <button> element                               // Append the text to <button>
        d.id = "search";
        d.setAttribute = ('class', 'aligncenter');
        newlink = document.createElement('a');
        newlink.setAttribute('href', '/');
        var t = document.createTextNode("Search Again");
        newlink.appendChild(t);
        d.appendChild(newlink);
        var element = document.querySelector("main");
        element.appendChild(d);
        return top_15_names;
}

function getGenderNeutral() {
var sortGenderNeutral = neutral_names(baby_names);
        document.querySelector(".btn_container").innerHTML = sortGenderNeutral;
        }

function neutral_names() {
var neutral_names = "";
        var list = "<ul>";
        var headline = document.getElementsByTagName("h1")[0].innerHTML = "Gender Neutral Baby Names";
        for (var i = 0; i < baby_names.length; i++) {
if ((baby_names[i].sex) === "N") {
neutral_names += '<li><a href="' + baby_names[i].url + '" onclick="getDescription(' + i + ')">' +
        baby_names[i].name + '</a></li><br>';
} else {
console.log("There are neutral names available.");
}
list = "</ul>";
}
var d = document.createElement("div"); // Create a <button> element            
        d.id = "search";
        d.setAttribute = ('class', 'aligncenter');
        newlink = document.createElement('a');
        newlink.setAttribute('href', '/');
        var t = document.createTextNode("Search Again");
        newlink.appendChild(t); // Append the text to <button>
        d.appendChild(newlink);
        var element = document.querySelector("main");
        element.appendChild(d);
        return neutral_names;
        }

function getDescription(babyNameIndex) {
selectedBabyName = baby_names[babyNameIndex];
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
if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
{
document.getElementsByTagName("BODY")[0].innerHTML = xmlhttp.responseText;
        nameDescription();
}
}
xmlhttp.open("GET", "/description.php", true);
        xmlhttp.send();
        }
function nameDescription() {
if (selectedBabyName.sex === "F"){
document.getElementsByClassName('button2')[0].innerHTML = "Return to Girl Names";
        document.getElementsByClassName('button2')[0].onclick = getGirlNames;
        } else if (selectedBabyName.sex === "N"){
document.getElementsByClassName('button2')[0].innerHTML = "Return to Gender Neutral Names";
        document.getElementsByClassName('button2')[0].onclick = getGenderNeutral;
} else if (selectedBabyName.popularity <= 10000){
document.getElementsByClassName('button2')[0].innerHTML = "Return to Top 15 Names";
        document.getElementsByClassName('button2')[0].onclick = getTop15;
}
document.getElementsByTagName("h1")[0].innerHTML = selectedBabyName.name;
        document.getElementsByClassName('description')[0].innerHTML = selectedBabyName.description;
        document.getElementsByClassName('meaning')[0].innerHTML = selectedBabyName.meaning;
        document.getElementsByClassName('origin')[0].innerHTML = selectedBabyName.origin;
        }
function addName() {
var selectedName = JSON.parse(localStorage.getItem('selectedName')) || [];
        selectedName.push(selectedBabyName.name);
        localStorage.setItem('selectedName', JSON.stringify(selectedName));
        console.log(JSON.parse(localStorage.getItem(selectedName)));
        document.getElementsByClassName('txt')[0].innerHTML = "View List";
}

function viewNames(){
var selectedName = JSON.parse(localStorage.getItem('selectedName'));
        if (selectedName){
var names = "<form name='favoriteNames'>";
        selectedName.forEach(function(name){
        names += "<input type='radio' name='name' value=" + name + ">" + name + "<br>";
        });
        names += "</form>";
        document.getElementsByClassName('babyDetails')[0].innerHTML = names;
        document.getElementsByTagName("h1")[0].innerHTML = "Favorite Names List";
        document.getElementsByClassName('button4')[0].innerHTML = "Delete name from list";
        document.getElementsByClassName('button4')[0].onclick = deleteName;
        document.getElementsByClassName('button4')[0].style.background = "#ff0000";
        document.getElementsByClassName('txt')[0].innerHTML = "View List";
        document.getElementsByTagName("h4")[0].innerHTML = "These are your favorite names.";
        }
}

//The following works, but returns the full object array. I am still working on getting just the name to return
/*function addName() {
 localStorage.setItem(selectedBabyName.index, JSON.stringify(selectedBabyName));
 console.log(JSON.parse(localStorage.getItem(selectedBabyName)));
 //var keyname = 'index' + localStorage.length;
 //localStorage.setItem(keyname,JSON.stringify(selectedBabyName)); 
 //console.log(JSON.parse(localStorage.getItem('keyname')));
 }
 
 function viewNames(){
 for (var i = 1; i < localStorage.length; ++i) {
 console.log(JSON.parse(localStorage.getItem(selectedBabyName.index = (i))));
 }
 }*/

function deleteName(){
    var nameForm = document.querySelector('form');
    for (var i = 0; i < nameForm.length; i++) {
        if (nameForm[i].checked == true) {
                if (nameForm[i] == localStorage.selectedName[i]){
                    localStorage.removeItem(selectedName[i]); //remove item
            } else {
            console.log('There are no names to delete.');
        }
        }
    }   

}

