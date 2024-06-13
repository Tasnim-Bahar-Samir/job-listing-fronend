"use client"
import Text from '@/components/core/typography/Text';
import Link from 'next/link';
import AuthForm from '@/components/pages/auth/AuthForm';
import { useRegisterUser } from '@/hooks/user.hook';

const RegisterPage = () => {
  const { mutateAsync } = useRegisterUser();
  return (
    <div className="px-5 py-5 w-full md:px-20 md:py-[30px] max-w-[580px] shadow-md rounded-[30px] xl:px-[100px] border">
      <div className="flex flex-col items-center justify-center space-y-[10px] md:space-y-[30px]">
      <div>
          <Text variant={"header_1"} label={"LOGO"} />
        </div>

    
        <AuthForm handleDataSubmit={mutateAsync} />
        <div className="w-full pt-2 flex items-center justify-center gap-1">
          <Text variant={'paragraph_3'} label={`Already Have an account?`} />
          <Link className="text-blue-500" href={'/auth/login'}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
