import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MouseAlt2, MouseAlt2PropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MouseAlt2",
  component: MouseAlt2,
} as ComponentMeta<typeof MouseAlt2>;

const Template: ComponentStory<typeof MouseAlt2> = (args: MouseAlt2PropsI) => (
  <x.div display="flex" gap="20px">
    <MouseAlt2 {...args} />
    <MouseAlt2 {...args} fill="red.500" />
    <MouseAlt2 {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
