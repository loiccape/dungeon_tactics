import Link from "next/link";

export default function Home() {
  return (
    <main>

      <h1>Dungeon Tactics</h1>

        <div>
        <Link href="/views/pages/character_selection"><button>Nouvelle Partie</button></Link>
        <Link href="/views/pages"><button>Paramètres</button></Link>
      </div>
      
    </main>
  );
}
