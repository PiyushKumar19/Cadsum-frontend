
type Product = {
    id: string;
    productLogo: string;
    productName: string[];
    description: string;
    price: number;
    version: string;
    releaseOn: string; // or Date if you're converting it later
    createdOn: string; // or Date if you're converting it later
    supportedOS: string;
    supportedLanguage: string;
    screenshots: string[];
    licensingPlans: LicensePlans[]
  };

type LicensePlans = {
  planId: string;
  planName: string;
  planPrice: number;
  isSingleMachine: boolean;
  isMultiMachine: boolean;
}