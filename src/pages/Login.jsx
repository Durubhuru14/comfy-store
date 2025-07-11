import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const form = await request.formData();
    const data = Object.fromEntries(form);

    try {
      const response = await customFetch.post("/auth/local", data);
      toast.success("User logged in successful");
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials!";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserAsGuest = async () => {
    try {
      const response = await customFetch.post("auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Guest user logged in successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Guest login error, Please try again after some time!");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-9/10 max-w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="LOGIN" />
        </div>
        <button type="button" className="btn btn-secondary btn-block" onClick={loginUserAsGuest}>
          GUEST USER
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
