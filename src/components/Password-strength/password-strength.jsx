import React from 'react'

const PasswordStrength = () => {

    const validate = () => {
        if (
          validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          })
        ) {
          setHasError();
        } else {
          setHasError({
            PasswordSignUp: (
              <div>
                Password is weak minLength: 8, minLowercase: 1, minUppercase: 1,
                minNumbers: 1, minSymbols: 1,
              </div>
            ),
          });
        }
      };
      
  return (
    <div>
      
    </div>
  )
}

export default PasswordStrength
