'use client';

import { useStoreModal } from '@/hooks/use-state-model'
import { Modal } from '@/components/ui/modal'; 
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema  = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues:{
            name:"",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>)=>{
        console.log(values)
    }

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            {/* Content inside the modal */}
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field })=>(
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='E-commerce' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                            />

                            
                        </form>

                    </Form>
                </div>
            </div>
        </Modal>
    );
};
