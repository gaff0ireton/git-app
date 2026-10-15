export function resetCategory(btns: NodeListOf<Element>) {
    btns.forEach((btn) => {
        btn.classList.remove('is-active');
    });

    btns[0]?.classList.add('is-active');
}