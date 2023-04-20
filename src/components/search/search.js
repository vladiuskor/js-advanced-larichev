import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
    constructor(state) {
        super()
        this.state = state;
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text" 
                    class="search__input"
                    placeholder="Знайти книгу або автора ..." 
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/search.svg" alt="Іконка пошуку" />
            </div>
            <button aria-label="Шукати">
                <img src="/static/search-white.svg" alt="Іконка пошуку" />
            </button>
        `;

        return this.el;
    }
}