import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ZodSchema } from "zod";
import { Button } from "../Button/Button";

interface Props<T> {
  children: React.ReactNode;
  schema: ZodSchema;
  defaultValues: Record<string, string>;
  submitButtonText?: string;
  onSubmit: (data: T) => void;
}

export function Form<T>(props: Props<T>) {
  const useFormMethods = useForm({
    resolver: zodResolver(props.schema),
    defaultValues: props.defaultValues
  });

  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={useFormMethods.handleSubmit(props.onSubmit)}>
        {/* Form fields go here */}
        {props.children}
        {/* Example: <FormInputField label='Email' name='email' /> */}
        {/* You can use the useFormMethods to register inputs */}
        {/* <input {...useFormMethods.register("email")} /> */}

        {/* Submit button */}
        <div>
          <Button role="submit-button" type='submit' text={props.submitButtonText ?? "OK"} />
        </div>
      </form>
    </FormProvider>
  );
}
