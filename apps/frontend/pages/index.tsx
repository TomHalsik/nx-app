import { HomeHero } from "../component/Hero/Hero";
import { DefaultLayout } from "../component/Layouts/Default";
import styles from "./index.module.css";

export function Index() {
  return (
    <>
      <title>Asso Passion</title>
      <div className={styles.page}>
        <DefaultLayout>
          <HomeHero />
        </DefaultLayout>
      </div>
    </>
  );
}

export default Index;
