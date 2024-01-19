import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpForm = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email().min(1, { message: "Email is required!" }),
  password: z.string().min(8, { message: "Password is to short!" }),
});

type NormalForm = z.infer<typeof signUpForm>;

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NormalForm>({ resolver: zodResolver(signUpForm) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
        <label htmlFor="name">Pasword</label>
        <input
          type="text"
          id="password"
          {...register("password", { minLength: 8 })}
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
