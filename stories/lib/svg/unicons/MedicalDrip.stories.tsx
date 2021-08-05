import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MedicalDrip, MedicalDripPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MedicalDrip",
  component: MedicalDrip,
} as ComponentMeta<typeof MedicalDrip>;

const Template: ComponentStory<typeof MedicalDrip> = (
  args: MedicalDripPropsI
) => (
  <x.div display="flex" gap="20px">
    <MedicalDrip {...args} />
    <MedicalDrip {...args} fill="red.500" />
    <MedicalDrip {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
