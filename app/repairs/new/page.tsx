"use client";
import { RepairForm } from "@/app/components/repairs/repairs-form";
import { Progress } from "@/app/components/utils/progress/progress";
import { NextPage } from "next";
import React from "react";

const RepairNew: NextPage = async () => {
  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        修理伝票作成
      </div>
      <Progress progressNumber={1} progressArray={["発注", "確認", "完了"]} className="my-6" />
      <RepairForm />
    </div>
  );
};

export default RepairNew;
