import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../../hooks/useSelectCurrency";
import { currencies } from "../../data/currencies";
import Error from "../Error/Error";

const InputSubmit = styled.input`
  background-color: #00b819;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #008913;
    cursor: pointer;
  }
`;

const Form = ({ setCurrencies }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectCurrency(
    "Select your Currency",
    currencies
  );

  const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency(
    "Select the crypto you want to quote",
    cryptos
  );

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const response = await fetch(url);
      const data = await response.json();

      const arrayCryptos = data.Data.map((crypto) => {
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return object;
      });

      setCryptos(arrayCryptos);
    };
    getData();
  }, []);

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if ([currency, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setCurrencies({ currency, cryptoCurrency });
  };
  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form onSubmit={hanldeSubmit}>
        <SelectCurrency />
        <SelectCryptoCurrency />
        <InputSubmit type="submit" value="Get Quote" />
      </form>
    </>
  );
};

export default Form;
