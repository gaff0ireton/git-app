export function updateCards(
    cards: HTMLElement[],
    filteredCards: HTMLElement[]
) {
    const numberText = document.querySelector('.number-text');
    const emptyText = document.querySelector<HTMLElement>('.empty-result');
    const list = document.querySelector<HTMLElement>('.command-list');

    if (numberText) {
        numberText.textContent = `全${filteredCards.length}件`;
    }

    if (emptyText) {
        emptyText.hidden = filteredCards.length > 0;
    }

    if (list) {
        list.hidden = filteredCards.length === 0;
    }

    cards.forEach((card) => {
        card.classList.toggle('is-not', !filteredCards.includes(card));
    });
}

export function updateActiveButton(
    buttons: NodeListOf<HTMLButtonElement>,
    selectedButton: HTMLButtonElement
): void {
    buttons.forEach((button) => {
        button.classList.toggle(
            'is-active',
            button === selectedButton
        );
    });
}