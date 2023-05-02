
export class MyLink extends HTMLAnchorElement {
    public static is = 'my-link';

    protected connectedCallback(): void {
        this.classList.add('my-link');
    }
}