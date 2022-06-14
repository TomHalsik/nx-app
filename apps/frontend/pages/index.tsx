import { DefaultLayout } from "../component/Layouts/Default";
import { Demo } from "../component/Utils/Test";
import styles from "./index.module.css";

export function Index() {
  return (
    <div className={styles.page}>
      <DefaultLayout>
        <Demo />
      </DefaultLayout>
    </div>
  );
}

export default Index;
