
type Product = {
    id: string;
    productLogo: string;
    productName: string[];
    description: string;
    productFilePath: string;
    price: number;
    version: string;
    releaseOn: string; // or Date if you're converting it later
    createdOn: string; // or Date if you're converting it later
    supportedOS: string;
    supportedLanguage: string;
    videoLink: string;
    screenshots: string[];
    licensePlans: LicensePlans[]
  };

type LicensePlans = {
  planId: string;
  planName: string;
  isSingleMachine: boolean;
  isMultiMachine: boolean;
  singleMachinePrice: number;
  multiMachinePrice: number;
}