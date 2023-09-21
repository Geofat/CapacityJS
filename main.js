var Name = "Joab"
var WeightInKG ="65" 
const AboutMe = (Name,WeightInPounds) => {
    let bio = yourName + WeightInPounds ;
    return bio
}
const yourName = prompt("enter your name")
const yourWeightInKG = parseFloat(prompt("enter your weight in KG"))
 alert(AboutMe(Name,yourWeightInKG * 2.20462));

