// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SoliditySpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SoliditySpark/i);
    expect(titleElement).toBeInTheDocument();
});
