function solution(phone_book) {
    const sortPhoneBook = phone_book.sort();
    
    for (let i=0; i<sortPhoneBook.length-1; i++) {
        const len = sortPhoneBook[i].length;
        if (sortPhoneBook[i] === sortPhoneBook[i+1].slice(0, len)) return false;
    } 
    
    return true;
}