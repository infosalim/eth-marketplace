import courses from './index.json';

export const getAllCourse = () => {
    return {
        data: courses,
        // reduce(accumulator, data, iteration)
        courseMap: courses.reduce((a, c, i) => {
            a[c.id] = c;
            a[c.id].index = i;
            return a;
        }, {})
    }
}