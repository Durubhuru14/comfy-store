import { useLoaderData, Form, Link } from "react-router-dom";
import { FormCheckbox, FormInput, FormRange, FormSelect } from ".";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type={"search"}
        label={"search product"}
        name={"search"}
        size={"input-sm"}
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label={"select category"}
        name={"category"}
        list={meta.categories}
        size={"select-sm"}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label={"select company"}
        name={"company"}
        list={meta.companies}
        size={"select-sm"}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label={"sort by order"}
        name={"order"}
        list={["a-z", "z-a", "high", "low"]}
        size={"select-sm"}
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        label={"select price"}
        name={"price"}
        size={"range-sm"}
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckbox
        label={"free shipping"}
        name={"shipping"}
        size={"checkbox-sm"}
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        search
      </button>
      <Link to={"/products"} className="btn btn-accent btn-sm uppercase">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
