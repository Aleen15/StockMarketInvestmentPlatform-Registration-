// PortfolioPage.jsx
import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [balance, setBalance] = useState(872043.00); // Current balance
  const [profitLoss, setProfitLoss] = useState(52384.00); // Profit/Loss value
  const [portfolios, setPortfolios] = useState([
    { id: 1, name: "demo", tags: ["Socially-Responsible", "Investing"] }
  ]);
  const [assets, setAssets] = useState([
    { id: 1, name: "BNB", symbol: "BNB", price: 45897.00, change24h: -1.34, holdings: 872043.00, avgBuyPrice: 42709.00, profitLoss: 52384.00 }
  ]);

  return (
    <div className="portfolio-page">
      {/* Left Sidebar with Portfolios */}
      <div className="sidebar">
        <h3>My Portfolios</h3>
        <ul>
          {portfolios.map((portfolio) => (
            <li key={portfolio.id} className="portfolio-item">
              <h4>{portfolio.name}</h4>
              <p>{portfolio.tags.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Current Balance Section */}
        <div className="balance-section">
          <h2>Current Balance</h2>
          <h1>${balance.toLocaleString()}</h1>
          <p className="profit-loss">${profitLoss.toLocaleString()}</p>
        </div>

        {/* Assets Table */}
        <div className="assets-section">
          <h3>Your Assets</h3>
          <table className="assets-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Holdings</th>
                <th>Avg. Buy Price</th>
                <th>Profit/Loss</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id}>
                  <td>
                    <div className="asset-name">
                      <img src={`https://cryptoicons.org/api/icon/${asset.symbol.toLowerCase()}/32`} alt={asset.name} />
                      <span>{asset.name}</span>
                      <span className="asset-symbol">{asset.symbol}</span>
                    </div>
                  </td>
                  <td>${asset.price.toLocaleString()}</td>
                  <td className={asset.change24h < 0 ? 'negative' : 'positive'}>
                    {asset.change24h}%
                  </td>
                  <td>${asset.holdings.toLocaleString()}</td>
                  <td>${asset.avgBuyPrice.toLocaleString()}</td>
                  <td>${asset.profitLoss.toLocaleString()}</td>
                  <td>
                    <button className="action-btn">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
