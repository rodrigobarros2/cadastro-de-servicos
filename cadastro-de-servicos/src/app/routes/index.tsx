import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Banner from "../pages/Banner";
import AboutServices from "../pages/AboutServices";
import Differentials from "../pages/Differentials";
import Faq from "../pages/Faq";
import HowItWorks from "../pages/HowItWorks";
import MoreFields from "../pages/MoreFields";
import Products from "../pages/Products";
import WhoIsTheServiceFor from "../pages/WhoIsTheServiceFor";

const Routes: React.FC = () => (
  <BrowserRouter basename="cadastro-de-servicos">
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/sobre-o-servico" exact component={AboutServices} />
      <Route path="/para-quem-e-o-servico" exact component={WhoIsTheServiceFor} />
      <Route path="/como-funciona" exact component={HowItWorks} />
      <Route path="/produtos" exact component={Products} />
      <Route path="/diferenciais" exact component={Differentials} />
      <Route path="/mais-campos" exact component={MoreFields} />
      <Route path="/faq" exact component={Faq} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
