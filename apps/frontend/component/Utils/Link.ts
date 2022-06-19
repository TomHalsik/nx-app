const links = [
  { link: "/", label: "Lotos", active: false },
  { link: "/signin", label: "Qui sommes-nous ?", active: false },
  { link: "/login", label: "Asso News", active: false },
  { link: "/", label: "Associations", active: false },
  { link: "/", label: "Boutique Asso Passion", active: false },
];

const getLinks = () => {
  const page = document.URL.split("/").slice(-1).toString();
  return links.map((link) => {
    if (link.link === `/${page}`) {
      link.active = true;
    } else {
      link.active = false;
    }
    return link;
  });
};

export default getLinks;
