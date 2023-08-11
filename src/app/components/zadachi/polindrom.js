// function isPalindrome(str) {
//     // удаление всех символов кроме букв и цифр и приведение строки к нижнему регистру
//     let processedStr = str.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase()

//     // установка начальных значений переменных start и end
//     let start = 0
//     let end = processedStr.length - 1

//     // проверка палиндрома
//     while (start < end) {
//         // сравнение символов из начала и конца строки
//         if (processedStr.charAt(start) !== processedStr.charAt(end)) {
//             return false
//         }
//         // если символы совпадают, переменные start и end сдвигаются
//         start++
//         end--
//     }

//     // если цикл завершился и функция не вернула false, строка является палиндромом
//     return true
// }

// function isPalindrome(str) {
//     // установка начальных значений переменных left и right
//     let left = 0
//     let right = str.length - 1

//     while (left < right) {
//         // убедиться, что оба символа являются буквами или цифрами
//         while (left < right && !/[\p{L}\p{N}]/u.test(str[left])) {
//             left++
//         }
//         while (left < right && !/[\p{L}\p{N}]/u.test(str[right])) {
//             right--
//         }
//         // сравнить символы из начала и конца строки
//         if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//             return false
//         }
//         // если символы совпадают, переменные left и right сдвигаются
//         left++
//         right--
//     }
//     // если цикл завершился и функция не вернула false, строка является палиндромом
//     return true
// }

// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^\p{L}\d]/gu, "") // преобразование строки в нижний регистр и удаление всех символов, которые не являются буквами или цифрами
//     return str === str.split("").reverse().join("") // сравнение перевернутой исходной строки с оригинальной строкой
// }

// console.log(isPalindrome("Казак")) // true
// console.log(isPalindrome("А роза упала на лапу Азора")) // true
// console.log(isPalindrome("Do geese see God?")) // true
// console.log(isPalindrome("Madam, I'm Adam.")) // true

// function isPalindrome(str) {
//     function removeNonAlphanumeric(str) {
//         let result = ""
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i]
//             if (char.match(/[\p{L}\d]/gu)) {
//                 result += char
//             }
//         }
//         return result.toLowerCase()
//     }

//     str = removeNonAlphanumeric(str) // преобразование строки в нижний регистр и удаление всех символов, которые не являются буквами или цифрами

//     let left = 0 // установка начальных значений переменных left и right
//     let right = str.length - 1

//     while (left < right) {
//         // пока left меньше чем right выполняем цикл
//         if (str[left] !== str[right]) {
//             // если символы не равны, строка не является палиндромом
//             return false
//         }

//         left++ // увеличение left
//         right-- // уменьшение right
//     }

//     return true // если цикл завершен, строка является палиндромом
// }

// function isPalindrome(str) {
//     // Удаление всех символов, кроме букв и цифр, и приведение строки к нижнему регистру
//     str = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")

//     // Итерация по строке с двух концов до середины
//     let left = 0
//     let right = str.length - 1
//     while (left < right) {
//         if (str.charAt(left) !== str.charAt(right)) {
//             // Если символы не равны, значит строка не является палиндромом
//             return false
//         }
//         left += 1
//         right -= 1
//     }
//     // Если цикл завершен, значит строка является палиндромом
//     return true
// }

// console.log(isPalindrome("Казак")) // true
// console.log(isPalindrome("А роза упала на лапу Азора")) // true
// console.log(isPalindrome("Do geese see God?")) // true
// console.log(isPalindrome("Madam, I'm Adam.")) // true

// // функция поиска вариантов перелетов из точки
// function fetchFlights(from: string): Promise<string[]>

// // Например, для
// //graph = {A: [B, D], B: [C, N, Z], D: [E, F], F: [S]}

// findPath('A', 'N', fetchFlights) // Promise.resolve(['A', 'B', 'N'])
// findPath('A', 'S', fetchFlights) // Promise.resolve(['A', 'D', 'F', 'S'])
// findPath('B', 'S', fetchFlights) // Promise.reject(new Error('No way')))

// // функция поиска составного авиабилета
// async function findPath(from, to, fetchFlights) {
//   // базовый случай
//   if (from === to) {
//     return [to];
//   }
  
//   // получаем возможные рейсы из текущего города
//   const flights = await fetchFlights(from);
  
//   // для каждого возможного пункта назначения попробуйте найти путь к пункту назначения
//   for (let i = 0; i < flights.length; i++) {
//     const flight = flights[i];
//     if (flight !== from) {
//       const path = await findPath(flight, to, fetchFlights);
//       if (path !== null) {
//         return [from, ...path];
//       }
//     }
//   }
  
//   // путь не найден из этого города
//   return null;
// }

