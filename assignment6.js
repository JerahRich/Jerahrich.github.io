const Lucas = {
    name: "Lucas",
    job: "Software Developer",
    address: "123 Main St",
    email: "lucas@example.com",
    height: 175, // Height in centimeters
    nationality: "American",
    favoriteColor: "Blue",
  };
  
  function calculateRetirement() {
    const name = Lucas.name;
  const birthYearInput = document.getElementById("birthYearInput").value;
  const birthYear = parseInt(birthYearInput);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const retirementAge = 65;
  let yearsLeft;

  if (!/^\d*$/.test(birthYearInput)) {
    alert("Please input a valid birth year (numbers only).");
    return;

  }

  if (age < 16) {
    document.getElementById("retirementMessage").textContent = `${name} is ${age} years old and hasn't started working.`;
  } else if (age < retirementAge) {
    yearsLeft = retirementAge - age;
    document.getElementById("retirementMessage").textContent = `${name} is ${age} years old and has ${yearsLeft} years left till retirement.`;
  } else {
    const yearsRetired = age - retirementAge;
    document.getElementById("retirementMessage").textContent = `${name} is ${age} years old and has been retired for ${yearsRetired} years.`;
  }
}

const mass = [70, 85, 75];
const height = [1.75, 1.80, 1.70];
const names = ['Mark', 'John', 'Lucas'];
const bmiResults = [];

function calculateBMI(name, mass, height) {
    const bmi = mass / (height * height);
    let result;
  
    if (bmi < 18.5) {
      result = `${name}'s BMI is ${bmi.toFixed(2)}. You are underweight based on the body fat indicator. It is recommended to check more details with a doctor.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result = `${name}'s BMI is ${bmi.toFixed(2)}. Congrats! Your body weight is ideal.`;
    } else if (bmi >= 25 && bmi < 29.9) {
      result = `${name}'s BMI is ${bmi.toFixed(2)}. You are overweight based on our body fat indicator. It is recommended to get advice from a doctor.`;
    } else {
      result = `${name}'s BMI is ${bmi.toFixed(2)}. You are obese based on our body fat indicator. Please see a doctor!!`;
    }
  
    bmiResults.push(result);
  }
  
  function showBMIPopup(personName) {
    const personIndex = names.indexOf(personName);
    if (personIndex !== -1) {
      const bmi = bmiResults[personIndex];
      alert(bmi);
    }
  }
 
  for (let i = 0; i < names.length; i++) {
    calculateBMI(names[i], mass[i], height[i]);
  }
  
  for (let i = 0; i < bmiResults.length; i++) {
    console.log(bmiResults[i]);
  }
  


