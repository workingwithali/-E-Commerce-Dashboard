"use client"
import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-state-model"
import { useEffect } from "react"


const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.onOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    };
  }, [isOpen,onOpen]);
  
  return (
    <div>
      <Modal title="Info" description="Details" isOpen onClose={() => { }}>
        <p>This is extra content!</p>
      </Modal>
    </div>
  )
}

export default SetupPage



