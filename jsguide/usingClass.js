// i can create a class using the constructor, like this, but with this way i'll create a array
class MyColor{
    constructor(...value){
        this.value = value;
    }
}

const myColor = new MyColor(1, 2, 3);
// console.log(myColor.value[0]);

// or i can create a class using constructor, like this, this will create 'variables' for me in a object
class MyColor2 {
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

const myColor2 = new MyColor2(20, 382, 123);
// console.log(myColor2);

class Color{
    constructor(...values){

        this.values = values;

        this.getRed = () => {
            return this.values[0];
        }
    }
}

const color = new Color(10, 22, 19);
// console.log(color.getRed());


// how you can see, in the final of this code, i could change the value of the index 0
class GetAndSetColor{
    constructor(...values){
        this.values = values
    }

    get red(){
        return this[0];
    }

    set red(value){
        this[0] = value
    }
}

const getAndSetColor = new GetAndSetColor(19, 0, 0);
getAndSetColor.values[0] = 21;
// console.log(getAndSetColor.values[0]);


// for have a effect of readOnly, i can do like this;
class Color10 {
    constructor(r, g, b) {
      this.values = [r, g, b];
    }
    get red() {
      return this.values[0];
    }
  }
  
  const red = new Color10(255, 0, 0);
  red.red = 0;
  console.log(red.red); // 255