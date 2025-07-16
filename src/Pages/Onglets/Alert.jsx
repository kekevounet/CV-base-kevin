import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function TimedAlert() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Pop après 20 secondes
    const timerShow = setTimeout(() => {
      setShowAlert(true);

      // Disparition après 5 secondes
      const timerHide = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // ici tu peux changer le temps de disparition

      return () => clearTimeout(timerHide); // clean-up
    }, 20000); // ici tu changes le temps d’apparition (20s)

    return () => clearTimeout(timerShow); // clean-up
  }, []);

  return (
    <div className="p-3">
      {showAlert && (
        <Alert variant="success" className="text-center">
          🌟 Coucou, je suis là pour briller 5 secondes ! 🌟
        </Alert>
      )}
    </div>
  );
}
