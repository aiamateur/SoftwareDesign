class Address{
  constructor(zipcode, street){
    this.zipcode = zipcode;
    this.street = street;
  }
}

class User{
  constructor(name, age, phone, address){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

/*If we want to build a User object with only name and address we would have to do 
the following:
const address = new Address(1, "Main");
const user = new User("A1", undefined, undefined, address);
Notice how the large number of parameters used for user object makes it inconvenient 
to build an object with fewer parameters. we have to be careful to pass undefined when
a field is unavaible/unnecessary for some reason. 
How do we solve this problem: Enter Builder Pattern
We first solve it using the classic object oriented way then the Javascript way*/
/*class UserBasic{
  constructor(name){
    this.name = name;
  }
}*/

class UserBuilderClassic{
  /*constructor(user){
    this.user = new UserBasic(user);
  }*/
  constructor(name){
    this.name = name;
  }
  
  setAge(age){
    this.age = age;
    return this;
  }
  
  setPhone(phone){
    this.phone = phone;
    return this;
  }
  
  setAddress({zipcode, street}){
    this.address = {zipcode: zipcode, street : street};
    return this;
  }
  
  build() {
    return this;
  }
}

const user1 = new UserBuilderClassic("A1").setAddress({zipcode : 1, street : "Main"}).build();
console.log(user1);

const user2 = new UserBuilderClassic("A2").setPhone(111).setAge(20);
console.log(user2);

/*Javascript Solutionto Bulder Pattern problem */

class UserBuilderJS {
  constructor(name, {age, phone, address}){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
  
}

const user3 = new UserBuilderJS("A3", {age : 30});
console.log(user3);
