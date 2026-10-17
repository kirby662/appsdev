import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import RecipeMeta from "@/components/common/recipe-meta";

type RecipeCardProps = {
  id: string;
  image: string;
  name: string;
  cuisine: string;
  mealType: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  cookTimeMinutes: number;
  tags: string[];
  onDelete: (id: string) => void;
};

export default function RecipeCard({id, image, name, cuisine, mealType, difficulty, cookTimeMinutes, tags, onDelete}: RecipeCardProps) {
  return (
    <Card className="flex h-full flex-col transition-colors hover:border-cobalt/60">
      <div className="h-56 overflow-hidden bg-cobalt-soft">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="text-xl font-bold tracking-tight text-ink">{name}</h3>

        <RecipeMeta
          cuisine={cuisine}
          mealType={mealType}
          difficulty={difficulty}
          cookTimeMinutes={cookTimeMinutes}
        />

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
          <Link to={`/recipe/${id}`}>
            <Button className="w-full">View</Button>
          </Link>
          <Button onClick={() => onDelete(id)} className="bg-tomato-soft text-tomato hover:bg-tomato hover:text-white">
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
