"use client"
import { Modal } from "@/components/ui/model"


const SetupPage = () => {
  return (
    <div>
      <Modal title="Info" description="Details" isOpen={true} onClose={() => { }}>
        <p>This is extra content!</p>
      </Modal>
    </div>
  )
}

export default SetupPage



    