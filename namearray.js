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
        baby_names[3] = {name: "Noah", sex: "M", url: "#", popularity: 19144, description: "Derived from the Hebrew nōach (rest, comfort). The name is borne in the Bible by the patriarch commanded by God to build the ark, upon which he saved his family and two of each creature from the Great Flood. He is seen as the second progenitor of the human race", meaning: "Rest, Peace", origin: "Hebrew"},
        baby_names[4] = {name: "Liam", sex: "M", url: "#", popularity: 18342, description:"Strong-willed warrior and protector. It's a shorter form of the Irish name Uilliam, which originated from the Frankish Willahelm, meaning " + "helmet of will." + "It's also a shortened version of " + "William." + " Well-known Liams: actors Liam Neeson and Liam Hemsworth", meaning:"resolute protection", origin:"Irish"},
        baby_names[5] = {name: "Isabella", sex: "F", url: "#", popularity: 16950, description: "A variation of Isabel, itself a variation of Elizabeth, meaning " + "devoted to God" + " in Hebrew. England, France, Portugal, and Hungary all had royal Isabellas in their courts. Nicknames: Bella, Izzy, Izzie. Well-known Isabellas: actress Isabella Rossellini.", meaning:"pledged to God", origin:"Hebrew"},
        baby_names[6] = {name: "Ava", sex: "F", url: "#", popularity: 15586, description: "A variation of Eve. May be from the Latin " + '"' + "avis," + " meaning " + "bird." + " It could also be a short form of the name Chava (" + "life" + " or " + "living one" + "), the Hebrew form of Eve. It was popularized as a girls' name by actress Ava Gardner.", meaning:"life", origin:"Latin"},
        baby_names[7] = {name: "Mia", sex: "F", url: "#", popularity: 13442, description: "A short version of Maria popularized by actress Mia Farrow. Its Latin origins mean " + "mine" + "or " + "wished-for child." + " Other well-known Mias: Kate Winslet's daughter." + "", meaning:"", origin:"Latin"},
        baby_names[8] = {name: "Emily", sex: "F", url: "#", popularity: 12562, description: "", meaning: "", origin: ""},
        baby_names[9] = {name: "Abigail", sex: "F", url: "#", popularity: 11985, description: "", meaning: "", origin: ""},
        baby_names[10] = {name: "Madison", sex: "F", url: "#", popularity: 10247, description: "", meaning: "", origin: ""},
        baby_names[11] = {name: "Charlotte", sex: "F", url: "#", popularity: 10048, description: "", meaning: "", origin: ""},
        baby_names[12] = {name: "Harper", sex: "F", url: "#", popularity: 9564, description: "", meaning: "", origin: ""},
        baby_names[13] = {name: "Sofia", sex: "F", url: "#", popularity: 9542, description: "", meaning: "", origin: ""},
        baby_names[14] = {name: "Avery", sex: "N", url: "#", popularity: 9517, description: "A surname that originated during the Middle Ages from Alfred. Animator and cartoon director,Tex Avery, who created the characters Daffy Duck, Droopy, Chilly Willy, and coined the phrase What's up Doc? for Bugs Bunny, is a namesake. Predominantly used as a girl's name.", meaning: "ruler of the elves", origin: "English"},
        baby_names[15] = {name: "Elizabeth", sex: "F", url: "#", popularity: 9492, description: "", meaning: "", origin: ""},
        baby_names[16] = {name: "Amelia", sex: "F", url: "#", popularity: 8727, description: "", meaning: "", origin: ""},
        baby_names[17] = {name: "Evelyn", sex: "F", url: "#", popularity: 8692, description: "", meaning: "", origin: ""},
        baby_names[18] = {name: "Ella", sex: "F", url: "#", popularity: 8489, description: "", meaning: "", origin: ""},
        baby_names[19] = {name: "Chloe", sex: "F", url: "#", popularity: 8469, description: "", meaning: "", origin: ""},
        baby_names[20] = {name: "Victoria", sex: "F", url: "#", popularity: 7955, description: "", meaning: "", origin: ""},
        baby_names[21] = {name: "Aubrey", sex: "F", url: "#", popularity: 7589, description: "", meaning: "", origin: ""},
        baby_names[22] = {name: "Grace", sex: "F", url: "#", popularity: 7554, description: "", meaning: "", origin: ""},
        baby_names[23] = {name: "Zoey", sex: "F", url: "#", popularity: 7358, description: "", meaning: "", origin: ""},
        baby_names[24] = {name: "Natalie,", sex: "F", url: "#", popularity: 7061, description: "", meaning: "", origin: ""},
        baby_names[25] = {name: "Addison,", sex: "F", url: "#", popularity: 6950, description: "", meaning: "", origin: ""},
        baby_names[26] = {name: "Lillian", sex: "F", url: "#", popularity: 6869, description: "", meaning: "", origin: ""},
        baby_names[27] = {name: "Brooklyn", sex: "F", url: "#", popularity: 6767, description: "", meaning: "", origin: ""},
        baby_names[28] = {name: "Lily", sex: "F", url: "#", popularity: 6727, description: "", meaning: "", origin: ""},
        baby_names[29] = {name: "Hannah", sex: "F", url: "#", popularity: 6512, description: "", meaning: "", origin: ""},
        baby_names[30] = {name: "Layla", sex: "F", url: "#", popularity: 6428, description: "", meaning: "", origin: ""},
        baby_names[31] = {name: "Scarlett", sex: "F", url: "#", popularity: 5965, description: "", meaning: "", origin: ""},
        baby_names[32] = {name: "Aria", sex: "F", url: "#", popularity: 5893, description: "", meaning: "", origin: ""},
        baby_names[33] = {name: "Zoe", sex: "F", url: "#", popularity: 5828, description: "", meaning: "", origin: ""},
        baby_names[34] = {name: "Samantha", sex: "F", url: "#", popularity: 5680, description: "", meaning: "", origin: ""},
        baby_names[35] = {name: "Anna", sex: "F", url: "#", popularity: 5639, description: "", meaning: "", origin: ""},
        baby_names[36] = {name: "Leah", sex: "F", url: "#", popularity: 5563, description: "", meaning: "", origin: ""},
        baby_names[37] = {name: "Audrey", sex: "F", url: "#", popularity: 5531, description: "", meaning: "", origin: ""},
        baby_names[38] = {name: "Ariana", sex: "F", url: "#", popularity: 5461, description: "", meaning: "", origin: ""},
        baby_names[39] = {name: "Allison", sex: "F", url: "#", popularity: 5440, description: "", meaning: "", origin: ""},
        baby_names[40] = {name: "Savannah", sex: "F", url: "landingpage.php", popularity: 5433, description: "", meaning: "", origin: ""},
        baby_names[41] = {name: "Arianna", sex: "F", url: "landingpage.php", popularity: 5240, description: "", meaning: "", origin: ""},
        baby_names[42] = {name: "Camila", sex: "F", url: "landingpage.php", popularity: 5194, description: "", meaning: "", origin: ""},
        baby_names[43] = {name: "Penelope", sex: "F", url: "landingpage.php", popularity: 5062, description: "", meaning: "", origin: ""},
        baby_names[44] = {name: "Gabriella", sex: "F", url: "landingpage.php", popularity: 5051, description: "", meaning: "", origin: ""},
        baby_names[45] = {name: "Claire", sex: "F", url: "landingpage.php", popularity: 4991, description: "", meaning: "", origin: ""},
        baby_names[46] = {name: "Aaliyah", sex: "F", url: "landingpage.php", popularity: 4850, description: "", meaning: "", origin: ""},
        baby_names[47] = {name: "Sadie", sex: "F", url: "landingpage.php", popularity: 4823, description: "", meaning: "", origin: ""},
        baby_names[48] = {name: "Riley", sex: "N", url: "landingpage.php", popularity: 4761, description: "", meaning: "", origin: ""},
        baby_names[49] = {name: "Skylar", sex: "N", url: "landingpage.php", popularity: 4732, description: "", meaning: "", origin: ""},
        baby_names[50] = {name: "Nora", sex: "F", url: "landingpage.php", popularity: 4708, description: "", meaning: "", origin: ""},
        baby_names[51] = {name: "Sarah", sex: "F", url: "landingpage.php", popularity: 4647, description: "", meaning: "", origin: ""},
        baby_names[52] = {name: "Hailey", sex: "F", url: "landingpage.php", popularity: 4595, description: "", meaning: "", origin: ""},
        baby_names[53] = {name: "Kaylee", sex: "F", url: "landingpage.php", popularity: 4513, description: "", meaning: "", origin: ""},
        baby_names[54] = {name: "Paisley", sex: "F", url: "landingpage.php", popularity: 4473, description: "", meaning: "", origin: ""},
        baby_names[55] = {name: "Kennedy", sex: "F", url: "landingpage.php", popularity: 4459, description: "", meaning: "", origin: ""},
        baby_names[56] = {name: "Ellie", sex: "F", url: "landingpage.php", popularity: 4442, description: "", meaning: "", origin: ""},
        baby_names[57] = {name: "Peyton", sex: "N", url: "landingpage.php", popularity: 4426, description: "", meaning: "", origin: ""},
        baby_names[58] = {name: "Annabelle", sex: "F", url: "landingpage.php", popularity: 4324, description: "", meaning: "", origin: ""},
        baby_names[59] = {name: "Caroline", sex: "F", url: "landingpage.php", popularity: 4307, description: "", meaning: "", origin: ""},
        baby_names[60] = {name: "Madelyn", sex: "F", url: "landingpage.php", popularity: 4289, description: "", meaning: "", origin: ""},
        baby_names[61] = {name: "Serenity", sex: "F", url: "landingpage.php", popularity: 4284, description: "", meaning: "", origin: ""},
        baby_names[62] = {name: "Aubree", sex: "F", url: "landingpage.php", popularity: 4258, description: "", meaning: "", origin: ""},
        baby_names[63] = {name: "Lucy", sex: "F", url: "landingpage.php", popularity: 4257, description: "", meaning: "", origin: ""},
        baby_names[64] = {name: "Alexa", sex: "F", url: "landingpage.php", popularity: 4227, description: "", meaning: "", origin: ""},
        baby_names[65] = {name: "Alexis", sex: "N", url: "landingpage.php", popularity: 4188, description: "", meaning: "", origin: ""},
        baby_names[66] = {name: "Nevaeh", sex: "F", url: "landingpage.php", popularity: 4188, description: "", meaning: "", origin: ""},
        baby_names[67] = {name: "Stella", sex: "F", url: "landingpage.php", popularity: 4165, description: "", meaning: "", origin: ""},
        baby_names[68] = {name: "Violet", sex: "F", url: "landingpage.php", popularity: 4156, description: "", meaning: "", origin: ""},
        baby_names[69] = {name: "Genesis", sex: "F", url: "landingpage.php", popularity: 4144, description: "", meaning: "", origin: ""},
        baby_names[70] = {name: "Mackenzie", sex: "F", url: "landingpage.php", popularity: 4122, description: "", meaning: "", origin: ""},
        baby_names[71] = {name: "Bella", sex: "F", url: "landingpage.php", popularity: 4050, description: "", meaning: "", origin: ""},
        baby_names[72] = {name: "Mason", sex: "M", url: "landingpage.php", popularity: 17092, description: "", meaning: "", origin: ""},
        baby_names[73] = {name: "Jacob", sex: "M", url: "landingpage.php", popularity: 16712, description: "", meaning: "", origin: ""},
        baby_names[74] = {name: "William", sex: "M", url: "landingpage.php", popularity: 16687, description: "", meaning: "", origin: ""},
        baby_names[75] = {name: "Ethan", sex: "M", url: "landingpage.php", popularity: 15619, description: "", meaning: "", origin: ""},
        baby_names[76] = {name: "Michael", sex: "M", url: "landingpage.php", popularity: 15323, description: "", meaning: "", origin: ""},
        baby_names[77] = {name: "Alexander", sex: "M", url: "landingpage.php", popularity: 15293, description: "", meaning: "", origin: ""},
        baby_names[78] = {name: "James", sex: "M", url: "landingpage.php", popularity: 14301, description: "", meaning: "", origin: ""},
        baby_names[79] = {name: "Daniel", sex: "M", url: "landingpage.php", popularity: 13829, description: "", meaning: "", origin: ""},
        baby_names[80] = {name: "Elijah", sex: "M", url: "landingpage.php", popularity: 13694, description: "", meaning: "", origin: ""},
        baby_names[81] = {name: "Benjamin", sex: "M", url: "landingpage.php", popularity: 13687, description: "", meaning: "", origin: ""},
        baby_names[82] = {name: "Logan", sex: "N", url: "landingpage.php", popularity: 13579, description: "", meaning: "", origin: ""},
        baby_names[83] = {name: "Aiden", sex: "M", url: "landingpage.php", popularity: 13296, description: "", meaning: "", origin: ""},
        baby_names[84] = {name: "Jayden", sex: "M", url: "landingpage.php", popularity: 12878, description: "", meaning: "", origin: ""},
        baby_names[85] = {name: "Matthew", sex: "M", url: "landingpage.php", popularity: 12809, description: "", meaning: "", origin: ""},
        baby_names[86] = {name: "Jackson", sex: "M", url: "landingpage.php", popularity: 12121, description: "", meaning: "", origin: ""},
        baby_names[87] = {name: "David", sex: "M", url: "landingpage.php", popularity: 12078, description: "", meaning: "", origin: ""},
        baby_names[88] = {name: "Lucas", sex: "M", url: "landingpage.php", popularity: 12078, description: "", meaning: "", origin: ""},
        baby_names[89] = {name: "Joseph", sex: "M", url: "landingpage.php", popularity: 11995, description: "", meaning: "", origin: ""},
        baby_names[90] = {name: "Anthony", sex: "M", url: "landingpage.php", popularity: 11490, description: "", meaning: "", origin: ""},
        baby_names[91] = {name: "Andrew", sex: "M", url: "landingpage.php", popularity: 11069, description: "", meaning: "", origin: ""},
        baby_names[92] = {name: "Samuel", sex: "M", url: "landingpage.php", popularity: 10859, description: "", meaning: "", origin: ""},
        baby_names[93] = {name: "Gabriel", sex: "M", url: "landingpage.php", popularity: 10826, description: "", meaning: "", origin: ""},
        baby_names[94] = {name: "Joshua", sex: "M", url: "landingpage.php", popularity: 10764, description: "", meaning: "", origin: ""},
        baby_names[95] = {name: "John", sex: "M", url: "landingpage.php", popularity: 10600, description: "", meaning: "", origin: ""},
        baby_names[96] = {name: "Carter", sex: "M", url: "landingpage.php", popularity: 10599, description: "", meaning: "", origin: ""},
        baby_names[97] = {name: "Luke", sex: "M", url: "landingpage.php", popularity: 10431, description: "", meaning: "", origin: ""},
        baby_names[98] = {name: "Dylan", sex: "M", url: "landingpage.php", popularity: 10350, description: "", meaning: "", origin: ""},
        baby_names[99] = {name: "Christopher", sex: "M", url: "landingpage.php", popularity: 10278, description: "", meaning: "", origin: ""},
        baby_names[100] = {name: "Isaac", sex: "M", url: "landingpage.php", popularity: 9868, description: "", meaning: "", origin: ""},
        baby_names[101] = {name: "Oliver", sex: "M", url: "landingpage.php", popularity: 9365, description: "", meaning: "", origin: ""},
        baby_names[102] = {name: "Henry", sex: "M", url: "landingpage.php", popularity: 9350, description: "", meaning: "", origin: ""},
        baby_names[103] = {name: "Sebastian", sex: "M", url: "landingpage.php", popularity: 9237, description: "", meaning: "", origin: ""},
        baby_names[104] = {name: "Caleb", sex: "M", url: "landingpage.php", popularity: 9143, description: "", meaning: "", origin: ""},
        baby_names[105] = {name: "Owen", sex: "M", url: "landingpage.php", popularity: 9100, description: "", meaning: "", origin: ""},
        baby_names[106] = {name: "Ryan", sex: "M", url: "landingpage.php", popularity: 9026, description: "", meaning: "", origin: ""},
        baby_names[107] = {name: "Nathan", sex: "M", url: "landingpage.php", popularity: 8902, description: "", meaning: "", origin: ""},
        baby_names[108] = {name: "Wyatt", sex: "M", url: "landingpage.php", popularity: 8812, description: "", meaning: "", origin: ""},
        baby_names[109] = {name: "Hunter", sex: "M", url: "landingpage.php", popularity: 8759, description: "", meaning: "", origin: ""},
        baby_names[110] = {name: "Jack", sex: "M", url: "landingpage.php", popularity: 8685, description: "", meaning: "", origin: ""},
        baby_names[111] = {name: "Christian", sex: "M", url: "landingpage.php", popularity: 8388, description: "", meaning: "", origin: ""},
        baby_names[112] = {name: "Landon", sex: "M", url: "landingpage.php", popularity: 8180, description: "", meaning: "", origin: ""},
        baby_names[113] = {name: "Jonathan", sex: "M", url: "landingpage.php", popularity: 8035, description: "", meaning: "", origin: ""},
        baby_names[114] = {name: "Levi", sex: "M", url: "landingpage.php", popularity: 7958, description: "", meaning: "", origin: ""},
        baby_names[115] = {name: "Jaxon", sex: "M", url: "landingpage.php", popularity: 7635, description: "", meaning: "", origin: ""},
        baby_names[116] = {name: "Julian", sex: "M", url: "landingpage.php", popularity: 7611, description: "", meaning: "", origin: ""},
        baby_names[117] = {name: "Isaiah", sex: "M", url: "landingpage.php", popularity: 7530, description: "", meaning: "", origin: ""},
        baby_names[118] = {name: "Eli", sex: "M", url: "landingpage.php", popularity: 7428, description: "", meaning: "", origin: ""},
        baby_names[119] = {name: "Aaron", sex: "M", url: "landingpage.php", popularity: 7334, description: "", meaning: "", origin: ""},
        baby_names[120] = {name: "Charles", sex: "M", url: "landingpage.php", popularity: 7269, description: "", meaning: "", origin: ""},
        baby_names[121] = {name: "Connor", sex: "M", url: "landingpage.php", popularity: 7195, description: "", meaning: "", origin: ""},
        baby_names[122] = {name: "Cameron", sex: "N", url: "landingpage.php", popularity: 7013, description: "", meaning: "", origin: ""},
        baby_names[123] = {name: "Thomas", sex: "M", url: "landingpage.php", popularity: 6972, description: "", meaning: "", origin: ""},
        baby_names[124] = {name: "Jordan", sex: "N", url: "landingpage.php", popularity: 6810, description: "", meaning: "", origin: ""},
        baby_names[125] = {name: "Jeremiah", sex: "M", url: "landingpage.php", popularity: 6780, description: "", meaning: "", origin: ""},
        baby_names[126] = {name: "Nicholas", sex: "M", url: "landingpage.php", popularity: 6713, description: "", meaning: "", origin: ""},
        baby_names[127] = {name: "Evan", sex: "M", url: "landingpage.php", popularity: 6667, description: "", meaning: "", origin: ""},
        baby_names[128] = {name: "Adrian", sex: "M", url: "landingpage.php", popularity: 6659, description: "", meaning: "", origin: ""},
        baby_names[129] = {name: "Gavin", sex: "M", url: "landingpage.php", popularity: 6582, description: "", meaning: "", origin: ""},
        baby_names[130] = {name: "Robert", sex: "M", url: "landingpage.php", popularity: 6572, description: "", meaning: "", origin: ""},
        baby_names[131] = {name: "Brayden", sex: "M", url: "landingpage.php", popularity: 6539, description: "", meaning: "", origin: ""},
        baby_names[132] = {name: "Grayson", sex: "M", url: "landingpage.php", popularity: 6532, description: "", meaning: "", origin: ""},
        baby_names[133] = {name: "Josiah", sex: "M", url: "landingpage.php", popularity: 6376, description: "", meaning: "", origin: ""},
        baby_names[134] = {name: "Colton", sex: "M", url: "landingpage.php", popularity: 6339, description: "", meaning: "", origin: ""},
        baby_names[135] = {name: "Austin", sex: "M", url: "landingpage.php", popularity: 6263, description: "", meaning: "", origin: ""},
        baby_names[136] = {name: "Angel", sex: "N", url: "landingpage.php", popularity: 6255, description: "", meaning: "", origin: ""},
        baby_names[137] = {name: "Jace", sex: "M", url: "landingpage.php", popularity: 6254, description: "", meaning: "", origin: ""},
        baby_names[138] = {name: "Dominic", sex: "M", url: "landingpage.php", popularity: 6205, description: "", meaning: "", origin: ""},
        baby_names[139] = {name: "Kevin", sex: "M", url: "landingpage.php", popularity: 5859, description: "", meaning: "", origin: ""},
        baby_names[140] = {name: "Brandon", sex: "M", url: "landingpage.php", popularity: 5804, description: "", meaning: "", origin: ""},
        baby_names[141] = {name: "Tyler", sex: "M", url: "landingpage.php", popularity: 5785, description: "", meaning: "", origin: ""},
        baby_names[142] = {name: "Autumn", sex: "F", url: "landingpage.php", popularity: 4034, description: "", meaning: "", origin: ""},
        baby_names[143] = {name: "Mila", sex: "F", url: "landingpage.php", popularity: 4033, description: "", meaning: "", origin: ""},
        baby_names[144] = {name: "Kylie", sex: "F", url: "landingpage.php", popularity: 3928, description: "", meaning: "", origin: ""},
        baby_names[145] = {name: "Maya", sex: "F", url: "landingpage.php", popularity: 3904, description: "", meaning: "", origin: ""},
        baby_names[146] = {name: "Piper", sex: "F", url: "landingpage.php", popularity: 3840, description: "", meaning: "", origin: ""},
        baby_names[147] = {name: "Alyssa", sex: "F", url: "landingpage.php", popularity: 3798, description: "", meaning: "", origin: ""},
        baby_names[148] = {name: "Taylor", sex: "N", url: "landingpage.php", popularity: 3782, description: "", meaning: "", origin: ""},
        baby_names[149] = {name: "Eleanor", sex: "F", url: "landingpage.php", popularity: 3704, description: "", meaning: "", origin: ""},
        baby_names[150] = {name: "Melanie", sex: "F", url: "landingpage.php", popularity: 3681, description: "", meaning: "", origin: ""},
        baby_names[151] = {name: "Naomi", sex: "F", url: "landingpage.php", popularity: 3677, description: "", meaning: "", origin: ""},
        baby_names[152] = {name: "Faith", sex: "F", url: "landingpage.php", popularity: 3664, description: "", meaning: "", origin: ""},
        baby_names[153] = {name: "Eva", sex: "F", url: "landingpage.php", popularity: 3651, description: "", meaning: "", origin: ""},
        baby_names[154] = {name: "Katherine", sex: "F", url: "landingpage.php", popularity: 3651, description: "", meaning: "", origin: ""},
        baby_names[155] = {name: "Lydia", sex: "F", url: "landingpage.php", popularity: 3609, description: "", meaning: "", origin: ""},
        baby_names[156] = {name: "Brianna", sex: "F", url: "landingpage.php", popularity: 3582, description: "", meaning: "", origin: ""},
        baby_names[157] = {name: "Julia", sex: "F", url: "landingpage.php", popularity: 3578, description: "", meaning: "", origin: ""},
        baby_names[158] = {name: "Ashley", sex: "N", url: "landingpage.php", popularity: 3539, description: "", meaning: "", origin: ""},
        baby_names[159] = {name: "Khloe", sex: "F", url: "landingpage.php", popularity: 3518, description: "", meaning: "", origin: ""},
        baby_names[160] = {name: "Madeline", sex: "F", url: "landingpage.php", popularity: 3409, description: "", meaning: "", origin: ""},
        baby_names[161] = {name: "Ruby", sex: "F", url: "landingpage.php", popularity: 3383, description: "", meaning: "", origin: ""},
        baby_names[162] = {name: "Sophie", sex: "F", url: "landingpage.php", popularity: 3364, description: "", meaning: "", origin: ""},
        baby_names[163] = {name: "Alexandra", sex: "F", url: "landingpage.php", popularity: 3288, description: "", meaning: "", origin: ""},
        baby_names[164] = {name: "London", sex: "N", url: "landingpage.php", popularity: 3264, description: "", meaning: "", origin: ""},
        baby_names[165] = {name: "Lauren", sex: "F", url: "landingpage.php", popularity: 3072, description: "", meaning: "", origin: ""},
        baby_names[166] = {name: "Gianna", sex: "F", url: "landingpage.php", popularity: 3061, description: "", meaning: "", origin: ""},
        baby_names[167] = {name: "Isabelle", sex: "F", url: "landingpage.php", popularity: 3044, description: "", meaning: "", origin: ""},
        baby_names[168] = {name: "Alice", sex: "F", url: "landingpage.php", popularity: 3042, description: "", meaning: "", origin: ""},
        baby_names[169] = {name: "Vivian", sex: "F", url: "landingpage.php", popularity: 3040, description: "", meaning: "", origin: ""},
        baby_names[170] = {name: "Hadley", sex: "F", url: "landingpage.php", popularity: 2992, description: "", meaning: "", origin: ""},
        baby_names[171] = {name: "Jasmine", sex: "F", url: "landingpage.php", popularity: 2988, description: "", meaning: "", origin: ""},
        baby_names[172] = {name: "Morgan", sex: "N", url: "landingpage.php", popularity: 2984, description: "", meaning: "", origin: ""},
        baby_names[173] = {name: "Kayla", sex: "F", url: "landingpage.php", popularity: 2982, description: "", meaning: "", origin: ""},
        baby_names[174] = {name: "Cora", sex: "F", url: "landingpage.php", popularity: 2945, description: "", meaning: "", origin: ""},
        baby_names[175] = {name: "Bailey", sex: "F", url: "landingpage.php", popularity: 2929, description: "", meaning: "", origin: ""},
        baby_names[176] = {name: "Kimberly", sex: "F", url: "landingpage.php", popularity: 2883, description: "", meaning: "", origin: ""},
        baby_names[177] = {name: "Reagan", sex: "N", url: "landingpage.php", popularity: 2882, description: "", meaning: "", origin: ""},
        baby_names[178] = {name: "Hazel", sex: "F", url: "landingpage.php", popularity: 2877, description: "", meaning: "", origin: ""},
        baby_names[179] = {name: "Clara", sex: "F", url: "landingpage.php", popularity: 2833, description: "", meaning: "", origin: ""},
        baby_names[180] = {name: "Sydney", sex: "F", url: "landingpage.php", popularity: 2831, description: "", meaning: "", origin: ""},
        baby_names[181] = {name: "Trinity", sex: "F", url: "landingpage.php", popularity: 2781, description: "", meaning: "", origin: ""},
        baby_names[182] = {name: "Natalia", sex: "F", url: "landingpage.php", popularity: 2778, description: "", meaning: "", origin: ""},
        baby_names[183] = {name: "Valentina", sex: "F", url: "landingpage.php", popularity: 2769, description: "", meaning: "", origin: ""},
        baby_names[184] = {name: "Rylee", sex: "F", url: "landingpage.php", popularity: 2753, description: "", meaning: "", origin: ""},
        baby_names[185] = {name: "Jocelyn", sex: "F", url: "landingpage.php", popularity: 2744, description: "", meaning: "", origin: ""},
        baby_names[186] = {name: "Maria", sex: "F", url: "landingpage.php", popularity: 2740, description: "", meaning: "", origin: ""},
        baby_names[187] = {name: "Aurora", sex: "F", url: "landingpage.php", popularity: 2718, description: "", meaning: "", origin: ""},
        baby_names[188] = {name: "Eliana", sex: "F", url: "landingpage.php", popularity: 2708, description: "", meaning: "", origin: ""},
        baby_names[189] = {name: "Brielle", sex: "F", url: "landingpage.php", popularity: 2638, description: "", meaning: "", origin: ""},
        baby_names[190] = {name: "Liliana", sex: "F", url: "landingpage.php", popularity: 2624, description: "", meaning: "", origin: ""},
        baby_names[191] = {name: "Mary", sex: "F", url: "landingpage.php", popularity: 2611, description: "", meaning: "", origin: ""},
        baby_names[192] = {name: "Elena", sex: "F", url: "landingpage.php", popularity: 2598, description: "", meaning: "", origin: ""},
        baby_names[193] = {name: "Molly", sex: "F", url: "landingpage.php", popularity: 2578, description: "", meaning: "", origin: ""},
        baby_names[194] = {name: "Makayla", sex: "F", url: "landingpage.php", popularity: 2559, description: "", meaning: "", origin: ""},
        baby_names[195] = {name: "Lilly", sex: "F", url: "landingpage.php", popularity: 2550, description: "", meaning: "", origin: ""},
        baby_names[196] = {name: "Andrea", sex: "F", url: "landingpage.php", popularity: 2543, description: "", meaning: "", origin: ""},
        baby_names[197] = {name: "Quinn", sex: "N", url: "landingpage.php", popularity: 2539, description: "", meaning: "", origin: ""},
        baby_names[198] = {name: "Jordyn", sex: "F", url: "landingpage.php", popularity: 2533, description: "", meaning: "", origin: ""},
        baby_names[199] = {name: "Adalynn", sex: "F", url: "landingpage.php", popularity: 2512, description: "", meaning: "", origin: ""},
        baby_names[200] = {name: "Nicole", sex: "F", url: "landingpage.php", popularity: 2511, description: "", meaning: "", origin: ""},
        baby_names[201] = {name: "Delilah", sex: "F", url: "landingpage.php", popularity: 2496, description: "", meaning: "", origin: ""},
        baby_names[202] = {name: "Kendall", sex: "N", url: "landingpage.php", popularity: 2432, description: "", meaning: "", origin: ""},
        baby_names[203] = {name: "Kinsley", sex: "F", url: "landingpage.php", popularity: 2429, description: "", meaning: "", origin: ""},
        baby_names[204] = {name: "Ariel", sex: "N", url: "landingpage.php", popularity: 2419, description: "", meaning: "", origin: ""},
        baby_names[205] = {name: "Payton", sex: "N", url: "landingpage.php", popularity: 2397, description: "", meaning: "", origin: ""},
        baby_names[206] = {name: "Paige", sex: "F", url: "landingpage.php", popularity: 2395, description: "", meaning: "", origin: ""},
        baby_names[207] = {name: "Mariah", sex: "F", url: "landingpage.php", popularity: 2383, description: "", meaning: "", origin: ""},
        baby_names[208] = {name: "Brooke", sex: "F", url: "landingpage.php", popularity: 2375, description: "", meaning: "", origin: ""},
        baby_names[209] = {name: "Willow", sex: "F", url: "landingpage.php", popularity: 2373, description: "", meaning: "", origin: ""},
        baby_names[210] = {name: "Jade", sex: "F", url: "landingpage.php", popularity: 2369, description: "", meaning: "", origin: ""},
        baby_names[211] = {name: "Lyla", sex: "F", url: "landingpage.php", popularity: 2368, description: "", meaning: "", origin: ""},
        baby_names[212] = {name: "Mya", sex: "F", url: "landingpage.php", popularity: 2367, description: "", meaning: "", origin: ""},
        baby_names[213] = {name: "Ximena", sex: "F", url: "landingpage.php", popularity: 2323, description: "", meaning: "", origin: ""},
        baby_names[214] = {name: "Luna", sex: "F", url: "landingpage.php", popularity: 2314, description: "", meaning: "", origin: ""},
        baby_names[215] = {name: "Isabel", sex: "F", url: "landingpage.php", popularity: 2313, description: "", meaning: "", origin: ""},
        baby_names[216] = {name: "Mckenzie", sex: "F", url: "landingpage.php", popularity: 2303, description: "", meaning: "", origin: ""},
        baby_names[217] = {name: "Ivy", sex: "F", url: "landingpage.php", popularity: 2269, description: "", meaning: "", origin: ""},
        baby_names[218] = {name: "Josephine", sex: "F", url: "landingpage.php", popularity: 2255, description: "", meaning: "", origin: ""},
        baby_names[219] = {name: "Amy", sex: "F", url: "landingpage.php", popularity: 2178, description: "", meaning: "", origin: ""},
        baby_names[220] = {name: "Laila", sex: "F", url: "landingpage.php", popularity: 2133, description: "", meaning: "", origin: ""},
        baby_names[221] = {name: "Isla", sex: "F", url: "landingpage.php", popularity: 2122, description: "", meaning: "", origin: ""},
        baby_names[222] = {name: "Eden", sex: "F", url: "landingpage.php", popularity: 2117, description: "", meaning: "", origin: ""},
        baby_names[223] = {name: "Adalyn", sex: "F", url: "landingpage.php", popularity: 2105, description: "", meaning: "", origin: ""},
        baby_names[224] = {name: "Angelina", sex: "F", url: "landingpage.php", popularity: 2105, description: "", meaning: "", origin: ""},
        baby_names[225] = {name: "Londyn", sex: "F", url: "landingpage.php", popularity: 2081, description: "", meaning: "", origin: ""},
        baby_names[226] = {name: "Rachel", sex: "F", url: "landingpage.php", popularity: 2051, description: "", meaning: "", origin: ""},
        baby_names[227] = {name: "Melody", sex: "F", url: "landingpage.php", popularity: 2048, description: "", meaning: "", origin: ""},
        baby_names[228] = {name: "Juliana", sex: "F", url: "landingpage.php", popularity: 2045, description: "", meaning: "", origin: ""},
        baby_names[229] = {name: "Kaitlyn", sex: "F", url: "landingpage.php", popularity: 2044, description: "", meaning: "", origin: ""},
        baby_names[230] = {name: "Brooklynn", sex: "F", url: "landingpage.php", popularity: 2043, description: "", meaning: "", origin: ""},
        baby_names[231] = {name: "Destiny", sex: "F", url: "landingpage.php", popularity: 2043, description: "", meaning: "", origin: ""},
        baby_names[232] = {name: "Emery", sex: "F", url: "landingpage.php", popularity: 2026, description: "", meaning: "", origin: ""},
        baby_names[233] = {name: "Gracie", sex: "F", url: "landingpage.php", popularity: 2021, description: "", meaning: "", origin: ""},
        baby_names[234] = {name: "Norah", sex: "F", url: "landingpage.php", popularity: 1994, description: "", meaning: "", origin: ""},
        baby_names[235] = {name: "Emilia", sex: "F", url: "landingpage.php", popularity: 1989, description: "", meaning: "", origin: ""},
        baby_names[236] = {name: "Reese", sex: "F", url: "landingpage.php", popularity: 1960, description: "", meaning: "", origin: ""},
        baby_names[237] = {name: "Elise", sex: "F", url: "landingpage.php", popularity: 1959, description: "", meaning: "", origin: ""},
        baby_names[238] = {name: "Sara", sex: "F", url: "landingpage.php", popularity: 1949, description: "", meaning: "", origin: ""},
        baby_names[239] = {name: "Aliyah", sex: "F", url: "landingpage.php", popularity: 1947, description: "", meaning: "", origin: ""},
        baby_names[240] = {name: "Margaret", sex: "F", url: "landingpage.php", popularity: 1933, description: "", meaning: "", origin: ""},
        baby_names[241] = {name: "Catherine", sex: "F", url: "landingpage.php", popularity: 1923, description: "", meaning: "", origin: ""},
        baby_names[242] = {name: "Vanessa", sex: "F", url: "landingpage.php", popularity: 1913, description: "", meaning: "", origin: ""},
        baby_names[243] = {name: "Katelyn", sex: "F", url: "landingpage.php", popularity: 1910, description: "", meaning: "", origin: ""},
        baby_names[244] = {name: "Gabrielle", sex: "F", url: "landingpage.php", popularity: 1902, description: "", meaning: "", origin: ""},
        baby_names[245] = {name: "Arabella", sex: "F", url: "landingpage.php", popularity: 1894, description: "", meaning: "", origin: ""},
        baby_names[246] = {name: "Valeria", sex: "F", url: "landingpage.php", popularity: 1882, description: "", meaning: "", origin: ""},
        baby_names[247] = {name: "Valerie", sex: "F", url: "landingpage.php", popularity: 1871, description: "", meaning: "", origin: ""},
        baby_names[248] = {name: "Adriana", sex: "F", url: "landingpage.php", popularity: 1861, description: "", meaning: "", origin: ""},
        baby_names[249] = {name: "Everly", sex: "F", url: "landingpage.php", popularity: 1854, description: "", meaning: "", origin: ""},
        baby_names[250] = {name: "Jessica", sex: "F", url: "landingpage.php", popularity: 1779, description: "", meaning: "", origin: ""},
        baby_names[251] = {name: "Daisy", sex: "F", url: "landingpage.php", popularity: 1769, description: "", meaning: "", origin: ""},
        baby_names[252] = {name: "Makenzie", sex: "F", url: "landingpage.php", popularity: 1766, description: "", meaning: "", origin: ""},
        baby_names[253] = {name: "Summer", sex: "F", url: "landingpage.php", popularity: 1759, description: "", meaning: "", origin: ""},
        baby_names[254] = {name: "Lila", sex: "F", url: "landingpage.php", popularity: 1758, description: "", meaning: "", origin: ""},
        baby_names[255] = {name: "Rebecca", sex: "F", url: "landingpage.php", popularity: 1758, description: "", meaning: "", origin: ""},
        baby_names[256] = {name: "Julianna", sex: "F", url: "landingpage.php", popularity: 1756, description: "", meaning: "", origin: ""},
        baby_names[257] = {name: "Callie", sex: "F", url: "landingpage.php", popularity: 1751, description: "", meaning: "", origin: ""},
        baby_names[258] = {name: "Michelle", sex: "F", url: "landingpage.php", popularity: 1737, description: "", meaning: "", origin: ""},
        baby_names[259] = {name: "Ryleigh", sex: "F", url: "landingpage.php", popularity: 1735, description: "", meaning: "", origin: ""},
        baby_names[260] = {name: "Presley", sex: "F", url: "landingpage.php", popularity: 1733, description: "", meaning: "", origin: ""},
        baby_names[261] = {name: "Alaina", sex: "F", url: "landingpage.php", popularity: 1729, description: "", meaning: "", origin: ""},
        baby_names[262] = {name: "Angela", sex: "F", url: "landingpage.php", popularity: 1722, description: "", meaning: "", origin: ""},
        baby_names[263] = {name: "Alina", sex: "F", url: "landingpage.php", popularity: 1706, description: "", meaning: "", origin: ""},
        baby_names[264] = {name: "Harmony", sex: "F", url: "landingpage.php", popularity: 1704, description: "", meaning: "", origin: ""},
        baby_names[265] = {name: "Rose", sex: "F", url: "landingpage.php", popularity: 1678, description: "", meaning: "", origin: ""},
        baby_names[266] = {name: "Athena", sex: "F", url: "landingpage.php", popularity: 1677, description: "", meaning: "", origin: ""},
        baby_names[267] = {name: "Emerson", sex: "F", url: "landingpage.php", popularity: 1670, description: "", meaning: "", origin: ""},
        baby_names[268] = {name: "Adelyn", sex: "F", url: "landingpage.php", popularity: 1666, description: "", meaning: "", origin: ""},
        baby_names[269] = {name: "Alana", sex: "F", url: "landingpage.php", popularity: 1664, description: "", meaning: "", origin: ""},
        baby_names[270] = {name: "Hayden", sex: "F", url: "landingpage.php", popularity: 1656, description: "", meaning: "", origin: ""},
        baby_names[271] = {name: "Izabella", sex: "F", url: "landingpage.php", popularity: 1653, description: "", meaning: "", origin: ""},
        baby_names[272] = {name: "Cali", sex: "F", url: "landingpage.php", popularity: 1652, description: "", meaning: "", origin: ""},
        baby_names[273] = {name: "Marley", sex: "F", url: "landingpage.php", popularity: 1643, description: "", meaning: "", origin: ""},
        baby_names[274] = {name: "Esther", sex: "F", url: "landingpage.php", popularity: 1638, description: "", meaning: "", origin: ""},
        baby_names[275] = {name: "Fiona", sex: "F", url: "landingpage.php", popularity: 1636, description: "", meaning: "", origin: ""},
        baby_names[276] = {name: "Stephanie", sex: "F", url: "landingpage.php", popularity: 1630, description: "", meaning: "", origin: ""},
        baby_names[277] = {name: "Cecilia", sex: "F", url: "landingpage.php", popularity: 1623, description: "", meaning: "", origin: ""},
        baby_names[278] = {name: "Kate", sex: "F", url: "landingpage.php", popularity: 1611, description: "", meaning: "", origin: ""},
        baby_names[279] = {name: "Kinley", sex: "F", url: "landingpage.php", popularity: 1610, description: "", meaning: "", origin: ""},
        baby_names[280] = {name: "Jayla", sex: "F", url: "landingpage.php", popularity: 1609, description: "", meaning: "", origin: ""},
        baby_names[281] = {name: "Genevieve", sex: "F", url: "landingpage.php", popularity: 1595, description: "", meaning: "", origin: ""},
        baby_names[282] = {name: "Alexandria", sex: "F", url: "landingpage.php", popularity: 1589, description: "", meaning: "", origin: ""},
        baby_names[283] = {name: "Eliza", sex: "F", url: "landingpage.php", popularity: 1585, description: "", meaning: "", origin: ""},
        baby_names[284] = {name: "Kylee", sex: "F", url: "landingpage.php", popularity: 1580, description: "", meaning: "", origin: ""},
        baby_names[285] = {name: "Alivia", sex: "F", url: "landingpage.php", popularity: 1579, description: "", meaning: "", origin: ""},
        baby_names[286] = {name: "Giselle", sex: "F", url: "landingpage.php", popularity: 1573, description: "", meaning: "", origin: ""},
        baby_names[287] = {name: "Arya", sex: "F", url: "landingpage.php", popularity: 1544, description: "", meaning: "", origin: ""},
        baby_names[288] = {name: "Alayna", sex: "F", url: "landingpage.php", popularity: 1533, description: "", meaning: "", origin: ""},
        baby_names[289] = {name: "Leilani", sex: "F", url: "landingpage.php", popularity: 1532, description: "", meaning: "", origin: ""},
        baby_names[290] = {name: "Adeline", sex: "F", url: "landingpage.php", popularity: 1522, description: "", meaning: "", origin: ""},
        baby_names[291] = {name: "Jennifer", sex: "F", url: "landingpage.php", popularity: 1514, description: "", meaning: "", origin: ""},
        baby_names[292] = {name: "Tessa", sex: "F", url: "landingpage.php", popularity: 1510, description: "", meaning: "", origin: ""},
        baby_names[293] = {name: "Ana", sex: "F", url: "landingpage.php", popularity: 1508, description: "", meaning: "", origin: ""},
        baby_names[294] = {name: "Finley", sex: "N", url: "landingpage.php", popularity: 1498, description: "", meaning: "", origin: ""},
        baby_names[295] = {name: "Melissa", sex: "F", url: "landingpage.php", popularity: 1496, description: "", meaning: "", origin: ""},
        baby_names[296] = {name: "Daniela", sex: "F", url: "landingpage.php", popularity: 1486, description: "", meaning: "", origin: ""},
        baby_names[297] = {name: "Aniyah", sex: "F", url: "landingpage.php", popularity: 1479, description: "", meaning: "", origin: ""},
        baby_names[298] = {name: "Daleyza", sex: "F", url: "landingpage.php", popularity: 1461, description: "", meaning: "", origin: ""},
        baby_names[299] = {name: "Keira", sex: "F", url: "landingpage.php", popularity: 1459, description: "", meaning: "", origin: ""},
        baby_names[300] = {name: "Charlie", sex: "N", url: "landingpage.php", popularity: 1432, description: "", meaning: "", origin: ""},
        baby_names[301] = {name: "Lucia", sex: "F", url: "landingpage.php", popularity: 1421, description: "", meaning: "", origin: ""},
        baby_names[302] = {name: "Hope", sex: "F", url: "landingpage.php", popularity: 1412, description: "", meaning: "", origin: ""},
        baby_names[303] = {name: "Gabriela", sex: "F", url: "landingpage.php", popularity: 1403, description: "", meaning: "", origin: ""},
        baby_names[304] = {name: "Mckenna", sex: "F", url: "landingpage.php", popularity: 1388, description: "", meaning: "", origin: ""},
        baby_names[305] = {name: "Brynlee", sex: "F", url: "landingpage.php", popularity: 1387, description: "", meaning: "", origin: ""},
        baby_names[306] = {name: "Parker", sex: "N", url: "landingpage.php", popularity: 1386, description: "", meaning: "", origin: ""},
        baby_names[307] = {name: "Lola", sex: "F", url: "landingpage.php", popularity: 1370, description: "", meaning: "", origin: ""},
        baby_names[308] = {name: "Amaya", sex: "F", url: "landingpage.php", popularity: 1349, description: "", meaning: "", origin: ""},
        baby_names[309] = {name: "Miranda", sex: "F", url: "landingpage.php", popularity: 1348, description: "", meaning: "", origin: ""},
        baby_names[310] = {name: "Maggie", sex: "F", url: "landingpage.php", popularity: 1344, description: "", meaning: "", origin: ""},
        baby_names[311] = {name: "Anastasia", sex: "F", url: "landingpage.php", popularity: 1328, description: "", meaning: "", origin: ""},
        baby_names[312] = {name: "Leila", sex: "F", url: "landingpage.php", popularity: 1324, description: "", meaning: "", origin: ""},
        baby_names[313] = {name: "Lexi", sex: "F", url: "landingpage.php", popularity: 1320, description: "", meaning: "", origin: ""},
        baby_names[314] = {name: "Georgia", sex: "F", url: "landingpage.php", popularity: 1319, description: "", meaning: "", origin: ""},
        baby_names[315] = {name: "Kenzie", sex: "F", url: "landingpage.php", popularity: 1317, description: "", meaning: "", origin: ""},
        baby_names[316] = {name: "Iris", sex: "F", url: "landingpage.php", popularity: 1312, description: "", meaning: "", origin: ""},
        baby_names[317] = {name: "Jacqueline", sex: "F", url: "landingpage.php", popularity: 1301, description: "", meaning: "", origin: ""},
        baby_names[318] = {name: "Azaria", sex: "N", url: "landingpage.php", popularity: 12940, description: "", meaning: "", origin: ""},
        baby_names[319] = {name: "Cassidy", sex: "F", url: "landingpage.php", popularity: 1294, description: "", meaning: "", origin: ""},
        baby_names[320] = {name: "Vivienne", sex: "F", url: "landingpage.php", popularity: 1289, description: "", meaning: "", origin: ""},
        baby_names[321] = {name: "Camille", sex: "F", url: "landingpage.php", popularity: 1280, description: "", meaning: "", origin: ""},
        baby_names[322] = {name: "Noelle", sex: "F", url: "landingpage.php", popularity: 1280, description: "", meaning: "", origin: ""},
        baby_names[323] = {name: "Adrianna", sex: "F", url: "landingpage.php", popularity: 1272, description: "", meaning: "", origin: ""},
        baby_names[324] = {name: "Teagan", sex: "F", url: "landingpage.php", popularity: 1272, description: "", meaning: "", origin: ""},
        baby_names[325] = {name: "Josie", sex: "F", url: "landingpage.php", popularity: 1269, description: "", meaning: "", origin: ""},
        baby_names[326] = {name: "Juliette", sex: "F", url: "landingpage.php", popularity: 1268, description: "", meaning: "", origin: ""},
        baby_names[327] = {name: "Annabella", sex: "F", url: "landingpage.php", popularity: 1265, description: "", meaning: "", origin: ""},
        baby_names[328] = {name: "Allie", sex: "F", url: "landingpage.php", popularity: 1263, description: "", meaning: "", origin: ""},
        baby_names[329] = {name: "Juliet", sex: "F", url: "landingpage.php", popularity: 1263, description: "", meaning: "", origin: ""},
        baby_names[330] = {name: "Kendra", sex: "F", url: "landingpage.php", popularity: 1262, description: "", meaning: "", origin: ""},
        baby_names[331] = {name: "Sienna", sex: "F", url: "landingpage.php", popularity: 1255, description: "", meaning: "", origin: ""},
        baby_names[332] = {name: "Brynn", sex: "F", url: "landingpage.php", popularity: 1253, description: "", meaning: "", origin: ""},
        baby_names[333] = {name: "Kali", sex: "F", url: "landingpage.php", popularity: 1247, description: "", meaning: "", origin: ""},
        baby_names[334] = {name: "Maci", sex: "F", url: "landingpage.php", popularity: 1235, description: "", meaning: "", origin: ""},
        baby_names[335] = {name: "Danielle", sex: "F", url: "landingpage.php", popularity: 1233, description: "", meaning: "", origin: ""},
        baby_names[336] = {name: "Haley", sex: "F", url: "landingpage.php", popularity: 1223, description: "", meaning: "", origin: ""},
        baby_names[337] = {name: "Jenna", sex: "F", url: "landingpage.php", popularity: 1223, description: "", meaning: "", origin: ""},
        baby_names[338] = {name: "Raelynn", sex: "F", url: "landingpage.php", popularity: 1222, description: "", meaning: "", origin: ""},
        baby_names[339] = {name: "Delaney", sex: "F", url: "landingpage.php", popularity: 1220, description: "", meaning: "", origin: ""},
        baby_names[340] = {name: "Paris", sex: "F", url: "landingpage.php", popularity: 1218, description: "", meaning: "", origin: ""},
        baby_names[341] = {name: "Alexia", sex: "F", url: "landingpage.php", popularity: 1213, description: "", meaning: "", origin: ""},
        baby_names[342] = {name: "Lyric", sex: "F", url: "landingpage.php", popularity: 1210, description: "", meaning: "", origin: ""},
        baby_names[343] = {name: "Gemma", sex: "F", url: "landingpage.php", popularity: 1205, description: "", meaning: "", origin: ""},
        baby_names[344] = {name: "Lilliana", sex: "F", url: "landingpage.php", popularity: 1203, description: "", meaning: "", origin: ""},
        baby_names[345] = {name: "Chelsea", sex: "F", url: "landingpage.php", popularity: 1191, description: "", meaning: "", origin: ""},
        baby_names[346] = {name: "Angel", sex: "F", url: "landingpage.php", popularity: 1179, description: "", meaning: "", origin: ""},
        baby_names[347] = {name: "Evangeline", sex: "F", url: "landingpage.php", popularity: 1177, description: "", meaning: "", origin: ""},
        baby_names[348] = {name: "Ayla", sex: "F", url: "landingpage.php", popularity: 1169, description: "", meaning: "", origin: ""},
        baby_names[349] = {name: "Kayleigh", sex: "F", url: "landingpage.php", popularity: 1160, description: "", meaning: "", origin: ""},
        baby_names[350] = {name: "Lena", sex: "F", url: "landingpage.php", popularity: 1156, description: "", meaning: "", origin: ""},
        baby_names[351] = {name: "Katie", sex: "F", url: "landingpage.php", popularity: 1149, description: "", meaning: "", origin: ""},
        baby_names[352] = {name: "Elaina", sex: "F", url: "landingpage.php", popularity: 1145, description: "", meaning: "", origin: ""},
        baby_names[353] = {name: "Olive", sex: "F", url: "landingpage.php", popularity: 1144, description: "", meaning: "", origin: ""},
        baby_names[354] = {name: "Madeleine", sex: "F", url: "landingpage.php", popularity: 1138, description: "", meaning: "", origin: ""},
        baby_names[355] = {name: "Makenna", sex: "F", url: "landingpage.php", popularity: 1138, description: "", meaning: "", origin: ""},
        baby_names[356] = {name: "Dakota", sex: "N", url: "landingpage.php", popularity: 1136, description: "", meaning: "", origin: ""},
        baby_names[357] = {name: "Elsa", sex: "F", url: "landingpage.php", popularity: 1131, description: "", meaning: "", origin: ""},
        baby_names[358] = {name: "Nova", sex: "F", url: "landingpage.php", popularity: 1121, description: "", meaning: "", origin: ""},
        baby_names[359] = {name: "Nadia", sex: "F", url: "landingpage.php", popularity: 1119, description: "", meaning: "", origin: ""},
        baby_names[360] = {name: "Alison", sex: "F", url: "landingpage.php", popularity: 1115, description: "", meaning: "", origin: ""},
        baby_names[361] = {name: "Kaydence", sex: "F", url: "landingpage.php", popularity: 1111, description: "", meaning: "", origin: ""},
        baby_names[362] = {name: "Journey", sex: "F", url: "landingpage.php", popularity: 1110, description: "", meaning: "", origin: ""},
        baby_names[363] = {name: "Jada", sex: "F", url: "landingpage.php", popularity: 1107, description: "", meaning: "", origin: ""},
        baby_names[364] = {name: "Kathryn", sex: "F", url: "landingpage.php", popularity: 1107, description: "", meaning: "", origin: ""},
        baby_names[365] = {name: "Shelby", sex: "N", url: "landingpage.php", popularity: 1101, description: "", meaning: "", origin: ""},
        baby_names[366] = {name: "Nina", sex: "F", url: "landingpage.php", popularity: 1091, description: "", meaning: "", origin: ""},
        baby_names[367] = {name: "Elliana", sex: "F", url: "landingpage.php", popularity: 1089, description: "", meaning: "", origin: ""},
        baby_names[368] = {name: "Diana", sex: "F", url: "landingpage.php", popularity: 1088, description: "", meaning: "", origin: ""},
        baby_names[369] = {name: "Phoebe", sex: "F", url: "landingpage.php", popularity: 1086, description: "", meaning: "", origin: ""},
        baby_names[370] = {name: "Alessandra", sex: "F", url: "landingpage.php", popularity: 1078, description: "", meaning: "", origin: ""},
        baby_names[371] = {name: "Eloise", sex: "F", url: "landingpage.php", popularity: 1074, description: "", meaning: "", origin: ""},
        baby_names[372] = {name: "Nyla", sex: "F", url: "landingpage.php", popularity: 1074, description: "", meaning: "", origin: ""},
        baby_names[373] = {name: "Skyler", sex: "N", url: "landingpage.php", popularity: 1070, description: "", meaning: "", origin: ""},
        baby_names[374] = {name: "Madilyn", sex: "F", url: "landingpage.php", popularity: 1067, description: "", meaning: "", origin: ""},
        baby_names[375] = {name: "Adelynn", sex: "F", url: "landingpage.php", popularity: 1058, description: "", meaning: "", origin: ""},
        baby_names[376] = {name: "Miriam", sex: "F", url: "landingpage.php", popularity: 1057, description: "", meaning: "", origin: ""},
        baby_names[377] = {name: "Ashlyn", sex: "F", url: "landingpage.php", popularity: 1055, description: "", meaning: "", origin: ""},
        baby_names[378] = {name: "Amiyah", sex: "F", url: "landingpage.php", popularity: 1051, description: "", meaning: "", origin: ""},
        baby_names[379] = {name: "Megan", sex: "F", url: "landingpage.php", popularity: 1051, description: "", meaning: "", origin: ""},
        baby_names[380] = {name: "Amber", sex: "F", url: "landingpage.php", popularity: 1049, description: "", meaning: "", origin: ""},
        baby_names[381] = {name: "Rosalie", sex: "F", url: "landingpage.php", popularity: 1047, description: "", meaning: "", origin: ""},
        baby_names[382] = {name: "Annie", sex: "F", url: "landingpage.php", popularity: 1046, description: "", meaning: "", origin: ""},
        baby_names[383] = {name: "Lilah", sex: "F", url: "landingpage.php", popularity: 1044, description: "", meaning: "", origin: ""},
        baby_names[384] = {name: "Charlee", sex: "F", url: "landingpage.php", popularity: 1043, description: "", meaning: "", origin: ""},
        baby_names[385] = {name: "Amanda", sex: "F", url: "landingpage.php", popularity: 1042, description: "", meaning: "", origin: ""},
        baby_names[386] = {name: "Ruth", sex: "F", url: "landingpage.php", popularity: 1042, description: "", meaning: "", origin: ""},
        baby_names[387] = {name: "Adelaide", sex: "F", url: "landingpage.php", popularity: 1040, description: "", meaning: "", origin: ""},
        baby_names[388] = {name: "June", sex: "F", url: "landingpage.php", popularity: 1039, description: "", meaning: "", origin: ""},
        baby_names[389] = {name: "Laura", sex: "F", url: "landingpage.php", popularity: 1038, description: "", meaning: "", origin: ""},
        baby_names[390] = {name: "Daniella", sex: "F", url: "landingpage.php", popularity: 1032, description: "", meaning: "", origin: ""},
        baby_names[391] = {name: "Mikayla", sex: "F", url: "landingpage.php", popularity: 1026, description: "", meaning: "", origin: ""},
        baby_names[392] = {name: "Raegan", sex: "F", url: "landingpage.php", popularity: 1019, description: "", meaning: "", origin: ""},
        baby_names[393] = {name: "Jane", sex: "F", url: "landingpage.php", popularity: 1018, description: "", meaning: "", origin: ""},
        baby_names[394] = {name: "Ashlynn", sex: "F", url: "landingpage.php", popularity: 1015, description: "", meaning: "", origin: ""},
        baby_names[395] = {name: "Kelsey", sex: "F", url: "landingpage.php", popularity: 1014, description: "", meaning: "", origin: ""},
        baby_names[396] = {name: "Erin", sex: "F", url: "landingpage.php", popularity: 1013, description: "", meaning: "", origin: ""},
        baby_names[397] = {name: "Christina", sex: "F", url: "landingpage.php", popularity: 1012, description: "", meaning: "", origin: ""},
        baby_names[398] = {name: "Joanna", sex: "F", url: "landingpage.php", popularity: 1010, description: "", meaning: "", origin: ""},
        baby_names[399] = {name: "Fatima", sex: "F", url: "landingpage.php", popularity: 1009, description: "", meaning: "", origin: ""},
        baby_names[400] = {name: "Allyson", sex: "F", url: "landingpage.php", popularity: 1008, description: "", meaning: "", origin: ""},
        baby_names[401] = {name: "Talia", sex: "F", url: "landingpage.php", popularity: 1006, description: "", meaning: "", origin: ""},
        baby_names[402] = {name: "Mariana", sex: "F", url: "landingpage.php", popularity: 1004, description: "", meaning: "", origin: ""},
        baby_names[403] = {name: "Sabrina", sex: "F", url: "landingpage.php", popularity: 1003, description: "", meaning: "", origin: ""},
        baby_names[404] = {name: "Haven", sex: "F", url: "landingpage.php", popularity: 1002, description: "", meaning: "", origin: ""},
        baby_names[405] = {name: "Parker", sex: "M", url: "landingpage.php", popularity: 5677, description: "", meaning: "", origin: ""},
        baby_names[406] = {name: "Ayden", sex: "M", url: "landingpage.php", popularity: 5586, description: "", meaning: "", origin: ""},
        baby_names[407] = {name: "Jason", sex: "M", url: "landingpage.php", popularity: 5510, description: "", meaning: "", origin: ""},
        baby_names[408] = {name: "Jose", sex: "M", url: "landingpage.php", popularity: 5442, description: "", meaning: "", origin: ""},
        baby_names[409] = {name: "Ian", sex: "M", url: "landingpage.php", popularity: 5422, description: "", meaning: "", origin: ""},
        baby_names[410] = {name: "Chase", sex: "M", url: "landingpage.php", popularity: 5322, description: "", meaning: "", origin: ""},
        baby_names[411] = {name: "Adam", sex: "M", url: "landingpage.php", popularity: 5293, description: "", meaning: "", origin: ""},
        baby_names[412] = {name: "Hudson", sex: "M", url: "landingpage.php", popularity: 5199, description: "", meaning: "", origin: ""},
        baby_names[413] = {name: "Nolan", sex: "M", url: "landingpage.php", popularity: 5181, description: "", meaning: "", origin: ""},
        baby_names[414] = {name: "Zachary", sex: "M", url: "landingpage.php", popularity: 5137, description: "", meaning: "", origin: ""},
        baby_names[415] = {name: "Easton", sex: "M", url: "landingpage.php", popularity: 4961, description: "", meaning: "", origin: ""},
        baby_names[416] = {name: "Blake", sex: "M", url: "landingpage.php", popularity: 4913, description: "", meaning: "", origin: ""},
        baby_names[417] = {name: "Jaxson", sex: "M", url: "landingpage.php", popularity: 4900, description: "", meaning: "", origin: ""},
        baby_names[418] = {name: "Cooper", sex: "M", url: "landingpage.php", popularity: 4803, description: "", meaning: "", origin: ""},
        baby_names[419] = {name: "Lincoln", sex: "M", url: "landingpage.php", popularity: 4785, description: "", meaning: "", origin: ""},
        baby_names[420] = {name: "Xavier", sex: "M", url: "landingpage.php", popularity: 4726, description: "", meaning: "", origin: ""},
        baby_names[421] = {name: "Bentley", sex: "M", url: "landingpage.php", popularity: 4722, description: "", meaning: "", origin: ""},
        baby_names[422] = {name: "Kayden", sex: "N", url: "landingpage.php", popularity: 4691, description: "", meaning: "", origin: ""},
        baby_names[423] = {name: "Carson", sex: "M", url: "landingpage.php", popularity: 4580, description: "", meaning: "", origin: ""},
        baby_names[424] = {name: "Brody", sex: "M", url: "landingpage.php", popularity: 4297, description: "", meaning: "", origin: ""},
        baby_names[425] = {name: "Asher", sex: "M", url: "landingpage.php", popularity: 4279, description: "", meaning: "", origin: ""},
        baby_names[426] = {name: "Nathaniel", sex: "M", url: "landingpage.php", popularity: 4257, description: "", meaning: "", origin: ""},
        baby_names[427] = {name: "Ryder", sex: "M", url: "landingpage.php", popularity: 4073, description: "", meaning: "", origin: ""},
        baby_names[428] = {name: "Justin", sex: "M", url: "landingpage.php", popularity: 3991, description: "", meaning: "", origin: ""},
        baby_names[429] = {name: "Leo", sex: "M", url: "landingpage.php", popularity: 3936, description: "", meaning: "", origin: ""},
        baby_names[430] = {name: "Juan", sex: "M", url: "landingpage.php", popularity: 3887, description: "", meaning: "", origin: ""},
        baby_names[431] = {name: "Luis", sex: "M", url: "landingpage.php", popularity: 3879, description: "", meaning: "", origin: ""},
        baby_names[432] = {name: "Camden", sex: "M", url: "landingpage.php", popularity: 3872, description: "", meaning: "", origin: ""},
        baby_names[433] = {name: "Tristan", sex: "M", url: "landingpage.php", popularity: 3872, description: "", meaning: "", origin: ""},
        baby_names[434] = {name: "Damian", sex: "M", url: "landingpage.php", popularity: 3866, description: "", meaning: "", origin: ""},
        baby_names[435] = {name: "Elias", sex: "M", url: "landingpage.php", popularity: 3751, description: "", meaning: "", origin: ""},
        baby_names[436] = {name: "Vincent", sex: "M", url: "landingpage.php", popularity: 3744, description: "", meaning: "", origin: ""},
        baby_names[437] = {name: "Jase", sex: "M", url: "landingpage.php", popularity: 3719, description: "", meaning: "", origin: ""},
        baby_names[438] = {name: "Mateo", sex: "M", url: "landingpage.php", popularity: 3704, description: "", meaning: "", origin: ""},
        baby_names[439] = {name: "Maxwell", sex: "M", url: "landingpage.php", popularity: 3703, description: "", meaning: "", origin: ""},
        baby_names[440] = {name: "Miles", sex: "M", url: "landingpage.php", popularity: 3639, description: "", meaning: "", origin: ""},
        baby_names[441] = {name: "Micah", sex: "M", url: "landingpage.php", popularity: 3612, description: "", meaning: "", origin: ""},
        baby_names[442] = {name: "Sawyer", sex: "M", url: "landingpage.php", popularity: 3571, description: "", meaning: "", origin: ""},
        baby_names[443] = {name: "Jesus", sex: "M", url: "landingpage.php", popularity: 3504, description: "", meaning: "", origin: ""},
        baby_names[444] = {name: "Max", sex: "M", url: "landingpage.php", popularity: 3468, description: "", meaning: "", origin: ""},
        baby_names[445] = {name: "Roman", sex: "M", url: "landingpage.php", popularity: 3435, description: "", meaning: "", origin: ""},
        baby_names[446] = {name: "Leonardo", sex: "M", url: "landingpage.php", popularity: 3431, description: "", meaning: "", origin: ""},
        baby_names[447] = {name: "Santiago", sex: "M", url: "landingpage.php", popularity: 3417, description: "", meaning: "", origin: ""},
        baby_names[448] = {name: "Cole", sex: "M", url: "landingpage.php", popularity: 3404, description: "", meaning: "", origin: ""},
        baby_names[449] = {name: "Carlos", sex: "M", url: "landingpage.php", popularity: 3402, description: "", meaning: "", origin: ""},
        baby_names[450] = {name: "Bryson", sex: "M", url: "landingpage.php", popularity: 3397, description: "", meaning: "", origin: ""},
        baby_names[451] = {name: "Ezra", sex: "M", url: "landingpage.php", popularity: 3372, description: "", meaning: "", origin: ""},
        baby_names[452] = {name: "Brantley", sex: "M", url: "landingpage.php", popularity: 3322, description: "", meaning: "", origin: ""},
        baby_names[453] = {name: "Braxton", sex: "M", url: "landingpage.php", popularity: 3320, description: "", meaning: "", origin: ""},
        baby_names[454] = {name: "Declan", sex: "M", url: "landingpage.php", popularity: 3299, description: "", meaning: "", origin: ""},
        baby_names[455] = {name: "Eric", sex: "M", url: "landingpage.php", popularity: 3294, description: "", meaning: "", origin: ""},
        baby_names[456] = {name: "Kaiden", sex: "M", url: "landingpage.php", popularity: 3247, description: "", meaning: "", origin: ""},
        baby_names[457] = {name: "Giovanni", sex: "M", url: "landingpage.php", popularity: 3230, description: "", meaning: "", origin: ""},
        baby_names[458] = {name: "Theodore", sex: "M", url: "landingpage.php", popularity: 3191, description: "", meaning: "", origin: ""},
        baby_names[459] = {name: "Harrison", sex: "M", url: "landingpage.php", popularity: 3184, description: "", meaning: "", origin: ""},
        baby_names[460] = {name: "Alex", sex: "M", url: "landingpage.php", popularity: 3159, description: "", meaning: "", origin: ""},
        baby_names[461] = {name: "Diego", sex: "M", url: "landingpage.php", popularity: 3154, description: "", meaning: "", origin: ""},
        baby_names[462] = {name: "Wesley", sex: "M", url: "landingpage.php", popularity: 3112, description: "", meaning: "", origin: ""},
        baby_names[463] = {name: "Bryce", sex: "M", url: "landingpage.php", popularity: 3099, description: "", meaning: "", origin: ""},
        baby_names[464] = {name: "Ivan", sex: "M", url: "landingpage.php", popularity: 3059, description: "", meaning: "", origin: ""},
        baby_names[465] = {name: "Greyson", sex: "M", url: "landingpage.php", popularity: 3022, description: "", meaning: "", origin: ""},
        baby_names[466] = {name: "George", sex: "M", url: "landingpage.php", popularity: 2988, description: "", meaning: "", origin: ""},
        baby_names[467] = {name: "Timothy", sex: "M", url: "landingpage.php", popularity: 2981, description: "", meaning: "", origin: ""},
        baby_names[468] = {name: "Weston", sex: "M", url: "landingpage.php", popularity: 2944, description: "", meaning: "", origin: ""},
        baby_names[469] = {name: "Silas", sex: "M", url: "landingpage.php", popularity: 2900, description: "", meaning: "", origin: ""},
        baby_names[470] = {name: "Jonah", sex: "M", url: "landingpage.php", popularity: 2878, description: "", meaning: "", origin: ""},
        baby_names[471] = {name: "Antonio", sex: "M", url: "landingpage.php", popularity: 2871, description: "", meaning: "", origin: ""},
        baby_names[472] = {name: "Colin", sex: "M", url: "landingpage.php", popularity: 2869, description: "", meaning: "", origin: ""},
        baby_names[473] = {name: "Richard", sex: "M", url: "landingpage.php", popularity: 2857, description: "", meaning: "", origin: ""},
        baby_names[474] = {name: "Hayden", sex: "M", url: "landingpage.php", popularity: 2851, description: "", meaning: "", origin: ""},
        baby_names[475] = {name: "Ashton", sex: "M", url: "landingpage.php", popularity: 2797, description: "", meaning: "", origin: ""},
        baby_names[476] = {name: "Steven", sex: "M", url: "landingpage.php", popularity: 2778, description: "", meaning: "", origin: ""},
        baby_names[477] = {name: "Axel", sex: "M", url: "landingpage.php", popularity: 2777, description: "", meaning: "", origin: ""},
        baby_names[478] = {name: "Miguel", sex: "M", url: "landingpage.php", popularity: 2737, description: "", meaning: "", origin: ""},
        baby_names[479] = {name: "Kaleb", sex: "M", url: "landingpage.php", popularity: 2734, description: "", meaning: "", origin: ""},
        baby_names[480] = {name: "Bryan", sex: "M", url: "landingpage.php", popularity: 2713, description: "", meaning: "", origin: ""},
        baby_names[481] = {name: "Preston", sex: "M", url: "landingpage.php", popularity: 2705, description: "", meaning: "", origin: ""},
        baby_names[482] = {name: "Jayce", sex: "M", url: "landingpage.php", popularity: 2696, description: "", meaning: "", origin: ""},
        baby_names[483] = {name: "Ryker", sex: "M", url: "landingpage.php", popularity: 2666, description: "", meaning: "", origin: ""},
        baby_names[484] = {name: "Victor", sex: "M", url: "landingpage.php", popularity: 2664, description: "", meaning: "", origin: ""},
        baby_names[485] = {name: "Patrick", sex: "M", url: "landingpage.php", popularity: 2658, description: "", meaning: "", origin: ""},
        baby_names[486] = {name: "Joel", sex: "M", url: "landingpage.php", popularity: 2641, description: "", meaning: "", origin: ""},
        baby_names[487] = {name: "Grant", sex: "M", url: "landingpage.php", popularity: 2624, description: "", meaning: "", origin: ""},
        baby_names[488] = {name: "Emmett", sex: "M", url: "landingpage.php", popularity: 2623, description: "", meaning: "", origin: ""},
        baby_names[489] = {name: "Alejandro", sex: "M", url: "landingpage.php", popularity: 2593, description: "", meaning: "", origin: ""},
        baby_names[490] = {name: "Marcus", sex: "M", url: "landingpage.php", popularity: 2592, description: "", meaning: "", origin: ""},
        baby_names[491] = {name: "Jameson", sex: "M", url: "landingpage.php", popularity: 2575, description: "", meaning: "", origin: ""},
        baby_names[492] = {name: "Edward", sex: "M", url: "landingpage.php", popularity: 2567, description: "", meaning: "", origin: ""},
        baby_names[493] = {name: "Kingston", sex: "M", url: "landingpage.php", popularity: 2566, description: "", meaning: "", origin: ""},
        baby_names[494] = {name: "Jude", sex: "M", url: "landingpage.php", popularity: 2564, description: "", meaning: "", origin: ""},
        baby_names[495] = {name: "Maddox", sex: "M", url: "landingpage.php", popularity: 2554, description: "", meaning: "", origin: ""},
        baby_names[496] = {name: "Abel", sex: "M", url: "landingpage.php", popularity: 2551, description: "", meaning: "", origin: ""},
        baby_names[497] = {name: "Emmanuel", sex: "M", url: "landingpage.php", popularity: 2548, description: "", meaning: "", origin: ""},
        baby_names[498] = {name: "Bennett", sex: "M", url: "landingpage.php", popularity: 2525, description: "", meaning: "", origin: ""},
        baby_names[499] = {name: "Everett", sex: "M", url: "landingpage.php", popularity: 2520, description: "", meaning: "", origin: ""},
        baby_names[500] = {name: "Brian", sex: "M", url: "landingpage.php", popularity: 2510, description: "", meaning: "", origin: ""},
        baby_names[501] = {name: "Jeremy", sex: "M", url: "landingpage.php", popularity: 2506, description: "", meaning: "", origin: ""},
        baby_names[502] = {name: "Alan", sex: "M", url: "landingpage.php", popularity: 2490, description: "", meaning: "", origin: ""},
        baby_names[503] = {name: "Kaden", sex: "M", url: "landingpage.php", popularity: 2440, description: "", meaning: "", origin: ""},
        baby_names[504] = {name: "Jaden", sex: "M", url: "landingpage.php", popularity: 2433, description: "", meaning: "", origin: ""},
        baby_names[505] = {name: "Jesse", sex: "N", url: "landingpage.php", popularity: 2424, description: "", meaning: "", origin: ""},
        baby_names[506] = {name: "King", sex: "M", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[507] = {name: "Landry", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[508] = {name: "Azariah", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[509] = {name: "Oakley", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[510] = {name: "Lennon", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[511] = {name: "Armani", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[512] = {name: "Phoenix", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[513] = {name: "Justice", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[514] = {name: "Casey", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[515] = {name: "Emory", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[516] = {name: "Remy", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[517] = {name: "Amari", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[518] = {name: "River", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[519] = {name: "Milan", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[520] = {name: "Tatum", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[521] = {name: "Rowan", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[522] = {name: "Sage", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[523] = {name: "Jamie", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[524] = {name: "Rory", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[525] = {name: "Harley", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[526] = {name: "Leighton", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[527] = {name: "Landry", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[528] = {name: "Dallas", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[529] = {name: "Remington", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[530] = {name: "Kamryn", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[531] = {name: "Elliot", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[532] = {name: "Zion", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[533] = {name: "Rylan", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[534] = {name: "Karter", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""},
        baby_names[535] = {name: "Kai", sex: "N", url: "landingpage.php", popularity: 2418, description: "", meaning: "", origin: ""};

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

function getTop50() {
var sortTop50 = top_50_names(baby_names);
        document.querySelector(".btn_container").innerHTML = sortTop50;
        }

function top_50_names() {
var top_50_names = "";
        var list = "<ul>";
        var headline = document.getElementsByTagName("h1")[0].innerHTML = "Top 50 Baby Names";
        for (var i = 0; i < baby_names.length; i++) {
if ((baby_names[i].popularity) <= 10000) {
top_50_names += '<li><a href="' + baby_names[i].url + '" onclick="getDescription(' + i + ')">' +
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
        return top_50_names;
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
if (selectedBabyName.sex === "G"){
document.getElementsByClassName('button2')[0].innerHTML = "Return to Girl Names";
        document.getElementsByClassName('button2')[0].onclick = getGirlNames;
        }else if (selectedBabyName.sex === "N"){
document.getElementsByClassName('button2')[0].innerHTML = "Return to Gender Neutral Names";
        document.getElementsByClassName('button2')[0].onclick = getGenderNeutral;
        }else if (selectedBabyName.popularity <= 10000){
document.getElementsByClassName('button2')[0].innerHTML = "Return to Top 50 Names";
        document.getElementsByClassName('button2')[0].onclick = getTop50;
        }
document.getElementsByTagName("h1")[0].innerHTML = selectedBabyName.name;
        document.getElementsByClassName('description')[0].innerHTML = selectedBabyName.description;
        document.getElementsByClassName('meaning')[0].innerHTML = selectedBabyName.meaning;
        document.getElementsByClassName('origin')[0].innerHTML = selectedBabyName.origin;
        }

