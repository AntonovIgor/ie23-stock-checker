import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  customButton: {    
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#B60691',
    marginTop: 30
  },
  disabled: {
    opacity: 0.5
  },
  customButtonText: {    
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});