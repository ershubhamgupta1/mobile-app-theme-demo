// src/components/Cart.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const Cart: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useTheme();
  // For simplicity, let's assume we have an array of cart items
  const cartItems = [
    { id: '1', name: 'Product 1', price: 10, quantity: 2 },
    // Add more cart items...
  ];

  return (
    <Container>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemText>{item.name} x {item.quantity}</ItemText>
            <ItemText>${item.price * item.quantity}</ItemText>
          </CartItem>
        ))
      ) : (
        <Text style={{ color: theme.colors.text }}>Your cart is empty</Text>
      )}
      <CheckoutButton
        title="Checkout"
        color={theme.colors.primary}
        onPress={() => navigation.navigate('Checkout')}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.spacing.large}px;
  background-color: ${(props) => props.theme.colors.background};
`;

const CartItem = styled.View`
  background-color: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.medium}px;
  margin-bottom: ${(props) => props.theme.spacing.small}px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;

const CheckoutButton = styled(Button)``;

export default Cart;
