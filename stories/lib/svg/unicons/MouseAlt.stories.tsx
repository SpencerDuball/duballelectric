import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MouseAlt, MouseAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MouseAlt",
  component: MouseAlt,
} as ComponentMeta<typeof MouseAlt>;

const Template: ComponentStory<typeof MouseAlt> = (args: MouseAltPropsI) => (
  <x.div display="flex" gap="20px">
    <MouseAlt {...args} />
    <MouseAlt {...args} fill="red.500" />
    <MouseAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
