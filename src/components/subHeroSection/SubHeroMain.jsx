import { useState } from "react";
import { 
  FiCode, FiLayers, FiUsers, 
  FiZap, FiEye, FiCpu, 
  FiClock, FiFeather 
} from "react-icons/fi";

const SubHeroMain = () => {
  const [flippedCards, setFlippedCards] = useState(Array(8).fill(false));
  const [lastFlippedIndex, setLastFlippedIndex] = useState(null);

  const skills = [
    { 
      icon: <FiCode className="text-glowingPink" size={24} />,
      title: "Clean Code",
      description: "I write maintainable code with obsessive readability"
    },
    { 
      icon: <FiLayers className="text-glowingPink" size={24} />, 
      title: "Adaptable",
      description: "From legacy systems to bleeding-edge tech"
    },
    { 
      icon: <FiUsers className="text-glowingPink" size={24} />,
      title: "Team Sync",
      description: "Bridge between designers, PMs, and engineers"
    },
    { 
      icon: <FiZap className="text-glowingPink" size={24} />,
      title: "Fast AF",
      description: "Optimized bundles • 60fps animations • Zero lag"
    },
    { 
      icon: <FiEye className="text-glowingPink" size={24} />,
      title: "Pixel Police",
      description: "1px offsets? Unmatched fonts? Not on my watch."
    },
    { 
      icon: <FiCpu className="text-glowingPink" size={24} />,
      title: "Tech Agnostic",
      description: "React/Vue/Svelte? JS/TS? Bring it on."
    },
    { 
      icon: <FiClock className="text-glowingPink" size={24} />,
      title: "Time Alchemist",
      description: "Estimate accurately • Deliver early"
    },
    { 
      icon: <FiFeather className="text-glowingPink" size={24} />,
      title: "UX Whisperer",
      description: "I obsess over intuitive flows"
    }
  ];

  const handleFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    
    // Toggle current card
    newFlippedCards[index] = !newFlippedCards[index];
    
    // If another card was flipped, unflip it
    if (lastFlippedIndex !== null && lastFlippedIndex !== index) {
      newFlippedCards[lastFlippedIndex] = false;
    }
    
    setFlippedCards(newFlippedCards);
    setLastFlippedIndex(newFlippedCards[index] ? index : null);
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-center text-glowingPink font-mono uppercase text-sm mb-8 tracking-widest">
          My Superpowers
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              onClick={() => handleFlip(index)}
              className="h-32 w-full [perspective:1000px] cursor-pointer group"
            >
              <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
              }`}>
                {/* Front Side */}
                <div className={`
                  absolute w-full h-full [backface-visibility:hidden] 
                  bg-darkBackground/50 border-2 rounded-lg p-4 
                  flex flex-col items-center justify-center gap-2
                  ${flippedCards[index] ? 'border-glowingPink' : 'border-glowingPink/30'}
                  group-hover:shadow-[0_0_15px_rgba(255,60,172,0.4)]
                  group-hover:-translate-y-1
                  transition-all duration-300
                `}>
                  <div>{skill.icon}</div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-center">
                    {skill.title}
                  </h4>
                  <span className="text-xs text-glowingPink/80 mt-1">
                    {flippedCards[index] ? "Click to close" : "Click to flip"}
                  </span>
                </div>
                
                {/* Back Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] 
                  bg-darkBackground/70 border-2 border-glowingPink rounded-lg p-4 
                  flex items-center justify-center">
                  <p className="text-xs text-center leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeroMain;