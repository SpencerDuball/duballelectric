import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudBlock, CloudBlockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudBlock",
  component: CloudBlock,
} as ComponentMeta<typeof CloudBlock>;

const Template: ComponentStory<typeof CloudBlock> = (
  args: CloudBlockPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudBlock {...args} />
    <CloudBlock {...args} fill="red.500" />
    <CloudBlock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
