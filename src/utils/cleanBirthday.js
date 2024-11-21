export const cleanBirthday = (date) => {
    const newDate = date.split('');
    const clearDate = newDate.map((number, index) =>
        index <= 4 ? ""
            : number
        )
    return clearDate.join('');
}