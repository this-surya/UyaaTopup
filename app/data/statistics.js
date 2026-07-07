import {
    Users,
    ShoppingBag,
    Star,
    ShieldCheck,
  } from "lucide-react";
  
  const statistics = [
    {
      id: 1,
      icon: Users,
      value: "250K+",
      label: "Happy Customers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: ShoppingBag,
      value: "3M+",
      label: "Orders Completed",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      id: 3,
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      icon: ShieldCheck,
      value: "99.9%",
      label: "Success Rate",
      color: "from-green-500 to-emerald-500",
    },
  ];
  
  export default statistics;