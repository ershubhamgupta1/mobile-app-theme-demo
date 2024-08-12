export interface Theme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      card: string;
      border: string;
      // Add more colors as needed
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
      xLarge: number;
    };
}

export type RouteParamList = {
    ProductList: {product: any};
    ProductDetails: {product: any};
    Cart: undefined;
}