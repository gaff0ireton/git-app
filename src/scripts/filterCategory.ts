export function filterByCategory(
    cards: HTMLElement[],
    category: string
): HTMLElement[] {
    return cards.filter((card) =>
        category === 'all' || card.dataset.category === category
    );
}