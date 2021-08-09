import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Previous, PreviousPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Previous",
  component: Previous,
} as ComponentMeta<typeof Previous>;

const Template: ComponentStory<typeof Previous> = (args: PreviousPropsI) => (
  <x.div display="flex" gap="20px">
    <Previous {...args} />
    <Previous {...args} fill="red.500" />
    <Previous {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
