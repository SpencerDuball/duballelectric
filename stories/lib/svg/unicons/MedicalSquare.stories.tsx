import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MedicalSquare, MedicalSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MedicalSquare",
  component: MedicalSquare,
} as ComponentMeta<typeof MedicalSquare>;

const Template: ComponentStory<typeof MedicalSquare> = (
  args: MedicalSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <MedicalSquare {...args} />
    <MedicalSquare {...args} fill="red.500" />
    <MedicalSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
