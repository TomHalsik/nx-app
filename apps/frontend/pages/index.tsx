import { DefaultLayout } from "../component/Layouts/Default";
import styles from "./index.module.css";

export function Index() {
  return (
    <>
      <title>Asso Passion</title>
      <div className={styles.page}>
        <DefaultLayout>test</DefaultLayout>
      </div>
    </>
  );
}

export default Index;
