export const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested 1",
          isFolder: true,
          items: [
            { name: "index.html", isFolder: false },
            { name: "hello.html", isFolder: false },
          ],
        },
        {
          name: "public_nested_fle",
          isFolder: false,
        },
      ],
    },

    {
      name: "src",
      isFolder: true,
      items: [
        { name: "App.js", isFolder: false },
        {
          name: "index.js",
          isFolder: false,
        },
        {
          name: "style.js",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export const RecursiveDropdown = () => {
  return <></>;
};
