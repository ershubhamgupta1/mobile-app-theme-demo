// src/components/ProductDetails.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteParamList } from '../../types';

// Define the props for the ProductDetails screen
type Props = StackScreenProps<RouteParamList, 'ProductDetails'>;

const ProductDetails: React.FC<Props> = ({ route, navigation }) => {
  const { product } = route.params;
  const { theme } = useTheme();

  if (!product) {
    return (
      <Container>
        <ProductText>Product not found</ProductText>
      </Container>
    );
  }

  return (
    <Container>
      <ProductText>{product.name}</ProductText>
      <ProductText>Price: ${product.price}</ProductText>
      <AddToCartButton
        title="Add to Cart"
        color={theme.colors.primary}
        onPress={() => navigation.navigate('Cart')}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.large}px;
  background-color: ${(props) => props.theme.colors.background};
`;

const ProductText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.medium}px;
`;

const AddToCartButton = styled(Button)``;

export default ProductDetails;
