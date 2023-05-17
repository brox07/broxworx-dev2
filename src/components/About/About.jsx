import React, { useState, useEffect } from 'react';

const About = () => {
  const goals = [
    "i'm Brandon, software engineer/",
    "i work in Magento2 for my day job/",
    "and in React in my off hours/",
    "i'm an avid diy'er/",
    "and an alright woodworker/",
    "this is my space to share my work/",
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
    <div className="bg-dark-grey text-broxworx-turq font-chakra-petch flex flex-col min-h-screen justify-between">
      <div className="p-8 md:flex md:justify-between">
        <div className="md:w-1/2">
          <div className="mb-4">
                <p className="font-chakraPetch text-2xl mb-4">{selectedQuote}</p>
          </div>
          <div className="mt-8">
            <ul className="list-none pl-0">
              {goals.map((goal, index) => (
                <li key={index} className="text-lg mb-2 pl-2" style={{ paddingLeft: `${index * 2}rem` }}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
        <img
          className="rounded w-[252px] h-[222px] my-4 md:my-0 md:mr-8"
          src={process.env.PUBLIC_URL + '/assets/images/fall-2021(headshot).jpg'}
          alt="Brandon Broxterman"
        />
        </div>
      </div>
    </div>
  );  
};

export default About;
