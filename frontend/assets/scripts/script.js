export default class Form {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const inputFile = el.querySelector('input[name="file"]');
        const inputFileSplit = inputFile.value.split('.');
        const extension = inputFileSplit[1];
        let error = false;

        if (!inputFile.value) {
            this.message('Please select a file first')
            error = true;
            return;
        };

        if (extension !== 'xls') {
            this.message('File extension must be .XLS')
            error = true;
            return;
        }

        if (!error) el.submit();
    }

    message(msg) {
        const submitBtn = document.querySelector('.submit-btn');
        const section = document.querySelector('.container');
        const createField = document.createElement('p');
        createField.setAttribute('class', 'message');
        createField.innerHTML = msg;
        section.appendChild(createField);
        submitBtn.setAttribute('disabled', true);

        setTimeout(() => {
            createField.remove();
            submitBtn.removeAttribute('disabled');
        }, 2000);
        
    }
}


