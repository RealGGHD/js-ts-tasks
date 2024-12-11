class User {
  #firstName;
  #secondName;
  #age;
  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string' || typeof age !== 'number') {
      throw new Error();
    }
    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }
  set age(input) {
    if (typeof input !== 'number') {
      throw new Error();
    }
    this.#age = input;
  }
  get age() {
    return this.#age;
  }
  set firstName(input) {
    if (typeof input !== 'string') {
      throw new Error();
    }
    this.#firstName = input;
  }
  set secondName(input) {
    if (typeof input !== 'string') {
      throw new Error();
    }
    this.#secondName = input;
  }
  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }
  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }
  celebrateBirthday() {
    this.#age++;
  }
}
/**
 * Create a class named User
 * @type {User}1!111111
 */
module.exports.User = User;
/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  const user = new User(firstName, secondName, age);
  return user;
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    const user = new User(data[i].firstName, data[i].secondName, data[i].age);
    array.push(user);
  }
  return array;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  let array = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age === age) {
      array.push(users[i]);
    }
  }
  return array;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  function sorting(array) {
    return array.sort(TestUtils.sortComparatorByAge);
  }
  return sorting;
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i += 2) {
    users[i].celebrateBirthday();
  }
  return users;
};
