export const SortArrayByDates = <T>(element: T[] = [], type: string) => {
    const compareDates = (a: T, b: T) => {
        const A = new Date(a[type as keyof typeof a] as string);
        const B = new Date(b[type as keyof typeof a] as string);

        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
    };

    return element.sort(compareDates);
};
export const Sort = <T>(element: T[] = [], type: string, direction = 'DESC') => {
    const compare = (a: T, b: T) => {
        const A = a[type as keyof typeof a];
        const B = b[type as keyof typeof a];


        if (direction === 'DESC') {
            if (A > B) return -1;
            if (A < B) return 1;
        } else {
            if (A < B) return -1;
            if (A > B) return 1;
        }

        return 0;
    };

    return element.sort(compare);
};
export const SortByAlphabet = <T>(element: T[] = [], type: string) => {
    const compare = (a: T, b: T) => {
        const A = (a[type as keyof typeof a] as string);
        const B = (b[type as keyof typeof a] as string);


        if (A.toLowerCase() < B.toLowerCase()) return -1;
        if (A.toLowerCase() > B.toLowerCase()) return 1;

        return 0;
    };

    return element.sort(compare);
};