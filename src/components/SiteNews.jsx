import {useState} from 'react';
import axios from 'axios';

const SiteNews = () => {
  const [productName, setProductName] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async () => {
    try {
      const response = await axios.post('http://localhost:5001/recommend', { product_name: productName });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };
  const newsItems = [
    {
      title: 'Reset your Office365 password using your phone and recovery email',
      author: 'E-learning Site Administrator',
      date: 'Tuesday, 11 August 2020, 5:03 PM',
      description: 'Reset your Office365 password using your phone and recovery email by following steps in the attached password reset guide.',
      tags: ['reset password', 'Office 365'],
      file: 'Guide to reset your office 365 account Password.pdf',
    },
    {
      title: 'Office 365 new users guide: set up your new account',
      author: 'E-learning Site Administrator',
      date: 'Saturday, 6 June 2020, 11:16 AM',
      description: 'Dear Students and Scholars, find the following attachment guide to set up your new Office 365 account from Arba Minch University. Before start using Office 365 or before calling for support, one must read this guide.',
      file: 'New User\'s Guide - Setup your new Office365 account form Arba Minch University.pdf',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Site News</h2>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <div className="text-gray-600 mb-2">
              <span>by {item.author}</span> | <span>{item.date}</span>
            </div>
            <p className="mb-2">{item.description}</p>
            {item.tags && (
              <div className="mb-2">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-2 py-1 mr-2 text-sm text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <a href={`/${item.file}`} className="text-blue-500 hover:underline">
              {item.file}
            </a>
          </div>
        ))}
      </div>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Product Recommendations</h1>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter a product name"
        className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
      />
      <button
        onClick={fetchRecommendations}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Get Recommendations
      </button>
      {recommendations.length > 0 && (
        <ul className="space-y-2">
          {recommendations.map((rec, index) => (
            <li key={index} className="text-gray-700">
              {rec}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default SiteNews;