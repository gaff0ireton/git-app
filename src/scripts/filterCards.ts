export function filterCards(cards: HTMLElement[], keyword: string) {
    const normalized = keyword.trim().toLowerCase();

    return cards.filter((card) => {
        const text = (card.textContent ?? '').toLowerCase();
        return text.includes(normalized);
    });
}