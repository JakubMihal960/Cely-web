const vaha = prompt("zadaj vahu v kg");
const vyska = prompt("zadaj vysku v metroch");
console.log(vaha);
console.log(vyska);
console.log(vyska + vaha);
cost bmi = vaha / vyska*vyska;

console.log(bmi);

if (bmi < 18.5){
    console.log("Podváha");
} else if (bmi >= 18.5 && bmi < 25){
    console.log("normalna vaha");
} else if (bmi >=25 && bmi < 30){
    console.log("nadváha");
} else if (bmi >= 30 && bmi < 40){
    console.log("obezita");
};

