import { DefaultLayout } from "../component/Layouts/Default";
import styles from "./index.module.css";

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <DefaultLayout />
    </div>
  );
}

export default Index;
