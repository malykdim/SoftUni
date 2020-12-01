function solve(input){
    switch (input){
        case 'England': 
        case 'USA': console.log('English'); break;
        case 'Spain': 
        case 'Argentina': 
        case 'Mexico': console.log('Spanish'); break;
        default: console.log('unknown'); break;
    }
}
solve('Germany');//100/100