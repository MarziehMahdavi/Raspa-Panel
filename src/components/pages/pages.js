var items = [
    {
        title: "دستورپخت‌ها",
        pathname: "/recipes",
        iconClass: "fas fa-newspaper",
        children: [
            {
                title: "افزودن دستورپخت",
                pathname: "/recipes/add",
            },
            {
                title: "لیست دستورپخت‌ها",
                pathname: "/recipes/list",
            }

        ]

    },
    {
        title: "دسته‌بندی‌ها",
        pathname: "/categories",
        iconClass: "fas fa-hamburger",
        children: [
            {
                title: "افزودن دسته‌بندی",
                pathname: "/categories/add",
            },
            {
                title: "لیست دسته‌بندی‌ها",
                pathname: "/categories/list",
            }
        ]

    },
    {
        title: "دستورهای ارسالی",
        pathname: "/sentRecipes/list",
        iconClass: "fas fa-envelope",
        children: []

    }

]

export function getMenuItems() {
    return items;
}