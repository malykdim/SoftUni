function inventory(input) {
    let inventory = input.shift().split(', ');

    input.forEach(element => {
        if (element === 'Craft!') {
            return;
        }
        let [action, info] = element.split(' - ');
        switch (action) {
            case `Collect`:
                if (inventory.indexOf(info) < 0) {
                    inventory.push(info);
                } 
                break;
            case `Drop`:
                if (inventory.indexOf(info) > -1) {
                    let index = inventory.indexOf(info);
                    inventory.splice(index, 1);
                } 
                break;
            case `Combine Items`:
                let [oldItem, newItem] = info.split(':');
                if (inventory.indexOf(oldItem) > -1) {
                    let indexNew = inventory.indexOf(oldItem )+ 1;
                    inventory.splice(indexNew, 0, newItem);
                }
                break;
            case `Renew`:
                if (inventory.indexOf(info) > -1) {
                    let index = inventory.indexOf(info);
                    let item = inventory.splice(index, 1);
                    inventory.push(item);
                }
                break;
            default: break;
        }
    });
    console.log(inventory.join(', '));
}
// 100/100
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);
inventory(['Iron, Sword', 'Combine Items - Wood:Bow', 'Craft!']);
inventory(['Iron, Wood, Sword', 'Combine Items - Wood:Bow', 'Drop - Bronze', 'Collect - Gold', 'Renew - Iron', 'Craft!']);
