// import { useEffect } from 'react';
// import styles from './index.less';

// export default function IndexPage() {
//   useEffect(() => {

//   }, [])
//   const sse = () => {
//     console.log('qwerqwer');

//     const source = new EventSource('/api/sse/test');
//     source.addEventListener('open', () => {
//       console.log('Connected');
//     }, false);
//     source.addEventListener('slide', (e) => {
//       console.log(e);
//     }, false);
//   }
//   return (
//     <div>
//       <h1 className={styles.title} onClick={() => { sse() }}>Page index 0</h1>
//     </div>
//   );
// }
export const setCookie = (name: string, value: string, exdays = 1) => {
  //name  :表示cookie的名称，比如token
  //value  :表示cookie的值
  //exdays  :表示cookie的有效时间
  var d: any = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = name + '=' + value + '; ' + expires;
};

import { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import { oktaSignInConfig } from './config';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
// import { setCookie } from '@/utils/utils'

const Login = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return false;

    const widget = new OktaSignIn(oktaSignInConfig);

    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(function (tokens) {
        const {
          idToken: { idToken, claims },
        } = tokens;
        // Store tokens
        setCookie('token', tokens.idToken.idToken, 1)
        sessionStorage.setItem('token', tokens.idToken.idToken);
        sessionStorage.setItem('tokens', JSON.stringify(tokens));
        window.location.replace(window.location.origin);
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => widget.remove();
  }, []);

  return <div ref={widgetRef} />;
};
export default Login;
