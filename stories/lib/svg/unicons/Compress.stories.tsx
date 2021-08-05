import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Compress, CompressPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Compress",
  component: Compress,
} as ComponentMeta<typeof Compress>;

const Template: ComponentStory<typeof Compress> = (args: CompressPropsI) => (
  <x.div display="flex" gap="20px">
    <Compress {...args} />
    <Compress {...args} fill="red.500" />
    <Compress {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
