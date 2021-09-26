import Transaccion from "../Transaccion";
import { render } from "@testing-library/react";

describe("Componente transaccion", () => {
  it("Genera un snapshot y tiene la misma estructura", () => {
    const { container } = render(
      <Transaccion data="25/09/2021" tipo="retiro" valor="200" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
