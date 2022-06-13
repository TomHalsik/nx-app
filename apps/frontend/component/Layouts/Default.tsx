import { HeaderMenu } from "../Headers/HeaderMenu";

export function DefaultLayout() {
  const links = [
    { link: "/", label: "Lotos" },
    { link: "/", label: "Qui sommes-nous ?" },
  ];
  return <HeaderMenu links={links} />;
}
