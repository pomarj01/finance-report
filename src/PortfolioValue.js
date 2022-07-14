import React from 'react';
import { Heading } from '@chakra-ui/react';

const Portfolio = () => {
  const initialStock = 50;
  const currentStockValue = 38;
  const portfolioValue = (currentStockValue - initialStock) / initialStock;
  const portfolioReturn = currentStockValue > initialStock ? 'gain' : 'loss';
  const percentageReturn = portfolioValue * 100 + '%';

  return (
    <>
      <Heading as="h5" size="sm" mb={4}>
        Create an algorithm that when the profit of your portfolio is positive
        then it'll show a + in front of the % (+12%) and in green. When its
        negative it'll show a - (-12%)
      </Heading>
      <div id="profit">
        <p>Purchase price: {initialStock}</p>
        <p>Current stock price: {currentStockValue}</p>
        Your profit is
        <span id={portfolioReturn}>
          {portfolioReturn === 'gain' ? `+` : `-`}({percentageReturn}){' '}
        </span>
      </div>
    </>
  );
};


export default Portfolio;