async function getSuggestion() {
  const response = await fetch('https://apis.scrimba.com/bored/api/activity');
  const data = response.json();
  console.log(data);
}
getSuggestion();

// promise after a job interview: "We will let you know within a week"

// Every promise has 3 states:
// 1. Pending state
// 2. Resolved or Fulfilled state // interviewer replied within a week
// 3. Rejected state // interviewer did not reply within a week
