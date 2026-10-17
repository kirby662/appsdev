type RecipeMetaProps = {
  cuisine: string;
  mealType: string[];
  difficulty: string;
  cookTimeMinutes: number;
};

export default function RecipeMeta({ cuisine, mealType, difficulty, cookTimeMinutes }: RecipeMetaProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
      <div><dt className="text-xs text-muted">Cuisine</dt><dd className="mt-1 font-semibold text-ink">{cuisine}</dd></div>
      <div><dt className="text-xs text-muted">Meal type</dt><dd className="mt-1 font-semibold text-ink">{mealType.join(", ")}</dd></div>
      <div><dt className="text-xs text-muted">Difficulty</dt><dd className="mt-1 font-semibold text-ink">{difficulty}</dd></div>
      <div><dt className="text-xs text-muted">Cook time</dt><dd className="mt-1 font-semibold text-ink">{cookTimeMinutes} mins</dd></div>
    </dl>
  );
}
