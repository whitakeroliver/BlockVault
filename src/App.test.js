// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockVault/i);
    expect(titleElement).toBeInTheDocument();
});
