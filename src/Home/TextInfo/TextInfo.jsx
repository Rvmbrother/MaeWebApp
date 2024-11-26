import React from "react";
import "../Home.css";

const TextInfo = React.forwardRef((props, ref) => {
  return (
    <div className="homeText" ref={ref}>
      <p className="info">
        Nome: Filipa Roseta Vaz Monteiro <br />
        Data de Nascimento:03.09.1973
      </p>
      <p className="info">
        Número de Sócio da Ordem dos Arquitetos:6751 S<br />
        Ciencia Vitae ID:5A1A-1E95-D45A <br />
        ORCID ID:0000-0001-8000-5976 <br />
        SCOPUS AUTHOR ID:55998343700 <br />
        Google Scholar: Filipa Roseta <br />
      </p>
      <p className="info">
        Morada (vereação): Câmara Municipal de Lisboa, Rua do Arsenal 4° piso
        1100-040 Lisboa <br />
        Telefone (vereação): +351916746476
        <br /> Email(vereação): filipa.roseta@cm-lisboa.pt
      </p>
      <p className="info">
        Morada (Faculdade de Arquitectura): Rua Sá Nogueira, Pólo Universitário,
        Alto da Ajuda, 1349 - 055 Lisboa <br />
        Telefone (FAUL): +351 213615 000
        <br />
        E-mail (FAUL): froseta@fa.ulisboa.pt
      </p>
    </div>
  );
});
export default TextInfo;
