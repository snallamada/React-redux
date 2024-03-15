class Person {
    constructor(name, age, children){
        this.name = name;
        this.age = age;
        this.children = children;
    }
 speak(){
    console.log(`my name is ${this.name}, my age ${this.age}`)
 }
 birth(child){
    this.children.push(child);
    return this.children;
 }
}
const shravan = new Person ('shravan' , 30 , ['raja' , 'dinesh'])
shravan.speak();
shravan.birth('jagan');

// spread oparator
const arr1 = ['name1', 'name2', 'name3']
const arr2 = ['name4', 'name5']
const result = [ ...arr1 , ...arr2]
