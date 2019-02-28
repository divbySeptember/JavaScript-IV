// CODE here for your Lambda Classes
class Person {
    
    constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    }
  
    speak() {
      console.log(` Whats up man, my name is ${this.name}, I am from ${this.location}.`)
    }
    
  }
  
  class Instructor extends Person {
    constructor(attributes) {
      super(attributes);
      this.specialty = attributes.specialty;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase;
    }
  
    demo(subject) {
      console.log(`Today we are learning about ${subject}`)
    }
  
    grade(subject) {
      console.log(`${Student.name} has recieved a perfect score on ${subject}`)
    }
  }
  
  class Student extends Person {
    constructor(attributes) {
      super(attributes);
      this.previousBackground = attributes.previousBackground;
      this.className = attributes.className;
      this.favSubject = attributes.favSubject;
    }
  
      listObjects() {
        return Student.favSubject;
      }
  
      PRAssignment(subject) {
        console.log(`${Student.name} has submitted a PR for  ${subject}`)
    }
  
    sprintChallenge(subject) {
      console.log(`${Student.name} has started a sprint for ${subject}`)
    }
  }
  
  class ProjectManagers extends Instructor {
    constructor(attributes) {
      super(attributes);
      this.gradClassName = attributes.gradClassName;
      this.favInstructor = this.favInstructor;
  
    }
  
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
  
    debugsCode(subject) {
      console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
    }
  }
  
  const Anthony = new Instructor({
    name: 'Anthony',
    location: 'Tallahassee, FL',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
  const John = new Instructor({
    name: 'Jasmine',
    location: 'Miami, FL',
    age: 25,
    gender: 'Female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I love coding on the beach in Miami`
  });
  
  const kiwi = new Instructor({
    name: 'David',
    location: 'GA Atlanta',
    age: 28,
    gender: 'Male',
    favLanguage: 'css',
    specialty: 'Front-end',
    catchPhrase: `I love the ladies`
  });
  
  const jason = new Student({
    name: 'Dustin' ,
    location: 'Nashville' ,
    age: 21 ,
    gender: 'male' ,
    previousBackground: 'Music' ,
    className: 'web18' ,
    favSubject: 'React',
  
  });
  
  const welma = new Student({
    name: 'Amanda' ,
    location: 'LA' ,
    age: 20 ,
    gender: 'female' ,
    previousBackground: 'Actress' ,
    className: 'Web18' ,
    favSubject: 'Responsive-II',
  
  });
  
  const jackson = new ProjectManagers({
    name: 'Jack' ,
    location: 'Texas' ,
    age: 18 ,
    gender: 'male' ,
    gradClassName: 'web16' ,
    favInstructor: 'Josh'
  
  });
  
//   console.log(jackson.debugsCode());