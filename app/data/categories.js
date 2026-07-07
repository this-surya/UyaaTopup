import {
    Sword,
    Crosshair,
    Shield,
    Sparkles,
    Gift,
    CreditCard,
    Coins,
    Gamepad2,
  } from "lucide-react";
  
  const categories = [
    {
      id: 1,
      name: "MOBA",
      icon: Gamepad2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "FPS",
      icon: Crosshair,
      color: "from-red-500 to-orange-500",
    },
    {
      id: 3,
      name: "Battle Royale",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "RPG",
      icon: Sword,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      id: 5,
      name: "Anime",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      name: "Voucher",
      icon: CreditCard,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      name: "Gift Card",
      icon: Gift,
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 8,
      name: "Coins",
      icon: Coins,
      color: "from-amber-500 to-yellow-500",
    },
  ];
  
  export default categories;