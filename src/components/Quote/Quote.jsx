import styled from "@emotion/styled";

const QuoteContainer = styled.div`
  color: #fff;
  font-family: "Geologica", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Quote = ({ quote }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    quote;
  return (
    <QuoteContainer>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="cryptoimg" />
      <div>
        <Price>
          Price: <span>{PRICE}</span>
        </Price>
        <Text>
          Highest today: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Lowest today: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </QuoteContainer>
  );
};
export default Quote;
