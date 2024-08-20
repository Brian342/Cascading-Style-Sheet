/*Switch = can  be an efficient replacement to many else if statements */

let textScore = 92;
let letterGrade;

switch(true){
        case textScore >= 90:
                letterGrade = "A";
                break;
        case textScore >= 80:
                letterGrade = "B";
                break;
        case textScore >= 70:
                letterGrade = "C";
                break;
        case textScore >= 60:
                letterGrade = "D";
                break;
        case textScore >= 50:
                letterGrade = "E";
                break;
        default:
                letterGrade = "F";
                break;
        
}
console.log(letterGrade); // Output: A