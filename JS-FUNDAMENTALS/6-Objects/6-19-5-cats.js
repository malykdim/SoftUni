function cats(arrCats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }

    for (let cat of arrCats) {
        let [catName, catAge] = cat.split(' ');
        let caT = new Cat(catName, catAge);
        caT.meow();
    }
}

// 100/100

cats(['Mellow 2', 'Tom 5']);
