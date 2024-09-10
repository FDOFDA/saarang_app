import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./design/form_style.css";

export const MyForm = () => {
  interface FormData {
    fullName: string;
    age: number;
  }

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    age: yup.number().positive().required().integer(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onEntry = (formdata: FormData) => {
    console.log(formdata);
  };

  return (
    <div>
      <div className="bg-image d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={handleSubmit(onEntry)} className="card p-4 shadow-sm" id="container1">
          <h2 className="text" id="title" style={{ textAlign: "left", marginLeft: 20, marginBottom: 0 }}>
            SIGNUP
          </h2>
          <h3 className="text mb-4" style={{ fontSize: 20, textAlign: "left", marginLeft: 20, marginBottom: 0 }}>
            Register using smail for amazing Discounts
          </h3>

          <input
            type="text"
            placeholder="Enter your name*"
            className={`form-control height mt-3 ${errors.fullName ? "is-invalid" : ""}`} // Add 'is-invalid' class if there's an error
            style={{ borderRadius: 50 }}
            {...register("fullName")}
          />
          {errors.fullName && <div className="invalid-feedback">Name is required</div>}

          <input
            type="text"
            placeholder="Enter your name*"
            className={`form-control height mt-3 ${errors.fullName ? "is-invalid" : ""}`}
            style={{ borderRadius: 50 }}
            {...register("fullName")}
          />
          {errors.fullName && <div className="invalid-feedback">Name is required</div>}

          <input
            type="text"
            placeholder="Enter your name*"
            className={`form-control height mt-3 ${errors.fullName ? "is-invalid" : ""}`}
            style={{ borderRadius: 50 }}
            {...register("fullName")}
          />
          {errors.fullName && <div className="invalid-feedback">Name is required</div>}

          <input
            type="text"
            placeholder="Enter your name*"
            className={`form-control height mt-3 ${errors.fullName ? "is-invalid" : ""}`}
            style={{ borderRadius: 50 }}
            {...register("fullName")}
          />
          {errors.fullName && <div className="invalid-feedback">Name is required</div>}

          <input
            type="number"
            placeholder="Enter your Age*"
            className={'form-control height mt-3 ${errors.fullName ? "is-invalid" : ""}'}
            style={{ borderRadius: 50 }}
            {...register("age")}
          />
          {errors.age && <div className="invalid-feedback">Age is required</div>}

          <button
            type="submit"
            className="btn btn-primary submit-btn center mx-auto"
            style={{ borderRadius: 25, height: 50 }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
