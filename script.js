var name = prompt('Ismingizni kiriting:')
alert('Sizning ismingiz: ' + name)

var age = +prompt('Yoshingnizni kiriting:')
if (isNaN(age)) {
    alert('Faqat sonlarni kiriting');
}
 else if(age>0, age<=18) {
     alert( " Siz hali yoshsiz, o'qing")
 }

 else if (age>18, age<=50) {
     alert("Sho'hlikni yig'ishtirip, ishlang")
 }

 else if (age>50, age<=59) {
     alert("Ishdanham qutilip, mazza qladigon davr kelmoqda")
 }
 
 else if (age>59, age<=150) {
     alert ("Vanihoyat pensiyaga ham chiqipsiz")
 }

 else {
     alert ("Qayerdadir, nmagadir, xozirgina xatolik yuz berdi")
 }
