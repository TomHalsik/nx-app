const links = [
  { link: "/", label: "Accueil", active: false },
  { link: "/signin", label: "Sign in", active: false },
  { link: "/login", label: "Log in", active: false },
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
