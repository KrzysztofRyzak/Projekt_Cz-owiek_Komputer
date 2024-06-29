function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Domyślnie otwórz pierwszą zakładkę
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
});




document.addEventListener('DOMContentLoaded', function() {
    const exercise1Form = document.getElementById('exercise1');
    const exercise2Form = document.getElementById('exercise2');
    const exercise3Form = document.getElementById('exercise3');
    const exercise4Form = document.getElementById('exercise4');
    const exercise5Form = document.getElementById('exercise5');
    const exercise6Form = document.getElementById('exercise6');
    const exercise7Form = document.getElementById('exercise7');
    const exercise8Form = document.getElementById('exercise8');
    const exercise9Form = document.getElementById('exercise9');
    const exercise10Form = document.getElementById('exercise10');
    const exercise11Form = document.getElementById('exercise11');
    const exercise12Form = document.getElementById('exercise12');

    exercise1Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer1').value.trim();
        const resultElement = document.getElementById('result1');

        if (answer === '25') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise2Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer2').value.trim();
        const resultElement = document.getElementById('result2');

        if (answer === '30') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise3Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer3').value.trim().toLowerCase();
        const resultElement = document.getElementById('result3');

        if (answer === 'str') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise4Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer4').value.trim();
        const resultElement = document.getElementById('result4');

        if (answer === '10.0') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise5Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer5').value.trim();
        const resultElement = document.getElementById('result5');

        if (answer === '50') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise6Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer6').value.trim().toLowerCase();
        const resultElement = document.getElementById('result6');

        if (answer === 'true') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise7Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer7').value.trim().toLowerCase();
        const resultElement = document.getElementById('result7');

        if (answer === 'true') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise8Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer8').value.trim().toLowerCase();
        const resultElement = document.getElementById('result8');

        if (answer === 'mniejsza') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise9Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer9').value.trim();
        const resultElement = document.getElementById('result9');

        if (answer === '1 2 3 4 5') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise10Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer10').value.trim();
        const resultElement = document.getElementById('result10');

        if (answer === '2 4 6 8 10') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise11Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer11').value.trim();
        const resultElement = document.getElementById('result11');

        if (answer === 'width * height') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });

    exercise12Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('answer12').value.trim();
        const resultElement = document.getElementById('result12');

        if (answer === 'base ** exponent') {
            resultElement.textContent = 'Odpowiedź poprawna!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Odpowiedź niepoprawna. Spróbuj jeszcze raz.';
            resultElement.style.color = 'red';
        }
    });
});




