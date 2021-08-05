import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PrescriptionBottle, PrescriptionBottlePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PrescriptionBottle",
  component: PrescriptionBottle,
} as ComponentMeta<typeof PrescriptionBottle>;

const Template: ComponentStory<typeof PrescriptionBottle> = (
  args: PrescriptionBottlePropsI
) => (
  <x.div display="flex" gap="20px">
    <PrescriptionBottle {...args} />
    <PrescriptionBottle {...args} fill="red.500" />
    <PrescriptionBottle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
