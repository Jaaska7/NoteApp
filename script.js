const newNoteButton = document.querySelector('.newNote');
const container = document.querySelector('.limiter');
let noteCount = 0;

newNoteButton.addEventListener('click', () => {
    if (noteCount < 6) {
        const newNoteElement = document.createElement('div');
        newNoteElement.classList.add('notes');

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

        newNoteElement.innerHTML = `
            <div class="title">
                <input type="text" placeholder="Title">
            </div>
            <div class="text">
                <textarea type="text" placeholder="Enter the text in here"></textarea>
            </div>
            <hr>
            <div class="extras">
                <div class="date">
                    <p>${formattedDate}</p>
                </div>
                <div class="delete">
                    <div class="delate">
                        <img src="https://www.pngmart.com/files/17/Waste-Garbage-Can-Vector-PNG-Clipart.png" alt="">
                    </div>
                </div>
            </div>
        `;

        container.appendChild(newNoteElement);
        noteCount++;

        if (noteCount === 6) {
            newNoteButton.style.display = 'none';
        }

        const deleteButton = newNoteElement.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            container.removeChild(newNoteElement);
            noteCount--;

            if (noteCount < 4) {
                newNoteButton.style.display = 'grid';
            }
        });
    }
});
