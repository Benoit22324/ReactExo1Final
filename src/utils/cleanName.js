export const cleanName = (name) => {
    const newName = name.split('');
    const clearName = newName.map((letter, index) =>
        index === 0 ? letter.toUpperCase()
            : letter === "-" ? " "
                : letter
        )
    return clearName.join('');
}