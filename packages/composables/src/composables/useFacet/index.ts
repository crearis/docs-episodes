import { Context, useFacetFactory, FacetSearchResult } from '@vue-storefront/core';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<any>) => {

    const categories = await context.$odoo.api.getCategory({ ...params, topCategory: false });
    const products = await context.$odoo.api.getProductTemplates({ ...params.input, published: true });
    return {
      categories: categories.slice(1, 10),
      products
    };
  }
};

export default useFacetFactory<any>(factoryParams);