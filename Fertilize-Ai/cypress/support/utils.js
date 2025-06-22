// Helper function file

export const normalize = (str) => str.replace(/\s+/g, ' ').trim();

export const getParaGlobalIndex = (sections, currentSectionIndex, currentParaIndex) => {
    let count = 0;
    for (let i = 0; i < currentSectionIndex; i++) {
        count += sections[i].paragraphs.length;
    }
    return count + currentParaIndex;
};
