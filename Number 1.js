const bloodtype = ["A-", "A+", "B-", "B+", "AB-", "AB+", "O-", "O+"]

function canGiveBlood(dblood, rblood){
    if (dblood == dblood.toLowerCase() || rblood == rblood.toLowerCase()) {
    console.log("Please enter the blood type in all capital letter!");
    }
    
    else if (bloodtype.includes(dblood) == false) {
        console.log("Invalid Blood Type!")
    }

    else if (bloodtype.includes(rblood) == false) {
        console.log("Invalid Blood Type!")
    }

    else if (dblood == "A-"){
        if (rblood == "A-" || rblood == "A+" || rblood == "AB-" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "A+") {
        if (rblood == "A+" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "B-") {
        if (rblood == "B-" || rblood == "B+" || rblood == "AB-" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "B+") {
        if (rblood == "B+" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "AB-") {
        if (rblood == "AB-" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "AB+") {
        if (rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "O-") {
        if (rblood == "O-" || rblood == "O+" || rblood == "A-" || rblood == "A+" || rblood == "B-" || rblood == "B+" || rblood == "AB-" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }

    else if (dblood == "O+") {
        if (rblood == "O+" || rblood == "A+" || rblood == "B+" || rblood == "AB+") {
            console.log("True");
        }
        else {
            console.log("False");
        }
    }
}

canGiveBlood("O+", "A+")
canGiveBlood("A-", "B-")
canGiveBlood("A-", "AB+")