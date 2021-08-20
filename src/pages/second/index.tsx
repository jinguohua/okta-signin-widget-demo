import styles from './index.less';
import {withRouter} from 'react-router-dom';

function IndexPage(props:any) {
  return (
    <div>
      <h1 className={styles.title} >Page index 2</h1>
      <button onClick={()=>props.history.push('/first')}>click to page 1</button>
    </div>
  );
}

export default  withRouter(IndexPage);