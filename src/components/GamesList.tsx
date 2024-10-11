import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const games = [
  {
    title: "Pac-Man",
    description: "Iconic maze chase game",
    image: "https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Space Invaders",
    description: "Classic alien shooter",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Tetris",
    description: "Addictive puzzle game",
    image: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Galaga",
    description: "Space shooter classic",
    image: "https://images.unsplash.com/photo-1642645495047-bc16bc5f7d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const GamesList = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Popular Retro Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <Card key={index} className="retro-border">
            <CardHeader>
              <CardTitle className="text-primary">{game.title}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">Play Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GamesList;