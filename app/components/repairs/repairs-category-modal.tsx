"use client";
import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { UseFormSetValue } from "react-hook-form";
import { Repair, RepairTemplate } from "@/types";
import { Button } from "../utils/button";
import { RepairsCategoryList } from "./repairs-category-list";

type Props = {
  setValue: UseFormSetValue<Repair | RepairTemplate | any>;
};

export const RepairsCategoryModal: FC<Props> = ({ setValue }) => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = () => setIsModal(true);
  return (
    <>
      <Button type="button" bg="bg-black" size="md" onClick={onOpen}>
        検索
      </Button>
      <Modal w="500px" title="検索" isModal={isModal} setIsModal={setIsModal}>
        <RepairsCategoryList
          setValue={setValue}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      </Modal>
    </>
  );
};
