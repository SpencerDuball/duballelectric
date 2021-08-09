import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LabelAlt, LabelAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LabelAlt",
  component: LabelAlt,
} as ComponentMeta<typeof LabelAlt>;

const Template: ComponentStory<typeof LabelAlt> = (args: LabelAltPropsI) => (
  <x.div display="flex" gap="20px">
    <LabelAlt {...args} />
    <LabelAlt {...args} fill="red.500" />
    <LabelAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
