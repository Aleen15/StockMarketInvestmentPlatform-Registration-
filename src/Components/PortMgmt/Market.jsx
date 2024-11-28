import React, { useState, useEffect } from "react";
import "./Market.css";
import Navbar from "../LandingPage/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Market = () => {
    
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    
      const data = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          price: 58716,
          change24h: -3.22,
          change7d: 7.4,
          marketCap: "1,138,221,256,822",
          volume: "25,445,698,280",
          supply: "19,274,748 BTC",
          logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          price: 3837,
          change24h: 5.27,
          change7d: 0.02,
          marketCap: "327,012,203,802",
          volume: "15,456,217,789",
          supply: "120,123,074 ETH",
          logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        },
        {
          name: "Tether",
          symbol: "USDT",
          price: 1,
          change24h: 0.04,
          change7d: 0,
          marketCap: "72,569,321,101",
          volume: "39,356,748,223",
          supply: "72,612,878,123 USDT",
          logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
        },
        {
          name: "Binance Coin",
          symbol: "BNB",
          price: 327,
          change24h: -1.28,
          change7d: 4.87,
          marketCap: "51,012,345,678",
          volume: "1,567,234,789",
          supply: "148,567,933 BNB",
          logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
        },
        {
          name: "Solana",
          symbol: "SOL",
          price: 130,
          change24h: -4.69,
          change7d: 4.32,
          marketCap: "42,123,456,789",
          volume: "2,112,456,890",
          supply: "488,221,789 SOL",
          logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
        },
        {
          name: "Ripple",
          symbol: "XRP",
          price: 0.75,
          change24h: 1.87,
          change7d: 3.22,
          marketCap: "35,987,654,321",
          volume: "3,567,234,567",
          supply: "47,986,125,000 XRP",
          logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
        },
        {
          name: "Cardano",
          symbol: "ADA",
          price: 1.21,
          change24h: 2.45,
          change7d: -0.32,
          marketCap: "38,123,987,234",
          volume: "1,987,123,876",
          supply: "32,456,789,874 ADA",
          logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
        },
        {
          name: "Polkadot",
          symbol: "DOT",
          price: 19.23,
          change24h: -0.87,
          change7d: 2.18,
          marketCap: "22,789,654,321",
          volume: "1,567,234,789",
          supply: "1,019,234,567 DOT",
          logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          price: 0.23,
          change24h: 0.45,
          change7d: -1.23,
          marketCap: "30,123,456,789",
          volume: "987,654,321",
          supply: "132,456,789,987 DOGE",
          logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
        },
        {
          name: "Litecoin",
          symbol: "LTC",
          price: 156.34,
          change24h: 1.56,
          change7d: 2.12,
          marketCap: "10,123,456,789",
          volume: "789,654,321",
          supply: "68,987,654 LTC",
          logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
        },
      
      
      // Add other cryptocurrencies with logos...
    ];
    setCryptoData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
        <Navbar/>
      <div className="header">
        <h1>Top Cryptocurrencies by Market Cap</h1>
        <div className="search-bar">
  <FontAwesomeIcon icon={faSearch} className="search-icon" />
  <input
    type="text"
    placeholder="Search by name or symbol..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="search-input"
  />
</div>

      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Supply</th>
          </tr>
        </thead>
        <tbody>
  {filteredData.length > 0 ? (
    filteredData.map((crypto, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <img
            src={crypto.logo}
            alt={`${crypto.name} logo`}
            className="crypto-logo"
          />
          {crypto.name} ({crypto.symbol})
        </td>
        <td>${crypto.price.toLocaleString()}</td>
        <td className={crypto.change24h < 0 ? "red" : "green"}>
          {crypto.change24h}%
        </td>
        <td className={crypto.change7d < 0 ? "red" : "green"}>
          {crypto.change7d}%
        </td>
        <td>${crypto.marketCap}</td>
        <td>${crypto.volume}</td>
        <td>{crypto.supply}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8" style={{ textAlign: "center", padding: "10px", color: "#888" }}>
        Name or symbol not found
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default Market;
