document.addEventListener('DOMContentLoaded', function() {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const dynamicText = document.getElementById('dynamicText');

    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = 'Text Changed!';
    });
});
