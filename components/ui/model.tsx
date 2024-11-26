"use client"



interefacec ModalProps{
    title:string;
    description:string;
    isOpen:boolean;
    onClose:()=> void;
    children?: React.ReactNode;
};
export const Modal: React.Fc<ModalProps>=({
    title,
    description,
    isOpen,
    onClose,
    children
})=>{
    const onChange = (open:boolean)=>{
        if(!open){
            onClose();
        }
    }
}
