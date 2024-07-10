import { Bean } from "./Bean";

export type PayloadBeans = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: Bean[];
};
