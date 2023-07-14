// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's and return the filtered array
export function myfilter() {

	let filteredArr = inventors.filter((each) => {
		if(each.year >= 1500 && each.year < 1600){
			// let name = each.first + " " + each.last;
			return each;
		}
	})

    console.log("filtered Array = ", filteredArr);
	return filteredArr;
}

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names (i.e. full name)
// Ex: For the first inventor the full name will be 'Albert Einstein'
export function map() {

	let mapArr = inventors.map((each) => {
		let name = each.first + " " + each.last;
		return name;
	})

    console.log("map Array = ", mapArr);
	return mapArr;
}


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest and return the sorted array
export function sort() {
	inventors.sort((a,b) => a.year - b.year);

    console.log("sort Array = ", inventors);
	return inventors;
}


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// Return the total number of years all the inventors lived
export function reduce() {

	let sum = inventors.reduce((accumulator, current) => {
		let diff = current.passed - current.year;
        accumulator = accumulator + diff;
        return accumulator;
	}, 0)

    console.log("sum : ",sum)
	return sum;
}

// 5. Sort the inventors by years lived and return the sorted array
export function sortbylived() {

	const compare = (a,b) => {
        let diffA = a.passed - a.year;
        let diffB = b.passed - b.year;

        if(diffA > diffB){
            return -1;
        }else if(diffA < diffB){
            return 1;
        }else{
            return 0;
        }
    }

    inventors.sort(compare);

    console.log("diffSort : ", inventors);
    return inventors
}

// 6. sort Exercise
// Sort the people alphabetically by last name and return the sorted array
export function sortByLastName() {

	const compare = (a,b) => {
        let cur = a.split(",")[1];
        let next = b.split(",")[1];

        if(cur < next){
            return -1
        }else if(cur > next){
            return 1;
        }else{
            return 0;
        }
    }
    people.sort(compare);

    console.log(people);
    return people;
}

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

export function reducedSum() {
    // Return an object containing transports as key and its number of occurances as the key's value

	 let obj = {
        car: "",
        truck: "",
        bike: "",
        walk: "",
        van: "",
        pogostick: "",
    }

    let car = 0;
    let truck = 0;
    let bike = 0;
    let walk = 0;
    let van = 0;
    let pogostick = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i] === "car"){
            car = car + 1;
        }else if(data[i] === "truck"){
            truck = truck + 1;
        }else if(data[i] === "bike"){
            bike = bike + 1;
        }else if(data[i] === "walk"){
            walk = walk + 1;
        }else if(data[i] === "van"){
            van = van + 1;
        }else{
            pogostick = pogostick + 1;
        }
    }

    obj.car = car;
    obj.truck = truck;
    obj.bike = bike;
    obj.walk = walk;
    obj.van = van;
    obj.pogostick = pogostick;

    console.log("obj = ", obj);
    return obj;
}
