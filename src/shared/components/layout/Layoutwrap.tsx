
import { useState } from "react";
import { ModelContext } from "../../../Popup";
import Layout from "./Layout";
import Login from "../forms/Atuth";


const LayoutWrapper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModel = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);

  return (
    <ModelContext.Provider value={{ isOpen, openModel, closeModel }}>
      <Layout />
      {isOpen && <Login />}
    </ModelContext.Provider>
  );
};

export default LayoutWrapper;