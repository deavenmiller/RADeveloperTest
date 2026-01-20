import { deck, users } from './setup.js';

//Given a deck of cards
//Write a function that draw x cards and tell the user the remaining number of cards in each suit and each value
//
//i.e.
// {
//  hand:
//  [
//   {
//     suit: "Clubs",
//     value: "7"
//   },
//   ...
// ],
//   remainingSuits: {
//     spades: 1,
//     hearts: 2,
//     ...
//   },
//   remainingValues: {
//     A: 2,
//     K: 2,
//     Q: 3,
//     ...
//   }
// }

function drawCards(deck, num) {
  // Draw the specified number of cards from the top of the deck
  const hand = deck.slice(0, num);
  const remainingDeck = deck.slice(num);

  // Count the remaining cards by suit
  const remainingSuits = {};
  remainingDeck.forEach(card => {
    remainingSuits[card.suit] = (remainingSuits[card.suit] || 0) + 1;
  });

  // Count the remaining cards by value
  const remainingValues = {};
  remainingDeck.forEach(card => {
    remainingValues[card.value] = (remainingValues[card.value] || 0) + 1;
  });

  return {
    hand,
    remainingSuits,
    remainingValues
  };
}

console.log(drawCards(deck, 5));


// Given an array of users
// Write a function that will remove any duplicates from the users array and show the number of total duplicates
// The duplicated user should be reduced to one insntace in the array
// i.e.
// userIn = [
//   {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   },
//   {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   }
// ]
// returnArray = {
//   returnUsers: {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   },
//   dupeCount: 1
// }

function deduplicateUsers(users){
  const seen = new Set();
  const returnUsers = [];
  let dupeCount = 0;

  users.forEach(user => {
    // Create a unique key for all the user's properties
    const userKey = JSON.stringify(user);
    if (seen.has(userKey)) {
      dupeCount++;
    } else {
      seen.add(userKey);
      returnUsers.push(user);
    }
  });

  return {
    returnUsers,
    dupeCount
  }
}

console.log(deduplicateUsers(users));

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// --------NON CODING CHALLENGE--------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------


//Given a system that will allow users to create events that will be stored in a database
//And given that the database only allows searching by a single field
//And given that not all fields need to be viewable by a user
//How would you design a record object to allow you to search for events by multiple fields
//Given that you can control the object schema
//And given that all user editable fields are limited to numbers and letters
//NOTE: This question does not have a correct answer, it is a design question to see how you think about the problem

/*

DESIGN ANSWER:
- Create a concatenated search field:
  - Add a single field called "searchText" that contains all searchable fields concatenated together.
  - Concatenate all user-editable fields into the searchText field.
  - Use a delimiter to separate the fields "|".
  - Normalize the data: convert to lowercase and remove extra whitespace for consistent searching.
  - Ex: "eventName|description|location|date|time"

*/