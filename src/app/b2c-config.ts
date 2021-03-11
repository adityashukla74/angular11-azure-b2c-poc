
/**
 * Enter here the user flows and custom policies for your B2C application,
 * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_signup",
        forgotPassword: "b2c_1_password",
        editProfile: "b2c_1__profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://poctestdctb2c.b2clogin.com/poctestdctb2c.onmicrosoft.com/b2c_1_signup",
        },
        forgotPassword: {
            authority: "https://poctestdctb2c.b2clogin.com/poctestdctb2c.onmicrosoft.com/b2c_1_password",
        },
        editProfile: {
            authority: "https://poctestdctb2c.b2clogin.com/poctestdctb2c.onmicrosoft.com/b2c_1_profile"
        }
    },
    authorityDomain: "poctestdctb2c.b2clogin.com"
};

/**
 * Enter here the coordinates of your Web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: {scopes: string[]; uri: string} = {
    scopes: ['https://poctestdctb2c.b2clogin.com/helloapi/demo.read'],
    uri: 'https://poctestdctb2c.b2clogin.com.azurewebsites.net/hello'
};
