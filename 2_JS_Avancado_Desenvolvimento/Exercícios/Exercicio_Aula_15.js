const cards = document.querySelectorAll('.card');
const colunas = document.querySelectorAll('.coluna');

cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);;
    });
});


colunas.forEach(coluna => {
    coluna.addEventListener('dragover', (e) => {
        e.preventDefault();
        coluna.classList.add('dragover');
    });

    coluna.addEventListener('dragleave', () => {
        coluna.classList.remove('dragover');
    });

    coluna.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const draggedElement = document.getElementById(data);
        const dropArea = coluna.querySelector('.cardsColuna');
        dropArea.appendChild(draggedElement);
        coluna.classList.remove('dragover');
    });
});
