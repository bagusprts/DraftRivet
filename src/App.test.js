// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftRivet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftRivet/i);
    expect(titleElement).toBeInTheDocument();
});
