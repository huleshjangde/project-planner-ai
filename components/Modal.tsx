import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { run } from "node:test";

export default function Modals({
  complete,
  call,
  name,
  discription,
  n,
  d,
  loading,
}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className=" bg-blue-500 text-white font-bold">
        New Project Plan
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Explain Your Idea
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-col flex-wrap md:flex-nowrap gap-4">
                  <Input
                    type="text"
                    label="Project Name"
                    value={n}
                    onChange={(e: any) => name(e.target.value)}
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="max-w-full"
                    value={d}
                    onChange={(e: any) => discription(e.target.value)}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {complete ? "Go" : "Cancel"}
                </Button>

                {!complete && (
                  <Button
                    isLoading={loading}
                    color="secondary"
                    spinner={
                      <svg
                        className="animate-spin h-5 w-5 text-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                    variant="solid"
                    onPress={call}
                  >
                    Generate
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
