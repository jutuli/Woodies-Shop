import Tisch from '../assets/img/Tisch.png';
import Stuhl from '../assets/img/Stuhl.png';
import Schuesseln from '../assets/img/Schuesseln.png';

interface IProduct {
  id: string;
  name: string;
  img: string;
  description: string;
}

export const products: IProduct[] = [
  {
    id: 'jenson',
    name: 'Jenson',
    img: Tisch,
    description:
      "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
  },
  {
    id: 'deon',
    name: 'Deon',
    img: Stuhl,
    description:
      "Deon's a dining chair that's designed to impress. The curved back and wooden legs are a nod to the luxe life. The velvet upholstery? So soft and inviting. It's the perfect partner to our Deon dining table.",
  },
  {
    id: 'krisha',
    name: 'Krisha',
    img: Schuesseln,
    description:
      "Krisha's a set of 2 bowls that are perfect for serving up salads, pasta or snacks. They're made from wood and finished with a high-gloss lacquer. The result? A super shiny finish that's easy to wipe clean.",
  },
];
