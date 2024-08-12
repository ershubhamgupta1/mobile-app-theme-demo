// src/components/ThemeToggleButton.tsx
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/themeProvider';
import { Spacing } from '../theme/spacing';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Toggle Theme"
        color={theme.colors.primary}
        onPress={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: Spacing.large,
  },
});

export default ThemeToggleButton;
