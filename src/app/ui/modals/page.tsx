import React from "react";

interface ModalProps {
  id: string;
  title: string;
  content: React.ReactNode;
  onCloseText?: string;
}

// Define the page component
const ModalsPage: React.FC = () => {
  return (
    <div>
      <h1>Modals Page</h1>
      <Modal 
        id="example-modal" 
        title="Example Modal" 
        content="This is a test modal content" 
        onCloseText="Close"
      />
    </div>
  );
};

// Define the Modal component
const Modal: React.FC<ModalProps> = ({ id, title, content, onCloseText }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-[#ffffff] text-black dark:bg-[#181818] dark:text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="py-4">{content}</div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">{onCloseText || "Close"}</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ModalsPage;
