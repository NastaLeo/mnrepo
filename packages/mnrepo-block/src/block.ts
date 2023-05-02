
export class MyBlock extends HTMLDivElement {
    public static is = 'my-block';

    protected connectedCallback(): void {
        this.classList.add('my-block');
        this.style.background = 'blue';
    }
}