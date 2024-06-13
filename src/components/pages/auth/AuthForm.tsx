import Button from "@/components/core/button/Button";
import TextInput from "@/components/core/inputs/TextInput";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { AuthFormType } from "@/models/AuthForm.type";

import { useFormik } from "formik";
import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";
import Link from "next/link";
import { AuthFormValidation } from "@/libs/validation/Authform.validate";

type AuthFormProps = {
  handleDataSubmit?: Function;
};

const singInerrors: any = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  AccessDenied: "User is already registered with this e-mail address.",
  default: "Unable to sign in.",
};

const SignInError = ({ error }: { error: any }) => {
  // console.log(error)
  const errorMessage = error && (singInerrors?.[error] ?? singInerrors.default);
  return <>{errorMessage}</>;
};

const AuthForm: FC<AuthFormProps> = ({ handleDataSubmit }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // const router = useRouter();
  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      group: "CANDIDATE",
    },
    validationSchema: AuthFormValidation,
    onSubmit: async (data: AuthFormType) => {
      try {
        if (handleDataSubmit) {
          await handleDataSubmit(data);
        }
        console.log(data);
        await signIn("credentials", {
          // redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl: "/",
        });
        toast({
          variant: "success",
          description: "Logged in successfully !",
        });
        resetForm();
      } catch (err: any) {
        for (let key of err.errors) {
          toast({
            variant: "destructive",
            description: `${key?.attr}- ${key?.detail}`,
          });
        }
      }
    },
  });
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full gap-4"
      >
        <div>
          <SignInError error={searchParams.get("error")} />
        </div>
        {pathname === "/auth/register" && (
          <div className="w-full space-y-3">
            <div>
              <input
                defaultChecked
                onClick={(e: any) => setFieldValue("group", e.target.value)}
                type="radio"
                name="group"
                id="candidate"
                value={"CANDIDATE"}
              />
              <label htmlFor="candidate">Join As Candidate</label>
            </div>
            <div>
              <input
                onClick={(e: any) => setFieldValue("group", e.target.value)}
                type="radio"
                name="group"
                id="company"
                value={"COMPANY"}
              />
              <label htmlFor="company">Join As Company</label>
            </div>
          </div>
        )}

        <div className="w-full">
          <TextInput
            variant={"regularInput"}
            className="w-full border-tt-white-900"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            type="email"
            error={Boolean(errors.email) && touched.email && errors.email}
          />
        </div>
        <div className="w-full">
          <TextInput
            variant={"regularInput"}
            className="w-full border-tt-white-900"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            type="password"
            error={
              Boolean(errors.password) && touched.password && errors.password
            }
          />
          {pathname === "/auth/login" && (
            <div className="w-full  flex justify-end">
              <Link href={"/account/reset"}>
                <Button
                  type="button"
                  variant={"textBtn"}
                  label="Forget Password?"
                />
              </Link>
            </div>
          )}
        </div>

        <div className="w-full">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            variant={"roundedBtn"}
            label={
              isSubmitting
                ? "Loding..."
                : pathname === "/auth/register"
                ? "Sign Up"
                : "Login"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
