import { BiXCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Transition from "../Compenents/Transition";
import { useEffect, useRef, useState } from "react";

function Terminal() {
  const [input, setInput] = useState("");
const [history, setHistory] = useState([
`
__| |_____________________________________________________________________________________________________| |__
__   _____________________________________________________________________________________________________   __
  | |                                                                                                     | |  
  | |                                                                                                     | |  
  | |    $$\\   $$\\ $$\\                                     $$\\   $$\\                    $$\\               | |  
  | |    $$$\\  $$ |\\__|                                    $$ | $$  |                   \\__|              | |  
  | |    $$$$\\ $$ |$$\\  $$$$$$\\ $$\\    $$\\  $$$$$$\\        $$ |$$  / $$$$$$\\ $$\\    $$\\ $$\\ $$$$$$$\\      | |  
  | |    $$ $$\\$$ |$$ | \\____$$\\ $$\\  $$  |$$  __$$\\       $$$$$  / $$  __$$\\ $$\\  $$  |$$ |$$  __$$\\     | |  
  | |    $$ \\$$$$ |$$ | $$$$$$$ |\\$$\\$$  / $$ /  $$ |      $$  $$<  $$$$$$$$ |\\$$\\$$  / $$ |$$ |  $$ |    | |  
  | |    $$ |\\$$$ |$$ |$$  __$$ | \\$$$  /  $$ |  $$ |      $$ |\\$$\\ $$   ____| \\$$$  /  $$ |$$ |  $$ |    | |  
  | |    $$ | \\$$ |$$ |\\$$$$$$$ |  \\$  /   \\$$$$$$  |      $$ | \\$$\\$$$$$$$\\    \\$  /   $$ |$$ |  $$ |    | |  
  | |    \\__|  \\__|\\__| \\_______|   \\_/     \______/        \\__|  \\__|\\_______|   \\_/    \\__|\\__|  \\__|    | |  
  | |                                                                                                     | |  
  | |                                                                                                     | |  
__| |_____________________________________________________________________________________________________| |__
__   _____________________________________________________________________________________________________   __
  | |                                                                                                     | |  
 
`,
"",
"Bienvenue dans cette console",
"Tapez `help` pour voir la liste des commandes disponibles."
]);
  
  const kevinPrompt = "Kevin:~$";
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  const handleCommand = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    let response = "";

    switch (trimmed.toLowerCase()) {
      case "help":
        response = `Commandes disponibles :\n  - help : Affiche cette aide\n  - about : À propos de moi\n  - service : Mes Services\n  - clear : Efface l'écran`;
        break;
      case "about":
        response = "Je suis Kevin, développeur fullstack JS junior qui se contente de faire avec React JS et Express JS, je suis actuellement à la recherche d'un stage ou d'une opportunité d'embauche pour développer d’avantage mes compétences techniques, tout en apportant mon expertise dans un environnement dynamique.";
        break;
      case "service":
        response = 'Sur ce plan, je peux créer des sites web responsives sur mesures, comme des sites vitrines, site e-catalogue, ou un application web tout simplement, n\'hésite pas à me contactez.'; 
        break;
      case "name":
        response=`${history}`;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `Commande inconnue : '${trimmed}'\nTapez \`help\` pour la liste des commandes.`;
    }

    setHistory(prev => [...prev, `${kevinPrompt} ${trimmed}`, response]);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white bg-black">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[90%] h-[60%] lg:w-[60%] lg:h-[70%] border border-white shadow-white shadow-md rounded-md overflow-hidden flex flex-col Terminal">

          {/* Header */}
          <div className="w-full h-[10%] border-b border-white flex justify-center items-center relative bg-gray-900">
            <div className="text-xl font-bold">Kevin:~</div>
            <Link to="/" className="absolute text-white right-5 top-5">
              <BiXCircle className="text-2xl transition-colors duration-200 lg:text-3xl hover:text-red-500" />
            </Link>
          </div>

          {/* Output zone */}
          <div className="flex-1 p-4 space-y-3 overflow-auto font-mono text-sm bg-black lg:text-base">
            {history.map((line, index) => (
              <pre key={index} className="overflow-x-auto leading-relaxed break-words break-all whitespace-pre">{line}</pre>
            ))}
            <div className="flex items-center mt-2 space-x-2">
              <span className="font-bold">{kevinPrompt}</span>
              <input
                ref={inputRef}
                type="text"
                className="flex-1 px-3 text-white placeholder-gray-500 bg-transparent border-none outline-none"
                value={input}
                placeholder="Entre une commande..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transition(Terminal);
