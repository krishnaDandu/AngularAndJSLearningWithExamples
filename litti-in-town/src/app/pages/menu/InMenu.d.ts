
export interface menuInterface {
    category:string;
    categoryItems: CategoryItem[];
}

interface CategoryItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  perPlate: string;
  itemImg?: string;
}
