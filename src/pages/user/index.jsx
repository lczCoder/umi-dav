import Styles from './index.less';
function User() {
  return (
    <div className={Styles.warp}>
      <p className={Styles.title}>这是用户界面</p>
      <div className={Styles.box}>
        <p className={Styles.title}>搜索🔍</p>
      </div>
    </div>
  );
}
export default User;
