const FILTER_ALL = "All";
const FILTER_BY_INCREASED = "Increased";
const FILTER_BY_SALARY_MORE_1000 = "SalaryMore1000";
const FILTER_BY_LIKED = "Liked"
export const filterBtns = [
    {name: FILTER_BY_LIKED, label: "Избранные"},
    { name: FILTER_ALL, label: "Все сотрудники" },
    { name: FILTER_BY_INCREASED, label: "Сотрудники на повышение" },
    { name: FILTER_BY_SALARY_MORE_1000, label: "З/п больше 1000$" },
];

const filters = {
    FILTER_ALL,
    FILTER_BY_INCREASED,
    FILTER_BY_SALARY_MORE_1000,
    FILTER_BY_LIKED
};

export default filters;
