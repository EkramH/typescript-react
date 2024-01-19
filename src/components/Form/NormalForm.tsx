import { useForm } from "react-hook-form";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
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
          <span className="text-red-600">This field is required!</span>
        )}
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-600">This field is required!</span>
        )}
        <label htmlFor="name">Pasword</label>
        <input
          type="text"
          id="password"
          {...register("password", { minLength: 8 })}
        />
        {errors.password && <span className="text-red-600">Too short!</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
