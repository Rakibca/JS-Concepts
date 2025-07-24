/*
Quiz: list some times that we have passed functions as arguments to other functions.
1. Array methods: map, forEach, reduce
2. setTimeout and setInterval
3. Event Listeners
*/

// Example 1 Below:
arrayOfNames.forEach((name) => console.log(name));

// Example 2 Below:
function notifyUser(notificationFn) {
  notificationFn();
}

const emailNotification = () => console.log('Email sent');
const smsNotification = () => console.log('SMS sent');

notifyUser(emailNotification);
notifyUser(smsNotification);
