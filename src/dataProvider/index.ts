import { combineDataProviders } from "react-admin";
import { customerDataProvider } from "./customerDataProvider";
import { addressDataProvider } from "./addressDataProvider";
import { productDataProvider } from "./productDataProvider";
import { productModelDataProvider } from "./productModelDataProvider";
import { productCategoryDataProvider } from "./productCategoryDataProvider";
import { dashboardDataProvider } from "./dashboardDataProvider";

export const dataProvider = combineDataProviders((resource) => {
  if (resource === "dashboard") {
    return dashboardDataProvider;
  } else if (resource === "customers") {
    return customerDataProvider;
  } else if (resource === "addresses") {
    return addressDataProvider;
  } else if (resource === "products") {
    return productDataProvider;
  } else if (resource === "product_models") {
    return productModelDataProvider;
  } else if (resource === "product_categories") {
    return productCategoryDataProvider;
  }
  throw new Error(`invalid resource: ${resource}`);
});
