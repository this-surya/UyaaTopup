import games from "@/app/data/games";
import userFields from "@/app/data/userfield";
import products from "@/app/data/products";
import payments from "@/app/data/payments";

import { notFound } from "next/navigation";

import GameHero from "@/app/components/game/GameHero/GameHero";
import UserForm from "@/app/components/game/UserForm/UserForm";
import ProductGrid from "@/app/components/game/ProductGrid/ProductGrid";
import PaymentMethod from "@/app/components/game/PaymentMethod/PaymentMethod";
import OrderSummary from "@/app/components/game/OrderSummary/OrderSummary";

export default async function GamePage({ params }) {
  const { slug } = await params;

  // Cari game berdasarkan slug
  const game = games.find((item) => item.slug === slug);

  console.log(game);

  if (!game) {
    notFound();
  }

  // Ambil konfigurasi form berdasarkan slug
  const fields = userFields[slug] || [];
  const gameProducts = products[game.slug] || [];



  return (
    <main className="min-h-screen bg-[#08111F]">
      <GameHero game={game} />

      <UserForm
        game={game}
        fields={fields}
      />

      <ProductGrid
          products={gameProducts}
      />
      <PaymentMethod payments={payments} />
      <OrderSummary game={game}  fields={fields}/>
    </main>
  );
}