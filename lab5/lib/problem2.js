function displayStats(n,sum) {
    let avg = (sum/n.length).toFixed(2);
    let max = (Math.max(...n));
    let min = (Math.min(...n));
    alert("For the list: " + n + " the average value is " + avg + " The maximum is " + max + " The minimum is " + min);
}

function readInput() {
    let str_input = prompt("Enter an integer");
    let n = Number(str_input);
    if (isNaN(n) || !Number.isInteger(n)) {
        alert("Please Enter a Valid Integer!");
        return null;
    }
    return n;
}

let stats = [];
let new_stat = readInput();
let sum = 0;

while (new_stat >= 0) {
    if (new_stat != null){
        stats.push(new_stat);
        sum += new_stat;
    }
    new_stat = readInput();
}

if (stats.length > 0) {
    displayStats(stats,sum);
}