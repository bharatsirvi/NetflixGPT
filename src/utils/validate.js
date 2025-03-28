export const checkValidateData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password
    );
   
  if (!isEmailValid) return "Please enter a valid email or phone number.";
  if (!isPassValid) return "Please enter a valid password.";
  return null;

};

export const checkValidateName = (name) => {
  
    const isNameValid = /^[A-Za-z]+([\ A-Za-z]+)*/.test(name)
    if (!isNameValid) return "Please enter a valid fullname.";   
    return null;
  
  };