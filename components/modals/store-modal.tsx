'use client';

import { useStoreModal } from '@/hooks/use-state-model'
import { Modal } from '@/components/ui/modal'; 
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema  = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema)
    })

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
