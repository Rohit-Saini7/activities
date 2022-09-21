export const FIELD_TEMPLATE = [
  {
    datafield: "title",
    type: "input",
    display: "Title",
    placeholder: "Idea title",
    required: true,
  },
  {
    datafield: "description",
    type: "input",
    display: "Description",
    placeholder: "Describe your idea",
    required: true,
    rows: 10,
    multiline: true,
  },
  ,
  {
    datafield: "users",
    type: "userlist",
    display: "Member",
    placeholder: "Select team members",
    options: [],
    fieldName: "displayName",
  },
  {
    datafield: "status",
    type: "select",
    display: "Status",
    placeholder: "Status",
    options: [],
    fieldName: "label",
    fieldValue: "id",
  },
];