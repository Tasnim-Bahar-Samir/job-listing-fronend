import axiousResuest from "@/libs/axiosRequest";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export type JobResponseType = {
  id: string;
  title: string;
  salary: string;
  company: string;
  location: string;
  deadline: string;
};

export const useGetUserJobData = (limit = 30, offset = 0) => {
  const { data: session }: any = useSession();
  return useQuery({
    queryKey: ["job"],
    queryFn: () =>
      axiousResuest({
        url: `/job/management/?user__id=${session?.user?.pk}&limit=${limit}&offset=${offset}`,
        method: "get",
      }),
  });
};
export const useGetJobData = (limit = 30, offset = 0) => {
  return useQuery({
    queryKey: ["job"],
    queryFn: () =>
      axiousResuest({
        url: `/job/management/?limit=${limit}&offset=${offset}`,
        method: "get",
      }),
  });
};

export const useAddJobData = () => {
  const queryClient = useQueryClient();
  const { data: session }: any = useSession();

  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/job/management/`,
        method: "post",
        data: body,
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    onSuccess: () => queryClient.invalidateQueries(["job"]),
  });
};

export const useUpdateJob = (id: string) => {
  const queryClient = useQueryClient();
  const { data: session }: any = useSession();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/job/management/${id}/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["job"] });
    },
  });
};

export const useDeleteJob = (id: string) => {
  const queryClient = useQueryClient();
  const { data: session }: any = useSession();
  return useMutation({
    mutationFn: async () =>
      await axiousResuest({
        url: `/job/management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["job"] });
    },
  });
};
