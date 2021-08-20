import styles from './index.less';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
function IndexPage(props: any) {
  /** 获取当前的用户 GET /api/currentUser */
  async function currentUser(options?: { [key: string]: any }) {
    return fetch('/api/user/getUserInfo')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  useEffect(() => {
    currentUser()
  })
  return (
    <div>
      {/* <h1 className={styles.title} onClick={()=>props.history.push('/second')} >Page index 1</h1>
      <button onClick={()=>props.history.push('/second')}>click to page 2</button> */}
    </div>
  );
}
export default withRouter(IndexPage);