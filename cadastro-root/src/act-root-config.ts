import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@act/cadastro-de-servicos",
  app: () => System.import("@act/cadastro-de-servicos"),
  activeWhen: ["/cadastro-de-servicos"],
});

// registerApplication({
//   name: "@act/navbar",
//   app: () => System.import("@act/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
