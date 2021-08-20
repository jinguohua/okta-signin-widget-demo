const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit Flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://jllpoc.oktapreview.com',
    clientId: '0oa10a0kl2yYN0yB80h8',
    redirectUri: window.location.origin + '/implicit/callback',
};

const oktaSignInConfig = {
    baseUrl: 'https://jllpoc.oktapreview.com', //'https://dev-950376.okta.com',
    clientId: '0oa10a0kl2yYN0yB80h8',
    redirectUri: window.location.origin + '/implicit/callback',
    authParams: {
        // If your app is configured to use the Implicit Flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        issuer: 'https://jllpoc.oktapreview.com',
        pkce: true,
        responseType: ['code'],
        // scopes: ['openid', 'profile', 'email'],
        // tokenManager: {
        //   autoRenew: true,
        //   expireEarlySeconds: 120000,
        // },
    },
};

export { oktaAuthConfig, oktaSignInConfig };
