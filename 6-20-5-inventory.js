function inventory(arr) {
    class Hero {
        constructor(name, lvl, items) {
            this.name = name;
            this.lvl = Number(lvl);
            this.items = items;
        }
    }

    let heroes = [];
    for (let i of arr) {
        let line = i.split(' / ');
        let [name, lvl, items] = line;
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        let hero = new Hero(name, lvl, items);
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.lvl - b.lvl)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.lvl}`);
            console.log(`items => ${hero.items}`);
    });
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])