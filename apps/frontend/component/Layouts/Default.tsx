import { FooterLinks } from "../Footer/Footer";
import { HeaderMenu } from "../Headers/HeaderMenu";

export function DefaultLayout() {
  const links = [
    { link: "/", label: "Lotos" },
    { link: "/", label: "Qui sommes-nous ?" },
    { link: "/", label: "Asso News" },
    { link: "/", label: "Associations" },
    { link: "/", label: "Boutique Asso Passion" },
  ];
  const data = [
    {
      title: "test",
      links: links,
    },
  ];

  return (
    <>
      <HeaderMenu links={links} />
      <FooterLinks data={data} />
    </>
  );
}
