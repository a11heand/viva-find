/* Filename: AdvancedWebApp.js
Content: A complex web application that performs various advanced tasks */

// Global variables
let users = [];
let loggedInUser = null;
let data = {
  userCount: 0,
  latestUsers: [],
};

// User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.loggedIn = false;
  }

  login() {
    if (!this.loggedIn) {
      // Perform login operations
      this.loggedIn = true;
      loggedInUser = this;
      console.log(`${this.name} has logged in.`);
    }
  }

  logout() {
    if (this.loggedIn) {
      // Perform logout operations
      this.loggedIn = false;
      console.log(`${this.name} has logged out.`);
      loggedInUser = null;
    }
  }
}

// User management functions
function addUser(name, email, password) {
  const user = new User(name, email, password);
  users.push(user);
  data.userCount++;
  data.latestUsers.push(user);

  console.log(`${user.name} has been added as a new user.`);
}

function deleteUser(email) {
  const index = users.findIndex(user => user.email === email);
  if (index !== -1) {
    users.splice(index, 1);
    data.userCount--;

    console.log(`${email} has been deleted.`);
  } else {
    console.log(`${email} does not exist.`);
  }
}

// Other functions
function displayUserCount() {
  console.log(`Total number of users: ${data.userCount}`);
}

function displayLatestUsers() {
  console.log(`Latest users:`);
  data.latestUsers.forEach((user, index) => {
    console.log(`${index + 1}. Name: ${user.name} | Email: ${user.email}`);
  });
}

// Example usage
addUser("John Doe", "john@example.com", "pass123");
addUser("Jane Smith", "jane@example.com", "password");

users[0].login();
users[1].login();

displayUserCount();
displayLatestUsers();

deleteUser("john@example.com");

loggedInUser.logout();
users[1].logout();
displayUserCount();