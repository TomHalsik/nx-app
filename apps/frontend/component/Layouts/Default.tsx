import { HeaderMenu } from "../Headers/HeaderMenu";

export function DefaultLayout() {
  const links = [
    { link: "/", label: "Lotos" },
    { link: "/", label: "Qui sommes-nous ?" },
    { link: "/", label: "Asso News" },
    { link: "/", label: "Associations" },
    { link: "/", label: "Boutique Asso Passion" },
  ];
  return <HeaderMenu links={links} />;
}
