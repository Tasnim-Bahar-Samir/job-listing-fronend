import axiousResuest from '@/libs/axiosRequest';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export type UserProfileType = {
  group : string;
};
export type ProfileDataResponseType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  user_profile: UserProfileType;
};

export const useGetProfileData = () => {
  const { data: session }: any = useSession();
  // console.log()
  return useQuery({
    // eslint-disable-next-line
    queryKey: ['user_profile'],
    queryFn: () =>
      axiousResuest({
        url: `/user/profile/${session?.user?.pk}/`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
  });
};


export const useUpdateProfile = (id = '') => {
    const queryClient = useQueryClient();
    const { data: session }: any = useSession();
    return useMutation({
      mutationFn: async (body: any) =>
        await axiousResuest({
          url: `/user/profile/${id || session?.user?.pk}/`,
          method: 'patch',
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user_profile'] });
      },
    });
  };
  