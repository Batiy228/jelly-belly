export type Recipe = {
  recipeId: number;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  makingAmount: string;
  imageUrl: string;
  ingredients: string[];
  additions1: string[];
  additions2: string[];
  additions3: string[];
  directions: string[];
  tips: string[];
};
