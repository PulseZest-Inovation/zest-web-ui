import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ZestModalBody: React.FC<Props> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};



// Usage:
// import {
//   ZestModal,
//   ZestModalHeader,
//   ZestModalBody,
//   ZestModalFooter,
// } from "zest-web-ui";

// export default function Page() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <button onClick={() => setOpen(true)}>Open</button>

//       <ZestModal open={open} onClose={() => setOpen(false)}>
//         <ZestModalHeader>
//           <h2 className="text-lg font-bold">Delete Item</h2>
//         </ZestModalHeader>

//         <ZestModalBody>
//           Are you sure you want to delete this item?
//         </ZestModalBody>

//         <ZestModalFooter>
//           <button onClick={() => setOpen(false)}>Cancel</button>
//           <button className="bg-red-500 text-white px-4 py-2 rounded">
//             Delete
//           </button>
//         </ZestModalFooter>
//       </ZestModal>
//     </>
//   );
// }