import React from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./styles";

const Header = () => {
	return (
		<Container>
			<h1>teste1</h1>
			<NavLink to="/banner">Banner</NavLink>
			<br />
			<NavLink to="/sobre-o-servico">Sobre o Serviço</NavLink>
			<br />
			<NavLink to="/para-quem-e-o-servico">Para quem é o Servico</NavLink>
			<br />
			<NavLink to="/como-funciona">Como funciona</NavLink>
			<br />
			<NavLink to="/produtos">Produtos</NavLink>
			<br />
			<NavLink to="/diferenciais">Diferenciais</NavLink>
			<br />
			<NavLink to="/mais-campos">Mais campos</NavLink>
			<br />
			<NavLink to="/faq">FAQ</NavLink>
			<h1>Teste commit</h1>
		</Container>
	);
};

export default Header;
