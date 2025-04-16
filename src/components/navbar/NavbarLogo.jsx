import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Icons
const HintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Component for individual zodiac sign buttons
const ZodiacButton = ({ icon, onClick, isSelected }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-2 rounded-lg text-sm transition-all duration-300 ${
      isSelected
        ? icon === '♋'
          ? 'bg-green-900/70 text-white'
          : 'bg-red-900/70 text-white'
        : 'bg-indigo-900/50 hover:bg-indigo-800/70'
    } backdrop-blur-sm`}
    aria-pressed={isSelected}
  >
    {icon}
  </button>
);

ZodiacButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

// Zodiac data with sarcastic/negative comparisons
const zodiacData = {
  Aries: {
    icon: '♈',
    difference: "Lol, an Aries? You probably think charging headfirst into walls is a personality trait.",
  },
  Taurus: {
    icon: '♉',
    difference: "A Taurus? Let me guess - you think 'stubborn' is just another word for 'right'?",
  },
  Gemini: {
    icon: '♊',
    difference: "Oh a Gemini... so which of your 5 personalities is guessing right now?",
  },
  Cancer: {
    icon: '♋',
    difference: "You got it! Though I bet you just stalked my socials... message me already!",
  },
  Leo: {
    icon: '♌',
    difference: "A Leo? Let me grab my sunglasses - your ego is blinding me.",
  },
  Virgo: {
    icon: '♍',
    difference: "Virgo? You probably alphabetize your spice rack and color-code your socks.",
  },
  Libra: {
    icon: '♎',
    difference: "Libra... the sign that can't decide what to eat for lunch, let alone what they want in life.",
  },
  Scorpio: {
    icon: '♏',
    difference: "Scorpio? I'd say 'mysterious' but we both know you're just socially awkward.",
  },
  Sagittarius: {
    icon: '♐',
    difference: "Sagittarius? The only thing you commit to is not committing to anything.",
  },
  Capricorn: {
    icon: '♑',
    difference: "Capricorn... because nothing says 'fun' like spreadsheets and 5-year plans.",
  },
  Aquarius: {
    icon: '♒',
    difference: "Aquarius? You're not 'quirky', you're just weird and in denial.",
  },
  Pisces: {
    icon: '♓',
    difference: "Pisces? Cute how you think daydreaming counts as a personality.",
  },
};

// Teasing messages for wrong guesses
const teaseMessages = [
  { attempts: 2, message: "2 wrong guesses already? Just message me for the answer 😏" },
  { attempts: 4, message: "4 attempts and still wrong? My DMs are open for hints 😉" },
  { attempts: 6, message: "6 guesses?? Okay stalker, just message me already! 😜" },
];

const NavbarLogo = () => {
  const [currentMessage, setCurrentMessage] = useState("Click to guess my star sign ♋");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedSign, setSelectedSign] = useState(null);
  const [gameState, setGameState] = useState('initial');
  const [hintIndex, setHintIndex] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const popupRef = useRef(null);
  const logoRef = useRef(null);
  const [popupStyle, setPopupStyle] = useState({});

  const zodiacSigns = Object.keys(zodiacData);

  const updatePopupPosition = () => {
    if (logoRef.current && popupRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const popupWidth = Math.min(logoRect.width * 2, 320);
      const popupHeight = popupRef.current.offsetHeight;
      
      let left = logoRect.left + logoRect.width / 2 - popupWidth / 2;
      let right = left + popupWidth;
      
      if (left < 0) left = 10;
      else if (right > window.innerWidth) left = window.innerWidth - popupWidth - 10;
      
      const spaceBelow = window.innerHeight - logoRect.bottom - 20;
      const spaceAbove = logoRect.top - 20;
      
      const topPosition = spaceBelow > popupHeight || spaceBelow > spaceAbove
        ? logoRect.bottom + 10
        : logoRect.top - popupHeight - 10;
      
      setPopupStyle({
        width: `${popupWidth}px`,
        left: `${left}px`,
        top: `${topPosition}px`,
        transform: 'none',
      });
    }
  };

  useEffect(() => {
    updatePopupPosition();
    window.addEventListener('resize', updatePopupPosition);
    return () => window.removeEventListener('resize', updatePopupPosition);
  }, [showOptions, gameState, currentMessage]);

  const handleInitialClick = () => {
    if (gameState === 'initial') {
      setCurrentMessage("Would you like to guess my zodiac sign?");
      setShowOptions(true);
    } else {
      const nextIndex = (hintIndex + 1) % hints.length;
      setHintIndex(nextIndex);
      setCurrentMessage(hints[nextIndex]);
    }
    updatePopupPosition();
  };

  const handleResponse = (response) => {
    if (response === 'yes') {
      setGameState('playing');
      setCurrentMessage(hints[0]);
      setHintIndex(0);
    } else {
      setCurrentMessage("Too scared to guess? Typical...");
      setTimeout(() => setShowOptions(false), 2000);
    }
  };

  const handleSignSelect = (sign) => {
    setSelectedSign(sign);
    if (sign === 'Cancer') {
      setCurrentMessage(zodiacData[sign].difference);
      setGameState('completed');
    } else {
      setWrongAttempts(prev => {
        const newAttempts = prev + 1;
        const tease = teaseMessages.find(msg => msg.attempts === newAttempts);
        if (tease) setCurrentMessage(tease.message);
        return newAttempts;
      });
      setCurrentMessage(zodiacData[sign].difference);
    }
    updatePopupPosition();
  };

  const handleShowHint = () => {
    const nextIndex = (hintIndex + 1) % hints.length;
    setHintIndex(nextIndex);
    setCurrentMessage(hints[nextIndex]);
    updatePopupPosition();
  };

  const handleClosePopup = () => {
    setShowOptions(false);
    setCurrentMessage("Click to guess my star sign ♋");
    setSelectedSign(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showOptions && popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    const handleScroll = () => {
      if (showOptions) {
        handleClosePopup();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showOptions]);

  return (
    <div className="relative text-center">
      <button
        ref={logoRef}
        onClick={handleInitialClick}
        className="group"
        aria-label="Play zodiac guessing game"
      >
        <h1 className="text-white font-special text-3xl hover:text-pink-400 transition-colors duration-500 cursor-pointer">
          𐤀𐤋𐤉𐤀𐤎 𐤀𐤋 𐤏𐤋𐤌
          <span className="block h-px bg-pink-400/0 group-hover:bg-pink-400/40 transition-all duration-700 w-0 group-hover:w-full mt-1 origin-left"></span>
        </h1>
      </button>

      <div
        ref={popupRef}
        style={popupStyle}
        className={`fixed bg-black/95 border border-pink-400/15 px-4 py-3 rounded-lg text-center transition-all duration-300 ${
          showOptions ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } backdrop-blur-sm z-50 min-w-[280px] max-w-[320px]`}
      >
        <button
          onClick={handleClosePopup}
          className="absolute top-2 right-2 text-pink-400 hover:text-pink-300 text-sm"
          aria-label="Close zodiac selection"
        >
          <XIcon />
        </button>
        <p className="text-sm text-pink-400/90 mb-3 pr-6">
          {currentMessage}
        </p>

        {showOptions && (
          <div className="grid gap-2">
            {gameState === 'initial' ? (
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleResponse('yes')}
                  className="flex items-center justify-center bg-green-900/70 text-white p-2 rounded-lg text-sm transition-all duration-300 hover:bg-green-800/70 w-24"
                >
                  <CheckIcon className="mr-1" /> Yes
                </button>
                <button
                  onClick={() => handleResponse('no')}
                  className="flex items-center justify-center bg-red-900/70 text-white p-2 rounded-lg text-sm transition-all duration-300 hover:bg-red-800/70 w-24"
                >
                  <XIcon className="mr-1" /> No
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 mb-2">
                  {zodiacSigns.map((sign) => (
                    <ZodiacButton
                      key={sign}
                      icon={zodiacData[sign].icon}
                      onClick={() => handleSignSelect(sign)}
                      isSelected={selectedSign === sign}
                    />
                  ))}
                </div>
                <button
                  onClick={handleShowHint}
                  className="flex items-center justify-center bg-indigo-900/50 hover:bg-indigo-800/70 text-white p-2 rounded-lg text-sm transition-all duration-300 mx-auto w-24"
                >
                  <HintIcon className="mr-1" /> Hint
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarLogo;