export type CustomerData = {
  id: number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  date_of_birth: string;
  industry: string | null;
  salary: number | null;
  years_of_experience: number | null;
};

export type SortMethod =
  | "dob_ascending"
  | "dob_descending"
  | "salary_ascending"
  | "salary_descending"
  | "industry_ascending"
  | "industry_descending";

export type MenuItem = {
  label: string;
  onClick: () => void;
};
