import axiousResuest from '@/libs/axiosRequest';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/auth/register/`,
        method: 'post',
        data: body,
      }),
    onSuccess: () => queryClient.invalidateQueries(['auth']),
  });
};