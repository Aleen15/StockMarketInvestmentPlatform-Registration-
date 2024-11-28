import React from 'react';
import './Dashboard.css'; // Import styles for your page
import Navbar from '../LandingPage/Navbar';
import { FaBitcoin, FaEthereum } from 'react-icons/fa'; // Cryptocurrency icons
import { AiOutlineFire } from 'react-icons/ai'; // Trending icon
import { IoMdTrendingUp, IoMdTrendingDown } from 'react-icons/io'; // Positive/Negative trends
import { BiNews } from 'react-icons/bi'; // News icon


const Dashboard = () => {
    
  return (
    <div className="dashboard">
    <Navbar/>

      <header className="dashboard-header">
        <div className="user-info">
            <h2>Hi, v saiteja viswanath 👋</h2>
          <p>Let's grow your stocks with SafeCryptoStocks</p>
        </div>
        {/* <div className="profile">
          <a href="/profile">View Profile</a>
        </div> */}
      </header>

      <main className="dashboard-content">
        {/* Top Trending Coins Section */}
        <section className="trending-coins">
  <h3>
    <AiOutlineFire style={{ color: '#f39c12', fontSize: '1.5rem' }} /> Top Trending Coins
  </h3>
  <ul>
    <li>
      <FaEthereum style={{ color: '#3c3c3d', fontSize: '1.2rem' }} /> Neiro on ETH <span>Market Rank 334</span>
    </li>
    <li>
      <FaBitcoin style={{ color: '#f7931a', fontSize: '1.2rem' }} /> Neiro <span>Market Rank 428</span>
    </li>
    {/* Add more items */}
  </ul>
</section>



        {/* Top Cryptocurrencies by Market Cap */}
        <section className="top-cryptocurrencies">
          <h3>Top Cryptocurrencies by Market Cap</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24hrs</th>
                <th>7 Days</th>
              </tr>
            </thead>
            <tbody>
  <tr>
    <td>1</td>
    <td>
      <FaBitcoin style={{ color: '#f7931a' }} /> Bitcoin
    </td>
    <td>$38,791</td>
    <td className="value-positive">
      <IoMdTrendingUp style={{ color: '#28a745' }} /> 2.36%
    </td>
    <td className="value-positive">
      <IoMdTrendingUp style={{ color: '#28a745' }} /> 7.04%
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>
      <FaEthereum style={{ color: '#3c3c3d' }} /> Ethereum
    </td>
    <td>$2,238.97</td>
    <td className="value-negative">
      <IoMdTrendingDown style={{ color: '#dc3545' }} /> -0.08%
    </td>
    <td className="value-positive">
      <IoMdTrendingUp style={{ color: '#28a745' }} /> 6.52%
    </td>
  </tr>
  {/* Add other rows */}
</tbody>


          </table>
        </section>

        {/* Latest News Section */}
        <section className="latest-news">
  <h3>
    <BiNews style={{ color: '#007bff' }} /> Latest News
  </h3>
  <div>
    <p>
      Trump is launching a cryptocurrency platform, and we have no idea what it does. <a href="/news">Read More</a>
    </p>
    <p>
      The number of bitcoin millionaires has increased by 11% in the last year as the cryptocurrency rallies.
    </p>
  </div>
</section>

      </main>
    </div>
  );

};

export default Dashboard;
