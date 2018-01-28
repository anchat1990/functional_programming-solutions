function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every((suser) => {return goodUsers.some((guser) => {return guser.id === suser.id})});    
  };
}

module.exports = checkUsersValid
