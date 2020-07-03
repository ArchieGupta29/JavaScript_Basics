var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);



/*
variables cannot start with a nuumber or a special symbols except from $ or _ 
Symbols not in the middle also
Cannot use resevered JS keywords for variable names
*/



var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age)

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last nmae?');
console.log(lastName);

var now, yearMark, yearJohn, ageMark, ageJohn;
var now = 2018;
ageMark = 33;
ageJohn = 28;
var yearMark = now-33;
var yearJohn = now - 28;
console.log(yearJohn);
console.log(now * 2);
console.log(now / 2);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Hi');
var teeth;
console.log(typeof teeth);

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x *=2;
console.log(x);

y++;
console.log(y);

var hMark, hJohn, mMark, mJohn;

hJohn = prompt('What is Johns height?');
mJohn = prompt('What is Johns weight?');
hMark = prompt('What is Marks height?');
mMark = prompt('What is Marks weight?');

var bmiMark, bmiJohn;

bmiJohn = mJohn/(hJohn * hJohn);
bmiMark = mMark/(hMark * hMark);

higherBMI = bmiMark > bmiJohn;

console.log('Is Marks BMI higher than Johns? ' + higherBMI);

var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married')
    {
        console.log(firstName + ' is married.');
    } else {
        console.log(firstName + ' is not married');
    }

var isMarried = false;

if (isMarried)
    {
        console.log(firstName + ' is married.');
    } else {
        console.log(firstName + ' is not married');
    }

var firstName = 'john';
var age = 24;

if(age<13){
    console.log(firstName + ' is a boy');
} else if(age>=13 && age<20 ) {
    console.log(firstName + ' is a teenager');
} else if(age>=20 && age<30 ) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}

age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'cop';
switch(job) {
    case 'teacher':
    case 'instructor':
        {
            console.log(firstName + ' teaaches kids how to code');
        }
        break;
    case 'driver':
        {
           console.log(firstName + ' teaaches kids how to drive'); 
        }
        break;
    default:
        {
            console.log(firstName + ' does something else ');
        }
}

switch(true){
    case age<13:
        console.log(firstName + ' is a boy');
        break;
    case age>=13 && age<20:
        console.log(firstName + ' is a teenager');
        break;
    case age>=20 && age<30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');        
}

var height;

if (height || height === 0){ 
    console.log('Variable is been defined');
} else {
    console.log('Variable is not defined')
}

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement>0){
      console.log(firstName + 'retires in'+retirement+'years');  
    } else {
        console.log(firstName + 'is already retired');
    }
}

yearsUntilRetirement(1990, 'john');