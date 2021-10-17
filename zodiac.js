var name, bdate, new_date, date, month_num, year, zodiac_sign, signs, ruling_planet, birth_stones, quality, other_name, img;
let month, key;

function calculateRashi() {
    try {

        //to stop page to refresh on submit button click
        var form = document.getElementById("myForm");
        function handleForm(event) { event.preventDefault(); }
        form.addEventListener('submit', handleForm);

        //getting the data from input into variables
        name = document.getElementById("fname").value.trim();
        bdate = document.getElementById("bdate").value;
        new_date = new Date(bdate);
        date = new_date.getDate();
        month_num = new_date.getMonth() + 1;
        year = new_date.getFullYear();

        //validating if name and date is entered
        if (name == "" || name == null || bdate == "" || new_date == null) {
            alert("name and date must be filled out");
            return false;
        }

        //validating if name does not contain any special charcters
        var special_char = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "^", "~", "@", "#", "$", "%", "^", "*", "_", "=", ";", ":", ",", "<", ">"]
        for (let i = 0; i < special_char.length; i++) {
            for (let j = 0; j < name.length; j++) {
                if (name[j] == special_char[i]) {
                    window.alert("There should not be special characters in the first name")
                    break;
                }
            }
        }

        //getting month name from month number
        switch (month_num) {
            case 1:
                month = "January";
                break;
            case 2:
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4:
                month = "April";
                break;
            case 5:
                month = "May";
                break;
            case 6:
                month = "June";
                break;
            case 7:
                month = "July";
                break;
            case 8:
                month = "August";
                break;
            case 9:
                month = "September";
                break;
            case 10:
                month = "October";
                break;
            case 11:
                month = "November";
                break;
            case 12:
                month = "December";
                break;
        }

        //defining the zodaic signs
        signs = new Map([
            [1, "Aries"], [2, "Taurus"], [3, "Gemini"], [4, "Cancer"], [5, "Leo"], [6, "Virgo"], [7, "Libra"], [8, "Scorpio"],
            [9, "Sagittarius"], [10, "Capricorn"], [11, "Aquarius"], [12, "Pisces"]
        ]);

        //assigning the key based on the birth month and birth date 
        if (month == "January") {
            if (date >= 1 && date <= 19) {
                key = 10;
            } else {
                key = 11;
            }
        } else if (month == "February") {
            if (date >= 1 && date <= 18) {
                key = 11;
            } else {
                key = 12;
            }
        } else if (month == "March") {
            if (date >= 1 && date <= 20) {
                key = 12;
            } else {
                key = 1;
            }
        } else if (month == "April") {
            if (date >= 1 && date <= 19) {
                key = 1;
            } else {
                key = 2;
            }
        } else if (month == "May") {
            if (date >= 1 && date <= 20) {
                key = 2;
            } else {
                key = 3;
            }
        } else if (month == "June") {
            if (date >= 1 && date <= 20) {
                key = 3;
            } else {
                key = 4;
            }
        } else if (month == "July") {
            if (date >= 1 && date <= 22) {
                key = 4;
            } else {
                key = 5;
            }
        } else if (month == "August") {
            if (date >= 1 && date <= 22) {
                key = 5;
            } else {
                key = 6;
            }
        } else if (month == "September") {
            if (date >= 1 && date <= 21) {
                key = 6;
            } else {
                key = 7;
            }
        } else if (month == "October") {
            if (date >= 1 && date <= 22) {
                key = 7;
            } else {
                key = 8;
            }
        } else if (month == "November") {
            if (date >= 1 && date <= 21) {
                key = 8;
            } else {
                key = 9;
            }
        } else if (month == "December") {
            if (date >= 1 && date <= 21) {
                key = 9;
            } else {
                key = 10;
            }
        }

        //getting the zodaic sign of the user from the key defined in the above block
        zodiac_sign = signs.get(key);

        //calling the display function to view the data
        viewRashi();

        //disabling the input fields, labels & submit button
        document.getElementById("block1").style.display = "none";

        //enabling the try again button 
        document.getElementById("tryAgain").style.display = "block";

        //enabling the exit button 
        document.getElementById("exit").style.display = "block";

        //window.alert(zodiac_sign);
        //window.open('display.html");
        //window.alert("Hello " + name +" your birth date is " + date+"/"+month+"/"+year);
        //window.alert();

    } catch (error) {
        window.alert(error)
    }
}

function viewRashi() {

     //enabling the card id
     document.getElementById("card").style.display = "block";

    img = document.createElement("img");
    if (zodiac_sign == "Aries") {
        img.src = "./Aries.png";
    } else if (zodiac_sign == "Taurus") {
        img.src = "./Taurus.png";
    } else if (zodiac_sign == "Gemini") {
        img.src = "./Gemini.png";
    } else if (zodiac_sign == "Cancer") {
        img.src = "./Cancer.png";
    } else if (zodiac_sign == "Leo") {
        img.src = "./Leo.png";
    } else if (zodiac_sign == "Virgo") {
        img.src = "./Virgo.png";
    } else if (zodiac_sign == "Libra") {
        img.src = "./Libra.png";
    } else if (zodiac_sign == "Scorpio") {
        img.src = "./Scorpio.png";
    } else if (zodiac_sign == "Sagittarius") {
        img.src = "./Scorpio.png";
    } else if (zodiac_sign == "Capricorn") {
        img.src = "./Capricorn.png";
    } else if (zodiac_sign == "Aquarius") {
        img.src = "./Aquarius.png";
    } else if (zodiac_sign == "Pisces") {
        img.src = "./Pisces.png";
    }

    ruling_planet = new Map([
        ["Aries", "Mars"], ["Taurus", "Venus"], ["Gemini", "Mercury"], ["Cancer", "Moon"], ["Leo", "Sun"], ["Virgo", "Mercury"], ["Libra", "Venus"],
        ["Scorpio", "Pluto & Mars"], ["Sagittarius", "Jupiter"], ["Capricorn", "Saturn"], ["Aquarius", "Uranus"], ["Pisces", "Neptune"]
    ]);

    birth_stones = new Map([
        ["Aries", "BloodStone"], ["Taurus", "Sapphire"], ["Gemini", "Agate"], ["Cancer", "Emerald"], ["Leo", "Onyx"], ["Virgo", "Carnelian"], ["Libra", "Chrysolite"],
        ["Scorpio", "Beryl"], ["Sagittarius", "Citrine"], ["Capricorn", "Ruby"], ["Aquarius", "Garnet"], ["Pisces", "Amethyst"]
    ]);

    quality = new Map([
        ["Aries", ["Ambitious", " Independent", " Impatient"]],
        ["Taurus", ["Dependable", " Musical", " Practical"]],
        ["Gemini", ["Curious", " Affectionate", " Kind"]],
        ["Cancer", ["Intuitive", " Emotional", " Intelligent", " Passionate"]],
        ["Leo", ["Proud", " Bold", " Ambitious"]],
        ["Virgo", ["Graceful", " Organized", " Kind"]],
        ["Libra", ["Diplomatic", " Artistic", " Intelligent"]],
        ["Scorpio", ["Seductive", " Passionate", " Independent"]],
        ["Sagittarius", ["Adventurous", " Creative", " Strong Willed"]],
        ["Capricorn", ["Detail-Oriented", " Intelligent", " Hardworking"]],
        ["Aquarius", ["Imaginative", " Idealistic", " Intuitive"]],
        ["Pisces", ["Creative", " Sensitive", " Artistic"]]
    ]);

    other_name = new Map([
        ["Aries", "THE RAM"], ["Taurus", "BULL"], ["Gemini", "TWINS "], ["Cancer", "CRAB "], ["Leo", "THE LION"], ["Virgo", "THE VIRGIN"], ["Libra", "THE SCALES"],
        ["Scorpio", "THE SCORPION"], ["Sagittarius", "THE ARCHER"], ["Capricorn", "THE GOAT"], ["Aquarius", "WATER BEARER"], ["Pisces", "FISH"]
    ]);


    element = new Map([
        ["Aries", "Fire"], ["Taurus", "Earth"], ["Gemini", "Air"], ["Cancer", "Water"], ["Leo", "Fire"], ["Virgo", "Earth"], ["Libra", "Air"],
        ["Scorpio", "Water"], ["Sagittarius", "Fire"], ["Capricorn", "Earth"], ["Aquarius", "Air"], ["Pisces", "Water"]
    ]);
    document.getElementById("info").innerHTML = "Your Zodiac Details are"
    document.getElementById("displayName").innerHTML = "Name: " + name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("displaySign").innerHTML = "Sunsign: " + zodiac_sign + " | " + other_name.get(zodiac_sign);
    document.getElementById("displayImage").appendChild(img);
    document.getElementById("traits").innerHTML = "Traits: ";
    document.getElementById("1").innerHTML = "1.Ruling Planet - " + ruling_planet.get(zodiac_sign);
    document.getElementById("2").innerHTML = "2.Birth Stone - " + birth_stones.get(zodiac_sign);
    document.getElementById("3").innerHTML = "3.Qualities - " + quality.get(zodiac_sign);
    document.getElementById("4").innerHTML = "4.Elemnet - " + element.get(zodiac_sign);
    document.getElementById("greeting").innerHTML = "Thank You!!";

}

function tryAgain() {
    try {

        //clearing the previous input data
        document.getElementById("fname").value = "";
        document.getElementById("bdate").value = "";

        //
        document.getElementById("displayImage").removeChild(img);

        //enabling the input fields, labels & submit button inside the myForm id
        document.getElementById("block1").style.display = "block";

        //disabling the card id
        document.getElementById("card").style.display = "none";

        //disabling itself
        document.getElementById("tryAgain").style.display = "none";

        //disabling the exit button 
        document.getElementById("exit").style.display = "none";
    } catch (error) {
        window.alert(error);
    }

}
