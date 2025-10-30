// display odd numbers

for (let i = 1; i <=5; i++) {
    //skip the iteration if 1 is even
    if (i % 2  === 0){
        continue;
    }
    console.log(i);
}

//Output:
//1
//3
//5


for (let i = 1; i <= 10; ++i) {

    //skip iteration if value of
    //i is between 4 and 9
    if (i > 4 && i < 9) {
        continue;
    }
    console.log(i);
}

var num = 1;

while (num <= 10) {

    //skip iteration if num si even
    if (num % 2 === 0) {
        ++num;
        continue;
    }

    console.log(num);
    ++num;
}