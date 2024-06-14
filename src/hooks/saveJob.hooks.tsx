import axiousResuest from "@/libs/axiosRequest";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useGetSavedJobData = (limit = 30, offset = 0) => {
  const { data: session }: any = useSession();
  return useQuery({
    queryKey: ["saved_job"],
    queryFn: () =>
      axiousResuest({
        url: `/user/saved-job/?limit=${limit}&offset=${offset}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
  });
};

export const useSaveJobData = () => {
  const queryClient = useQueryClient();
  const { data: session }: any = useSession();

  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/user/saved-job/`,
        method: "post",
        data: body,
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    onSuccess: () => queryClient.invalidateQueries(["saved_job"]),
  });
};

export const useDeleteSavedJob = (id: string) => {
  const queryClient = useQueryClient();
  const { data: session }: any = useSession();
  return useMutation({
    mutationFn: async () =>
      await axiousResuest({
        url: `/user/saved-job/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["saved_job"] });
    },
  });
};
