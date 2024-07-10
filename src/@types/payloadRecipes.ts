import { Recipe } from "./Recipe";

export type payloadRecipes = {
  currentPage: number;
  items: Recipe[];
  pageSize: number;
  totalCount: number;
  totalPages: number;
};
