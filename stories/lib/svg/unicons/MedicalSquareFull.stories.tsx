import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MedicalSquareFull, MedicalSquareFullPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MedicalSquareFull",
  component: MedicalSquareFull,
} as ComponentMeta<typeof MedicalSquareFull>;

const Template: ComponentStory<typeof MedicalSquareFull> = (
  args: MedicalSquareFullPropsI
) => (
  <x.div display="flex" gap="20px">
    <MedicalSquareFull {...args} />
    <MedicalSquareFull {...args} fill="red.500" />
    <MedicalSquareFull {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
