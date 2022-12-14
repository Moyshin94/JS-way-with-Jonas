"use strict";
//functin declaratiin
// function percentageOfWorld1 (population) {
//    return (population / 7900) * 100;
// }
// const china = percentageOfWorld1 (1441);
// const ukraine = percentageOfWorld1 (47);
// const poland = percentageOfWorld1 (100);
// console. log (china, ukraine, poland);

//function expression
// const percentageOfWorld2 = function percentageOfWorld1 (population) {
//     return (population / 7900) * 100;
//  }
// const england1 = percentageOfWorld2 (80);
// const ukraine1 = percentageOfWorld2 (47);
// const poland1 = percentageOfWorld2 (56);
// console. log (england1, ukraine1, poland1);

// arrow functoion
// const percentageOfWorld3 = population => (population / 7900) * 100;
// const england3 = percentageOfWorld3 (80);
// const ukraine3 = percentageOfWorld3 (47);
// const poland3 = percentageOfWorld3 (56);
// console. log (england3, ukraine3, poland3);

// population >= 33 ? console. log (`Ukranian population is abobe average`)
// : console. log (`Ukranian population is beolw average`);

// console. log (`${country} 'population is' ${population > 33 ?
// 'above' : 'bellow'} average`);

// LECTURE: Functions Calling Other Functions
// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1 (population);
//     const description = `${country} has ${population} million people,
// which is about ${percentage} of the world.`;
// console. log (description);
// };
// describePopulation ('England', 80);
// describePopulation ('Eng', 50);

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// console.log(description);
//     };
//     describePopulation('Portugal', 10);
//     describePopulation('China', 1441);
//     describePopulation('USA', 332);

// remember  2-ry
// my
// function describeCountry (country, population, capitalCity) {
//     const text = `${country} has ${population} million people and its capital city is ${capitalCity}`
//     // console. log (text);
//     return text;
// }
// console. log (describeCountry ('Ukraine', 30, 'Kiyv'));
// console. log (describeCountry ('Poland', 29, 'Warshaw'));
// console. log (describeCountry ('England', 40, 'London'));

// // Jonas
// function describeCountryJonas (country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }
//     const descUkraine = describeCountryJonas ('Ukraine', 30, 'Kiyv');
//     const descPoland = describeCountryJonas ('Polands', 29, 'Warshaw');
//     const descEngland = describeCountryJonas ('England', 40, 'London');
//     console. log (descUkraine, descPoland, descEngland);

//    function percentageOfWorld (population) {
//     return (population / 7900) * 100;
//     }

// const prUkraine = percentageOfWorld(40);
// const prPoland = percentageOfWorld (30);
// const prEngland = percentageOfWorld (20);
// console. log (prUkraine, prPoland, prEngland);

// const percentageOfWorld1 = function (population){
//     return (population / 7900) * 100;
// }
// const prUkraine1 = percentageOfWorld1 (46);
// const prPoland1 = percentageOfWorld1 (41);
// const prEngland1 = percentageOfWorld1 (39);
// console. log (prUkraine1, prPoland1, prEngland1);
// arrow
// const  percentageOfWorld2 = population => (population / 7900) * 100;
// const prUkraine2 = percentageOfWorld2 (460);
// const prPoland2 = percentageOfWorld2 (410);
// const prEngland2 = percentageOfWorld2 (390);
// console. log (prUkraine2, prPoland2, prEngland2);

//     const describePopulation = function (country, population) {
//         const percenage = percentageOfWorld1 (population)
//         const description = `${country} has ${population} million people, which is about ${percenage} of the world.`;
//         console. log (description);
//     };
//     describePopulation ('Ukraine', 460);

// // hot key 1. opt + up 2. com + d

// // const percent = [ ];

// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
//  const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
//   ];
//   console.log(percentages);

// const neighbours = ['Poland', 'Moldowa', 'Roman', 'Slowaky'];
// neighbours. push ('Utopia');

// console. log (neighbours);

// neighbours. pop ();
// console. log (neighbours);

// if (!neighbours. includes ('Germany')) {
//     console. log (`Probably not a central European country`);
// }

//  neighbours[neighbours. indexOf ('Moldowa')] = 'Rebublik Moldowa';
// console. log (neighbours);

// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kiyv',
//     language: 'Ukranian',
//     population: 46,
//     neighbours: ['Poland', 'Moldowa', 'Roman', 'Slowaky']
// };
// console. log (myCountry);

// console. log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, 3 neighbouring
// countries and a capital called ${myCountry.neighbours}`);

// myCountry.population += 2;
// console. log (myCountry.population);

// myCountry['population'] -= 2
// console. log (myCountry.population);

///////// methods

// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kiyv',
//     language: 'Ukranian',
//     population: 46,
//     neighbours: ['Poland', 'Moldowa', 'Roman', 'Slowaky'],
//     describe: function (){ console. log (`${this.country} has ${this.population} million ${this.language}-
//     speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     ); },
//     checkIsIsland: function (){
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };
// myCountry.describe();
// myCountry.checkIsIsland();
// // console. log (myCountry);

// for (let vote = 1; vote <=50; vote ++) {
//     console. log (`vote Number ${vote} is curantly voating`)
// }

///////////  looping arrays, breaking, coutinuing
// const populations = [10, 1441, 332, 83];
// const percentages = [];
//   for (let i=0; i < populations.length; i++) {
// const perc = percentageOfWorld1 (populations[i]);
// percentages.push(perc);
//   }
//   console. log (percentages);

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Denmark']
// ];

// for (let i = 0; i < listOfNeighbours. length; i ++)
// // for (let y = 0; y < listOfNeighbours[i]. length; y++)
// console. log (`neighbour: ${listOfNeighbours[i]}`);

// const listOfNeighbours = [ ['Canada', 'Mexico'], ['Spain'],
// ['Norway', 'Sweden', 'Denmark'],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
// for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);


//sololearn

var i = 0; // dont understand
for (; i <= 20; i += 2) {
  console.log(i);
  i++;
}

// The snail climbs up 7 feet each day and slips back 2 feet each night. 
// How many days will it take the snail to get out of a well with the given depth?

// Sample Input: 
// 31

// Sample Output:
// 6

// Explanation: Let's break down the distance the snail covers each day:
// Day 1: 7-2=5
// Day 2: 5+7-2=10
// Day 3: 10+7-2=15
// Day 4: 15+7-2=20
// Day 5: 20+7-2=25
// Day 6: 25+7=32 
// So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.

for (dis=7,day=1;dis<depth;dis+=7,day++){
    dis=dis-2;
}
console.log (day)

}