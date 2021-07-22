export interface Items {
  id: number;
  active: boolean;
  categories: Array<string>;
  description: string;
  iconPath: string;
  inStore: boolean;
  isEnchantment: boolean;
  maxStacks: number;
  name: string;
  price: number;
  priceTotal: number;
  requiredAlly: string;
  requiredBuffCurrencyCost: number;
  requiredBuffCurrencyName: string;
  requiredChampion: string;
  specialRecipe: number;
  from: Array<number>;
  to: Array<number>;
}
