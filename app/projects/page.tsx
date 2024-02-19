"use client";
import React, { useEffect } from "react";
import Card from "@/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "@/redux/projectsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { createClient } from "@/lib/supabase/browser";
const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, status, error } = useSelector(
    (state: RootState) => state.projects,
  );
  const supabase = createClient();

  useEffect(() => {
    const pr = async () => {
      const { data } = await supabase.auth.getSession();
      const id: any = data.session?.user.id;
      dispatch(fetchProjects(id));
    };
    pr();
  }, [dispatch]);
  return (
    <>
      <p className="mt-20 text-4xl font-bold">Your Projects</p>
      <p className="w-20 mt-2 h-1 bg-slate-300"></p>

      <div className="w-full  px-40 py-5 flex gap-4 flex-wrap min-h-[400px]">
        {projects.map((item, index) => {
          return (
            <>
              {" "}
              <Card
                title={item.project_name}
                des={item.project_description}
                time={item.created_at}
                index={index}
              />{" "}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Page;
