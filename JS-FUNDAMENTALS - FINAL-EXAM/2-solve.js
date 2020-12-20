function solve(arr) {
    let n = arr.shift();
    let pattern = /(\|[A-Z]{4,}\|):(#[A-Za-z]+ [A-Za-z]+#)/g;

    for (let line of arr) {
        let matches = [...line.matchAll(pattern)][0];
        if (matches) {
            let boss = matches[1].split('|');
            let title = matches[2].split('#');
            console.log(`${boss[1]}, The ${title[1]}\n>> Strength: ${boss[1].length}\n>> Armour: ${title[1].length}`);
        } else {
            console.log('Access denied!')
        }
    }
}

// 100/100

// solve(
//     [
//         '3',
//         '|GEORGI|:#Lead architect#',
//         '|Hristo|:#High Overseer#',
//         '|STEFAN|:#Assistant Game Developer#'
//     ]
// );

solve(
    [
        '3',
        '|PETER|:#H1gh Overseer#',
        '|IVAN|:#Master detective#',
        '|KARL|: #Marketing lead#'
    ]
);
