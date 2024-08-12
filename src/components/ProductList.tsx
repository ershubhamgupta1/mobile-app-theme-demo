// src/components/ProductList.tsx
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const products = [
  { id: '1', name: 'Product 1', price: 10 },
  { id: '2', name: 'Product 2', price: 20 },
  // Add more products here...
];

const ProductList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard>
          <ProductName>{item.name}</ProductName>
          <ProductPrice>${item.price}</ProductPrice>
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <ButtonText>View Details</ButtonText>
          </TouchableOpacity>
        </ProductCard>
      )}
      contentContainerStyle={{ backgroundColor: theme.colors.background, padding: theme.spacing.medium }}
    />
  );
};

const ProductCard = styled.View`
  background-color: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.medium}px;
  margin-bottom: ${(props) => props.theme.spacing.small}px;
  border-radius: 8px;
`;

const ProductName = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.small}px;
`;

const ProductPrice = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: ${(props) => props.theme.spacing.medium}px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

export default ProductList;
