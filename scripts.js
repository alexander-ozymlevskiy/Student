// Вам потрібно зробити конструктор сутності "Студент".
class Student {
  // Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
  constructor(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    // масив оцінок
    this.rating = [];
    // Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів,
    this.attendance = new Array(25).fill(null);
  }

  // Метод щоб отримати вік студента
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  // Метод щоб отримати середній бал студента
  getGPA() {
    const sum = this.rating.reduce((result, grade) => result + grade, 0);
    return sum / this.rating.length;
  }

  // Метод відвідуваності true
  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } // Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
    else {
      console.error("Кількість відвідувань обмежена до 25 записів!");
    }
  }

  // Метод відвідуваності false
  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.error("Кількість відвідувань обмежена до 25 записів!");
    }
  }

  // Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
  // і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
  // якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
  summary() {
    const averageGPA = this.getGPA();
    const averageAttendance =
      this.attendance.filter((value) => value === true).length /
      this.attendance.length;

    if (averageGPA >= 90 || averageAttendance >= 0.9) {
      return "Молодець";
    } else if (averageGPA >= 60 || averageAttendance > 0.7) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

// Екземпляри класу студент

const studentMaks = new Student("Макс", "Капрал", 2012);
studentMaks.rating = [
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 90, 90, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100,
];

for (let i = 0; i < 26; i++) {
  studentMaks.present();
}

const studentOleg = new Student("Олег", "Вінник", 1975);
studentOleg.rating = [60, 50, 70, 60, 30, 30, 40, 50, 60, 70];
for (let i = 0; i < 10; i++) {
  studentOleg.present();
}

// Виведення інформації

console.log(
  `Прізвище та ім'я студента: ${studentMaks.name} ${studentMaks.surname}`
);
console.log(`Рік народження: ${studentMaks.yearOfBirth}`);
console.log(`Середній бал: ${studentMaks.getGPA()}`);
console.log(`Вік: ${studentMaks.getAge()}`);
console.log(`Результат: ${studentMaks.summary()}`);
console.log("-----------------------------");
console.log(
  `Прізвище та ім'я студента: ${studentOleg.name} ${studentOleg.surname}`
);
console.log(`Рік народження: ${studentOleg.yearOfBirth}`);
console.log(`Середній бал: ${studentOleg.getGPA()}`);
console.log(`Вік: ${studentOleg.getAge()}`);
console.log(`Висновок: ${studentOleg.summary()}`);
