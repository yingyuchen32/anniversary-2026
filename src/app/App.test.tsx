import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('./components/Globe', () => ({
  Globe: ({ globeVisible = true }: { globeVisible?: boolean }) => (
    <div data-testid="globe" data-visible={String(globeVisible)} />
  ),
}));

describe('App', () => {
  it('renders the landing content and globe layer', () => {
    render(<App />);

    expect(screen.getByText('來自台灣，連結世界')).toBeInTheDocument();
    expect(screen.getByText('世界的台灣')).toBeInTheDocument();
    expect(screen.getByText('台灣精神，台灣 team！')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '↩ 回首頁' })).toBeInTheDocument();
    expect(screen.getByTestId('globe')).toHaveAttribute('data-visible', 'true');
  });
});
