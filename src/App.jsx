import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CryptoLogo from "./assets/img/imagen-criptos.png";
import Form from "./components/Form/Form";
import Quote from "./components/Quote/Quote";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 auto;
  width: 90%;
  height: 100vh;
  max-height: 892px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Geologica", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #3fff33;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const quoteCrypto = async () => {
        setLoading(true);
        setQuote({});
        const { currency, cryptoCurrency } = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
        const response = await fetch(url);
        const result = await response.json();
        setQuote(result.DISPLAY[cryptoCurrency][currency]);
        setLoading(false);
      };
      quoteCrypto();
    }
  }, [currencies]);

  return (
    <>
      <Container>
        <Image src={CryptoLogo} alt="Crypto Logo" />
        <div>
          <Heading>Quotes crypto currencies instantly</Heading>
          <Form setCurrencies={setCurrencies} />
          {loading && <LoadingSpinner />}
          {quote.PRICE && <Quote quote={quote} />}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
