import { combineDataProviders } from "react-admin";
import { customerDataProvider } from "./customer";
import { addressDataProvider } from "./address";
import { productDataProvider } from "./product";
import { productModelDataProvider } from "./product_model";
import { productCategoryDataProvider } from "./product_category";
import { dashboardDataProvider } from "./dashboard";
import { userDataProvider } from "./user";
import { casbinRuleDataProvider } from "./casbin_rule";

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
  } else if (resource === "users") {
    return userDataProvider;
  } else if (resource === "casbin_rule") {
    return casbinRuleDataProvider;
  }
  throw new Error(`invalid resource: ${resource}`);
});
