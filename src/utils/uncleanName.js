export const uncleanName = (name) => {
    const newName = name.split('');
    const clearName = newName.map((letter, index) =>
        letter === " " ? "-"
                : letter.toLowerCase()
        )
    return clearName.join('');
}