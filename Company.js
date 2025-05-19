// function bubblesort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function reverseBubblesort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//-------------------REPLACED WITH SORT()--------------

let companies = [
  {
    name: "Huge Corporate LTD",
    numberOfEmployees: 10000,
    ceo: [
      {
        ceoName: "Christina",
        ceoAge: 45,
        ceoGender: "female",
      },
    ],
    rating: 4.1,
    price: 5000,
  },
  //---------------------------------
  {
    name: "Decent MidCompany",
    numberOfEmployees: 65,
    ceo: [
      {
        ceoName: "Eddy",
        ceoAge: 38,
        ceoGender: "male",
      },
    ],
    rating: 3.9,
    price: 4200,
  },
  //---------------------------------
  {
    name: "Whatever Small Company",
    numberOfEmployees: 15,
    ceo: [
      {
        ceoName: "Jack",
        ceoAge: 59,
        ceoGender: "male",
      },
    ],
    rating: 3.2,
    price: 2500,
  },
  //---------------------------------
  {
    name: "Bad Quality Big Co.",
    numberOfEmployees: 850,
    ceo: [
      {
        ceoName: "Vicky",
        ceoAge: 31,
        ceoGender: "female",
      },
    ],
    rating: 2.1,
    price: 3000,
  },
  //---------------------------------
  {
    name: "Ivanov Promising StartUp",
    numberOfEmployees: 6,
    ceo: [
      {
        ceoName: "Fiona",
        ceoAge: 21,
        ceoGender: "female",
      },
      {
        ceoName: "Ivan",
        ceoAge: 19,
        ceoGender: "male",
      },
    ],
    rating: 4.7,
    price: 1800,
  },
];

console.log(companies);

// Filter -> Employees
let employeesNr = [];
for (let i = 0; i < companies.length; i++) {
  employeesNr.push(companies[i].numberOfEmployees);
}

console.log("Employees Number:", employeesNr);
// Asc
let sortedEmployeesAsc = [...employeesNr].sort((a, b) => a - b);
console.log("Sorted Employees (Ascending):", sortedEmployeesAsc);

// Desc
let sortedEmployeesDesc = [...employeesNr].sort((a, b) => b - a);
console.log("Sorted Employees (Descending):", sortedEmployeesDesc);

// Filter -> Rating
let ratingScore = [];
for (let i = 0; i < companies.length; i++) {
  ratingScore.push(companies[i].rating);
}

console.log("Ratings displayed as is", ratingScore);
// Asc
let sortedRatingAsc = [...ratingScore].sort((a, b) => a - b);
console.log("Sorted Ratings (Ascending):", sortedRatingAsc);

// Desc
let sortedRatingDesc = [...ratingScore].sort((a, b) => b - a);
console.log("Sorted Ratings (Descending):", sortedRatingDesc);

// Filter -> Pricing
let pricingDiff = [];
for (let i = 0; i < companies.length; i++) {
  pricingDiff.push(companies[i].price);
}
console.log("Pricing displayed as is", pricingDiff);
// Asc
let sortedPriceAsc = [...pricingDiff].sort((a, b) => a - b);
console.log("Sorted Pricing (Ascending):", sortedPriceAsc);

// Desc
let sortedPriceDesc = [...pricingDiff].sort((a, b) => b - a);
console.log("Sorted Pricing (Descending):", sortedPriceDesc);

// Filter -> CEO[age, gender]

//          Filter -> Ceo age

console.log("CEO Ages for each company:", allCeoAges);

// Asc
let sortedCeoAgesAsc = [...allCeoAges].sort((a, b) => a - b);
console.log("Sorted CEO Ages (Ascending):", sortedCeoAgesAsc);

// Desc
let sortedCeoAgesDesc = [...allCeoAges].sort((a, b) => b - a);
console.log("Sorted CEO Ages (Descending):", sortedCeoAgesDesc);

//                  Ivanov avg age case
let ivanovCompany;
for (let i = 0; i < companies.length; i++) {
  if (companies[i].name === "Ivanov Promising StartUp") {
    ivanovCompany = companies[i];
    break; // stop loop as we found company!!
  }
}

let ivanovsFused = ivanovCompany.ceo;

//                  age calculator
let ivanovTotalAge = 0;
let ivanovAvgAge = 0;

for (let i = 0; i < ivanovsFused.length; i++) {
  ivanovTotalAge = ivanovTotalAge + ivanovsFused[i].ceoAge; // Summing ages of CEOs at Ivanov company
}

ivanovAvgAge = ivanovTotalAge / ivanovsFused.length; // leaves room for a 3rd CEO Ivanov to pop anytime

let allCeoAges = [];

//                  Calculate CEO ages for other companies (excluding Ivanov)
for (let i = 0; i < companies.length; i++) {
  if (companies[i].name !== "Ivanov Promising StartUp" && companies[i].ceo) {
    for (let j = 0; j < companies[i].ceo.length; j++) {
      allCeoAges.push(companies[i].ceo[j].ceoAge);
    }
  }
}

//              push to allCeoAges as a unique ceoAge
allCeoAges.push(ivanovAvgAge); // Add the average CEO age of Ivanov company

console.log("CEO Ages for each company:", allCeoAges);
console.log("Sorted CEO Ages (Ascending):", bubblesort(allCeoAges));
console.log("Sorted CEO Ages (Descending):", reverseBubblesort(allCeoAges));

// Filter -> Ceo Gender

let genders = [];
for (let i = 0; i < companies.length; i++) {
  if (companies[i].ceo) {
    for (let j = 0; j < companies[i].ceo.length; j++) {
      genders.push(companies[i].ceo[j].ceoGender);
    }
  }
}

let sortedGendersAsc = [...genders].sort(); // AB order
let sortedGendersDesc = [...genders].sort().reverse(); // BA order

console.log("Genders Sorted Ascending:", sortedGendersAsc);
console.log("Genders Sorted Descending:", sortedGendersDesc);
