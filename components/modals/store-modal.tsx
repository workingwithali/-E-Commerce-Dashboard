'use client';

import { useStoreModal } from '@/hooks/use-state-model'
import { Modal } from '@/components/ui/modal'; 


export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            {/* Content inside the modal */}
            <div>
                <p>Future create store form goes here.</p>
            </div>
        </Modal>
    );
};
