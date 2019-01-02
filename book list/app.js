// BOOK CLASS: REPRESENTS A BOOK
class Book {
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// UI CLASS: HANDLES UI TASKS
class UI{

	static displayBooks(){
		let books = [{
			title: 'Livro',
			author: 'Victor',
			isbn: 123456
		},{
			title: 'Livro',
			author: 'Victor',
			isbn: 123456
		},{
			title: 'Livro',
			author: 'Victor',
			isbn: 123456
		}];

		books.forEach( book => UI.addListItem(book) );
	}

	static clearFields(){
		document.querySelector('#bookTitle').value = '';
		document.querySelector('#bookAuthor').value = '';
		document.querySelector('#bookIsbn').value = '';
	}

	static addListItem(book){
		const bookList = document.querySelector('#list');
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href="#" class="delete">X</a></td>
		`;
		bookList.appendChild(row);
	}

	static removeListItem(el){
		if( el.classList.contains('delete') ){
			el.parentElement.parentElement.remove();
		}
	}
}


// STORE CLASS: HANDLES STORAGE


// EVENT: ADDING A BOOK
document.querySelector('#bookRegisterForm')
	.addEventListener('submit', e => {
		e.preventDefault();
		
		const title = document.querySelector('#bookTitle').value;
		const author = document.querySelector('#bookAuthor').value;
		const isbn = document.querySelector('#bookIsbn').value;

		const book = new Book(title, author, isbn);

		UI.addListItem(book);
		UI.clearFields();
	});

// EVENT: DISPLAYS BOOKLIST WHEN PAGE STARTS
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// EVENT: REMOVING A BOOK
document.querySelector('#list')
	.addEventListener('click', e => {
		e.preventDefault();
		UI.removeListItem(e.target);
	});