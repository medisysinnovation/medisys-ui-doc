import React from "react";
import Btn from "@chrisluyi/medisys-components";
import { Button as AntdButton } from "antd";
import { Button, Select } from "@medisys/medisys-ui";

export default function() {
  console.log(Btn);
  const btnConfig = {
    variant: "contained",
    color: "secondary",
  };
  return (
    <div>
      <Btn color="red">Test</Btn>
      <AntdButton type="link">Link Button</AntdButton>
      <Button {...btnConfig}>Test</Button>
    </div>
  );
}
