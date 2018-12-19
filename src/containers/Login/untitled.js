examinerSignupHandler = async e => {
  e.preventDefault();
  const user = {
    email: e.target.email.value,
    password: e.target.password.value,
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    phone: e.target.phone.value,
    bio: e.target.bio.value,
    rates: e.target.rates.value,
    isExaminer: true
  };

  let response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  // success
  if (response.status.toString().match(/^20.$/)) {
    let json = await response.json()
    let jwt = json.auth_token
    localStorage.setItem('jwt', jwt)
    let user_id = JSON.parse(atob(jwt.split('.')[1])).user_id
    await this.props.getUser(user_id)
  }
  // signup error
  else {
    this.setState({ signupError:
      {
        status: response.status,
        message: 'Incorrect format or duplicate email',
        userType: 'Examiner'
      }
    })
  }
};
