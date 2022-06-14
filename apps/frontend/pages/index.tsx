import { DefaultLayout } from "../component/Layouts/Default";
import styles from "./index.module.css";

export function Index() {
  return (
    <div className={styles.page}>
      <DefaultLayout />
    </div>
  );
}

export default Index;
