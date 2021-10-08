class universalDate {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const dayFormatted = parts.day.toString().padStart(2, "0");
        const monthFormatted = parts.month.toString().padStart(2, "0");
        const dateFormatted = `${monthFormatted}/${dayFormatted}/${parts.year}`;

        this.element.querySelector(".date-current").textContent = dateFormatted;
    }

    getTimeParts() {
        const now = new Date();

        return {
            day: now.getDate(),
            month: now.getMonth() + 1,
            year: now.getFullYear()
            // isAm: now.getHours() < 12
        };
    }
}

const dateElement = document.querySelector(".date");
const dateObject = new universalDate(dateElement);

dateObject.start();