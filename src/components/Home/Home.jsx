import React, { useState, useEffect } from 'react';

const Home = () => {
  const goals = [
    "/my name is Brandon",
    "/and i'm a software engineer",
    "/i work in Magento2 for my day job",
    "/and in React during my off hours",
    "/i'm an avid do-it-yourself-er",
    "/and an amateur woodworker",
    "/this is my space to share my work",
  ];
  
  const quotes = [
    '"Your favorite quote goes here." - ChatGPT',
    '"Don\'t be inspired, be inspirational" - unknown', 
    '"Live every week like it\'s Shark Week" - Tracy Jordan (30 Rock)'
  ];

  const [selectedQuote, setSelectedQuote] = useState('')

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelectedQuote(randomQuote);
  // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-dark-grey text-broxworx-turq font-chakra-petch p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div>
          <p className="font-chakraPetch text-2xl mb-4">{selectedQuote}</p>
          <div className="mt-8">
            <ul className="list-none pl-2">
              {goals.map((goal, index) => (
                <li key={index} className="text-lg mb-2 pl-2" style={{ paddingLeft: `${(index * 2)+2}rem` }}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-md w-auto h-auto my-4 md:my-0 md:mr-8"
            src={process.env.PUBLIC_URL + '/assets/images/fall-2021(headshot-small).jpg'}
            alt="Brandon Broxterman"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
