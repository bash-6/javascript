class Contador extends HTMLElement {
	constructor () {
	  super();
		this.attachShadow({ mode: 'open'});
	}

	static get observedAttributes() {
		return ['limite'];
	}

	attributeChangedCallback(current,old,_new) {
		this.limite = _new;
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
		<h2><slot name="titulo"></slot></h2>
		<div>
			<button id="decrease">-</button>
			<input type="number" value="0" name="count" id="count"/>
			<button id="increase">+</button>
		</div>
		${this.getStyle()}
		`;
		return template;
	};

	getStyle() {
		return `
		<style>
		:host {
			--contador: #222;
			background-color: var(--fondoColor);
			display: block;
			padding: 7px;
		}
		h2 {
			color: var(--color);
			text-align: center;
			margin-top: .1px;
			}
		div {
			display: flex;
			padding: 5px;
			gap: 10px;
		}
		:host([dark]) {
			--botonColor: grey;
			--color: #fff;
			--contador: #222;
			--fondoColor: #333;
		}
		button {
			min-height: 50px;
			background-color: var(--botonColor);
			min-width: 50px;
			border-radius: 10px;
			border: none;
			font-size: 2.0rem;
			color: #fff;
		}
		input {
			width: 100%;
			font-size: 1.4rem;
			color: var(--contador);
			border: 1px solid var(--contador);
			/*
			flex:3;
			min-height: 40px;
			max-width: 200px;
			*/
		}
		</style>
		`;
	};

	connectedCallback() {
		this.render();

const increase = this.shadowRoot.querySelector("#increase");
const decrease = this.shadowRoot.querySelector("#decrease");
const count = this.shadowRoot.querySelector("#count");

let counter = contador(Number(count.value));

function contador( n ) {
	let count = n;

	return {
		increase: function() {
			count = count + 1;	
		},
		decrease: function() {
			count = count - 1;	
		},
		getCount: function() {
			return count;
		},
	}
}
let limit = Number(this.limite);
count.addEventListener("input", (e) => {
	if (counter <= limit) {
		counter = 0
	} else {
		counter = contador(Number(count.value));
	}
});	

increase.addEventListener("click", () => {
	let n = counter.getCount();
	if (n >= limit) {
		counter = contador(0);
		count.value = counter.getCount()
	} else {
		counter.increase()
		count.value = counter.getCount()
	}
});

decrease.addEventListener("click", () => {
	let n = counter.getCount();
	if (n <= 0) {
		counter = contador(0);
		count.value = counter.getCount()
	} else {
		counter.decrease()
		count.value = counter.getCount()
	}
});

	};

	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	};
};

//export default Contador;
customElements.define('mi-contador', Contador);
