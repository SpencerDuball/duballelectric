import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Label, LabelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelPropsI) => (
  <x.div display="flex" gap="20px">
    <Label {...args} />
    <Label {...args} fill="red.500" />
    <Label {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
