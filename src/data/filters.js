const FILTER_ALL = "All";
const FILTER_BY_INCREASED = "Increased";
const FILTER_BY_SALARY_MORE_1000 = "SalaryMore1000";

export const filterBtns = [
    { name: FILTER_ALL, label: "Все сотрудник" },
    { name: FILTER_BY_INCREASED, label: "Сотрудники на повышение" },
    { name: FILTER_BY_SALARY_MORE_1000, label: "З/п больше 1000$" },
];

const filters = {
    FILTER_ALL,
    FILTER_BY_INCREASED,
    FILTER_BY_SALARY_MORE_1000,
};

export default filters;
